"use server";

import { headers } from "next/headers";
import { type ContactSubmission,  } from "./schema";
import { validateTurnstile } from "./turnstile";
import { SendEmailsResult, sendEmails } from "./emailService";
import { validateZod } from "./validateZod";

export type SendContactMessageResult =
    | SendEmailsResult
    | {
        success: false;
        errors: string[];
        type: "zod" | "token";
    };

export async function sendContactMessage({
  email,
  firstName,
  lastName,
  message,
  website,
  token,
  submissionId
}: ContactSubmission): Promise<SendContactMessageResult> {

  const requestHeaders = await headers();

  const remoteIp =
    requestHeaders.get("cf-connecting-ip") ||
    requestHeaders.get("x-forwarded-for") ||
    "unknown";

  const zodValidation = validateZod({
    email,
    firstName,
    lastName,
    message,
    website,
    token,
    submissionId
  });

  if (!zodValidation.success) {
    return {
      success: false,
      errors: zodValidation.errors,
      type: 'zod'
    }
  }

  const validation = await validateTurnstile({ token: zodValidation.data.token, remoteIp });

  if (!validation.success) {
    return {
      success: false,
      errors: validation.errors,
      type: 'token'
    }
  }
  const emailsReceipt = await sendEmails({ ...zodValidation.data });

  return emailsReceipt;

}



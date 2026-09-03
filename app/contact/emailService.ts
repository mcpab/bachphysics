 import "server-only"
import { senderEmail, adminEmail } from "./emailTemplates";
import { resend } from "./resend";
import type { Inputs } from "./schema";



export type SendEmailsResult =
    | {
        success: true;
    }
    | {
        success: false;
        errors: string[];
        type: "admin" | "sender";
    };

export async function sendEmails({
  email, firstName, lastName, message, submissionId
}: Inputs ): Promise<SendEmailsResult> {

  const fullName = `${firstName} ${lastName}`.trim();

  const senderEmailFormatted = senderEmail({ firstName, message });
  const adminEmailFormatted = adminEmail({ fullName, email, message });

  const { error: errorAdmin } = await resend.emails.send({
    from: "Bach and Physics <contact@bachphysics.com>",
    to: "contact@bachphysics.com",
    replyTo: email,
    subject: `New message from ${fullName}`,
    ...adminEmailFormatted
  },
    {
      idempotencyKey: `${submissionId}-admin`,
    });

  if (errorAdmin) {
    return {
      success: false,
      type: 'admin',
      errors: [errorAdmin.message],
    };
  }

  const { error: errorSender } = await resend.emails.send({
    from: "Bach and Physics <contact@bachphysics.com>",
    to: email,
    replyTo: "contact@bachphysics.com",
    subject: "Thank you for contacting Bach and Physics",
    ...senderEmailFormatted
  },
    {
      idempotencyKey: `${submissionId}-sender`,
    });

  if (errorSender) {
    return {
      success: false,
      type: 'sender',
      errors: [errorSender.message],
    };
  }

  return {
    success: true,
  };
}

 
import * as z from "zod";
import { type ContactSubmission,  contactSubmissionSchema } from "./schema";

type ZodValidationResult = {
  success: true;
  data: ContactSubmission;
} |
{
  success: false;
  errors: string[];
};
export function validateZod({
  email, firstName, lastName, message, website, token, submissionId
}: ContactSubmission): ZodValidationResult {


  const { success, error, data } = contactSubmissionSchema.safeParse({ email, firstName, lastName, message, website, submissionId, token });

  if (!success) {
    return {
      success: false,
      errors: [z.prettifyError(error)],
    };
  } else {
    return {
      success: true,
      data
    };
  }

}

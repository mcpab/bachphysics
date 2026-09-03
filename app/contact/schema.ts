import * as z from "zod";

export const contactSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1, "First name is required")
        .max(100, "Name is too long"),
    lastName: z
        .string()
        .trim()
        .min(1, "Last name is required")
        .max(100, "Name is too long"),
    email: z.email(),
    message: z.string().min(1, "Message is required")
        .max(5000, "Message is too long"),
    website: z
        .string()
        .max(0, "Invalid submission")
        .optional(),
    submissionId: z.uuid()
}).required();

export const contactSubmissionSchema = contactSchema.extend({
    token: z
        .string()
        .min(1, "Turnstile token is required")
        .max(2048, "Turnstile token is invalid"),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

export type Inputs = z.infer<typeof contactSchema>;

export const turnstileSiteverifyResponseSchema = z.object({
  success: z.boolean(),
  hostname: z.string().optional(),
  "error-codes": z.array(z.string()).optional(),
});

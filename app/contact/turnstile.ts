import "server-only"
import { turnstileSiteverifyResponseSchema } from "./schema";

type TurnstileValidationResult = {
  success: true;
} |
{
  success: false;
  errors: string[];
};

const isProduction = process.env.NODE_ENV === "production";

const allowedHostnames = isProduction
    ? new Set([
        "bachphysics.com",
        "www.bachphysics.com",
    ])
    : new Set([
        "example.com", // Returned by your Cloudflare test credentials
        "localhost",
    ]);
export async function validateTurnstile({ token, remoteIp }: { token: string; remoteIp: string; }): Promise<TurnstileValidationResult> {


  try {

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
          remoteip: remoteIp,
        }),
        signal: AbortSignal.timeout(8000),
      }
    );


    const parsedSiteverifyResponse = turnstileSiteverifyResponseSchema.safeParse(await response.json());

    if (!parsedSiteverifyResponse.success) {
      return ({
        success: false,
        errors: ['invalid-siteverify-response']
      });
    }

    const { success, hostname, "error-codes": errorCodes } = parsedSiteverifyResponse.data;
 
    if (!success) {
      return {
        success: false,
        errors: errorCodes ?? ['unknown-turnstile-error']
      };
    }

    if (hostname === undefined || !allowedHostnames.has(hostname)) {
      return ({
        errors: ['hostname-mismatch'],
        success: false
      });
    }

    return {
      success: true
    };

  } catch (error) {

    console.error("Turnstile validation error:", error);
    return {
      success: false,
      errors: ['unknown-turnstile-error']
    };

  }
}

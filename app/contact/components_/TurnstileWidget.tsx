import Box from "@mui/material/Box";

export function TurnstileWidget() {

    return (
        <Box display="flex" justifyContent="center">
            <Box
                className="cf-turnstile"
                data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                data-callback="onTurnstileSuccess"
                data-expired-callback="onTurnstileExpired"
                data-error-callback="onTurnstileError"
                data-refresh-expired="auto"
                data-appearance="interaction-only"
                data-size="flexible"
            />
        </Box>
    )


}
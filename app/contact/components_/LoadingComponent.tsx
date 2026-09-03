import { LeadText } from "@/app/components/TextComponents";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { ContactFormState } from "../contactForm";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export type LoadingComponentProps = {
    status: ContactFormState
}

export function LoadingComponent({
    status,
}: LoadingComponentProps) {
    switch (status) {
        case "clientTokenInitializing":
            return <Initializing />;

        case "clientTokenError":
        case "serverTokenError":
            return <TokenError />;

        case "clientTokenExpired":
            return <Expired />;

        case "serverAdminEmailError":
            return <EmailError />;
        case "serverSenderEmailError":
            return <ConfirmationEmailError />

        case "serverZodNotMatching":
        case "clientSubmissionError":
            return <UnexpectedError />

        case "serverSubmissionSuccess":
            return <ThankYou />;

        case "serverNotSubmitted":
        case "clientValidToken":
            return null;

        default: {
            const exhaustiveCheck: never = status;
            return exhaustiveCheck;
        }
    }
}


function ThankYou() {
    return (
        <Box
            position="absolute"
            top={120}
            left={0}
            right={0}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap={2}
            px={2}
        >
            <CheckCircleOutlineIcon
                sx={{
                    fontSize: 40,
                    color: "success.main",
                }}
            />

            <LeadText>
                Thank you for your message.
            </LeadText>

            <LeadText>
                Your message has been sent successfully. We will reply if appropriate
                to the subject of the site.
            </LeadText>
        </Box>
    );
}

function Initializing() {
    return (
        <Box
            position="absolute"
            top={120}
            left={0}
            right={0}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
        >
            <CircularProgress size={28} thickness={4} />

            <LeadText>
                Completing security verification…
            </LeadText>
        </Box>
    );
}


function Expired() {
    return (
        <Box
            position="absolute"
            top={120}
            left={0}
            right={0}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
        >
            <CircularProgress size={28} thickness={4} />

            <LeadText>
                Security verification has expired. Refreshing…
            </LeadText>
        </Box>
    );
}

function TokenError() {
    const onClick = () => {
        window.turnstile?.reset();
    };

    return (
        <Box
            position="absolute"
            top={120}
            left={0}
            right={0}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
        >
            <LeadText>
                Security verification could not be completed.
            </LeadText>

            <Button
                variant="outlined"
                onClick={onClick}
            >
                Try again
            </Button>
        </Box>
    );
}


function EmailError() {
    return (
        <Box
            position="absolute"
            top={120}
            left={0}
            right={0}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap={1.5}
            px={2}
        >
            <LeadText>
                We were unable to send your message.
            </LeadText>

            <LeadText>
                Please try again, or contact us directly at{" "}
                <Box
                    component="a"
                    href="mailto:contact@bachphysics.com"
                    sx={{
                        color: "inherit",
                        textDecoration: "underline",
                    }}
                >
                    contact@bachphysics.com
                </Box>
                .
            </LeadText>
        </Box>
    );
}


function ConfirmationEmailError() {
    return (
        <Box
            position="absolute"
            top={120}
            left={0}
            right={0}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap={1.5}
            px={2}
        >
            <LeadText>
                Your message was delivered successfully, but we could not send you a confirmation email.
            </LeadText>

            <LeadText>
                We will reply if appropriate
                to the subject of the site.
            </LeadText>
        </Box>
    );
}


function UnexpectedError() {
    return (
        <Box
            position="absolute"
            top={120}
            left={0}
            right={0}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap={1.5}
            px={2}
        >
            <LeadText>
                Something went wrong while processing your message.
            </LeadText>

            <LeadText>
                Please try again, or contact us directly at{" "}
                <Box
                    component="a"
                    href="mailto:contact@bachphysics.com"
                    sx={{
                        color: "inherit",
                        textDecoration: "underline",
                    }}
                >
                    contact@bachphysics.com
                </Box>
                .
            </LeadText>
        </Box>
    );
}


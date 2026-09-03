'use client';

import Box from "@mui/material/Box";
import { useContactForm } from "../contactForm";
import { FormComponent } from "./FormComponent";
import { LoadingComponent } from "./LoadingComponent";
import { TurnstileScript } from "./TurnstileScript";
import { TurnstileWidget } from "./TurnstileWidget";



export default function ContactForm() {

    const contactForm = useContactForm();

    return (
        <Box position="relative" minHeight={420}>
            <TurnstileScript />
            <TurnstileWidget />

            <FormComponent
                contactForm={contactForm }
            />
            <LoadingComponent
                status={contactForm .status}
            />
        </Box>
    );
}

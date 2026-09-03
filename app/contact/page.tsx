import { StandardStack } from "@mcpab/web-blocks";
import { PageFrame } from "../components/PageFrame";
import { LeadText } from "../components/TextComponents";
import ContactForm from "./components_/ContactForm";

export default function Contact() {


    return (
        <PageFrame maxWidth="sm">
            <StandardStack spacing={3}>

                <LeadText>
                    We welcome thoughtful comments on the site and its content. We are especially
                    glad to hear from readers with questions, corrections, or constructive
                    observations. We may not be able to reply to every message, and we do not
                    respond to solicitations, promotional requests, or messages unrelated to the
                    subject of the site.
                </LeadText>

                <ContactForm />
            </StandardStack>
        </PageFrame>
    )


}
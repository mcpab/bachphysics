import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";

import bachScore from "@/public/img/bach_art_of_fugue.png";
import { NoteText, Strapline } from "./TextComponents";

export function HomeClosingScore() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: "background.default",
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        textAlign: "center",
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            mx: "auto",
                            maxWidth: 820,
                            opacity: 0.82,
                            filter: "grayscale(1)",
                        }}
                    >
                        <Image
                            src={bachScore}
                            alt="Excerpt from a Bach musical score"
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                            priority={false}
                        />
                    </Box>

                    <Strapline
                        sx={{
                            mt: { xs: 4, md: 5 },
                            fontWeight: 600,
                            color: "primary.main",
                        }}
                    >
                        Notes on Mathematics, Physics, and Harmony
                    </Strapline>

                    <NoteText
                        sx={{
                            mt: 2,
                            mx: "auto",
                            color: "text.secondary",
                        }}
                    >
                       A closing cadence for essays shaped by mathematics, physics, and music.
                    </NoteText>
                </Box>
            </Container>
        </Box>
    );
}

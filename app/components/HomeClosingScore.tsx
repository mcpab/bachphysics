import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import bachScore from "@/public/img/bach_art_of_fugue.png";

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

                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            mt: { xs: 4, md: 5 },
                            fontWeight: 600,
                            color: "primary.main",
                        }}
                    >
                        Notes on Mathematics, Physics, and Harmony
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            mt: 2,
                            mx: "auto",
                            maxWidth: "48ch",
                            color: "text.secondary",
                        }}
                    >
                        A quiet closing cadence for essays written in the hope that others
                        may find joy, wonder, and illumination in the study of nature,
                        mathematics, and music.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

import { StandardStack } from "@mcpab/web-blocks";
import { ThreeColumnsFooter } from "@mcpab/web-blocks";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { FinePrint } from "./TextComponents";
import Divider from "@mui/material/Divider";
import { NextMuiLink } from "./NextMuiLink";


export function SiteFooter() {
    const column_1 = (
        <Box
            sx={{
                width: '100%',
                maxWidth: { xs: '100%', md: 370 },
                pr: { md: 3 },
                    mx: 'auto',
            }}
        >
            <StandardStack size="compact">
                <NextMuiLink href='/'><FinePrint><strong>Bach and Physics</strong></FinePrint></NextMuiLink>
                <Box>
                    <FinePrint> <strong>Notes on Mathematics, Physics, and Harmony</strong></FinePrint>
                    <FinePrint>A collection of essays on physics, mathematics, and the ideas that connect them.</FinePrint>
                </Box>
            </StandardStack>
        </Box>
    );

    const column_2 = (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'left',
                paddingBottom: 2
            }}
        >
            <StandardStack size="compact" sx={{ width: 'fit-content' }}>
                <FinePrint><strong>Essays</strong></FinePrint>
                <NextMuiLink href='/physics'> <FinePrint> Physics</FinePrint></NextMuiLink>
            </StandardStack>
        </Box>
    );

    const column_3 = (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'left',
                paddingBottom: 2
            }}
        >
            <StandardStack size="compact" sx={{ width: 'fit-content' }}>
                <FinePrint><strong> Site</strong> </FinePrint>
                <NextMuiLink href='/about'> <FinePrint>About</FinePrint></NextMuiLink> 
                <NextMuiLink href='/colophon'> <FinePrint>  Colophon </FinePrint></NextMuiLink> 
                <FinePrint>Contact</FinePrint>
                <FinePrint>RSS</FinePrint>
            </StandardStack>
        </Box>
    );


    const footer = (
        <Box sx={{ width: '100%', textAlign: 'left', marginTop: 4 }}>
            <Divider color='primary' sx={{
                borderColor: 'divider',
                opacity: 0.25,
                mb: 2,
            }} />
            <FinePrint sx={{ opacity: 0.7, fontSize: '0.9rem' }}>  © 2026 Bach and Physics. All rights reserved.</FinePrint>
        </Box>
    );
    return (

        <Container
            maxWidth={false}
            sx={{
                maxWidth: { xs: '100%', md: 900, lg: 1120 },
                px: { xs: 2, sm: 3, md: 4 },
                mb: 6,
            }}
        >
            <ThreeColumnsFooter
                column_1={column_1}
                column_2={column_2}
                column_3={column_3}
                footer={footer}
            />
        </Container>
    )



}

import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import { MediaText, StandardStack } from '@mcpab/web-blocks';
import Typography from '@mui/material/Typography';
import { PageFrame } from '../components/PageFrame';
import { LeadText } from '../components/TextComponents';
import Box from '@mui/material/Box';

export default function AboutPage(): React.ReactElement {

    const aboutMessage = (
        <StandardStack size="standard">

            <LeadText>
                BachPhysics is a long-term collection project of essays on physics,
                mathematics, and their deep connections to the structure of nature.
                <Typography
                    component="span"
                    sx={{
                        fontStyle: "italic",
                    }}
                >
                    The guiding philosophy is understanding through derivation:
                    following ideas from first principles and justify each step along the way.
                </Typography>
            </LeadText>

            <LeadText>
                I received a Laurea in Physics from the University of Bologna and a
                Ph.D. in Theoretical Physics from the University of Stuttgart. My
                professional career has been spent at the intersection of science,
                engineering, and technology.
            </LeadText>

            <LeadText>
                Physics has remained my greatest intellectual passion throughout my life. This site grew from a
                lifelong fascination with the remarkable effectiveness of mathematics in
                describing the natural world, and from the conviction that genuine
                understanding comes not from memorizing formulas but from carefully
                following the chain of reasoning that leads to them.
            </LeadText>

            <LeadText>
                The essays collected here are offered in the hope that students,
                self-learners, and fellow enthusiasts may find some of the same joy,
                wonder, and illumination that accompany the study of mathematics,
                physics, and the profound harmonies found in music.
            </LeadText>
        </StandardStack>
    );

    return (
        <PageFrame maxWidth="lg">
            <MediaText
                ImageComponent={NextImageAdapter}
                image="/img/MarcoAbout.jpg"
                message={aboutMessage}
                textSplit={{ preset: '50-50' }}
                caption={
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            pt: 1,
                            textAlign: 'center',
                        }}
                    >
                        Marco Brunelli, PhD — Founder and author of BachPhysics.
                    </Box>
                }
                pad
                sx={{
                    minHeight: { xs: 420, md: 520 },
                    overflow: 'hidden',
                }}
                imageConf={{
                    mode: 'contain',
                    sizes: '(max-width: 899px) calc(100vw - 64px), (max-width: 1200px) 46vw, 552px',
                }}
                gap={{ unit: '%', value: 2 }}
            />
        </PageFrame>
    );
}

import {
    PageTitle,
    StandardStack,
    SubsectionTitle
} from '@mcpab/web-blocks';
import Box from '@mui/material/Box';
import { PageFrame } from '../components/PageFrame';
import { LeadText } from '../components/TextComponents';
import Typography from '@mui/material/Typography';
import { NextImageAdapter } from '@/src/components/NextImageAdapter';

export default function ColophonPage(): React.ReactElement {
    return (
        <PageFrame>
            <Box
                sx={{
                    maxWidth: {
                        xs: '100%',
                        md: '74ch',
                        lg: '82ch',
                    },
                    width: '100%',
                }}
            >
                <PageTitle
                    sx={{
                        fontSize: 'clamp(2.75rem, 5vw, 4.125rem)',
                        hyphens: 'auto',
                        mb: { xs: 4, md: 6 },
                        overflowWrap: 'break-word',
                    }}
                >
                    Colophon
                </PageTitle>

                <StandardStack size="large">
                    <Typography variant='narrative' >How Bach and Physics is written, typeset, and built.</Typography>

                    <Box component="section">
                        <SubsectionTitle sx={{ mb: 1.5 }}>Motivation</SubsectionTitle>

                        <LeadText>
                            Bach and Physics was designed with two principal goals. First, the author wanted contributors to
                            be able to write and publish technical essays without requiring knowledge of web development. An author
                            should be able to work almost entirely in LaTeX, using the same tools and document structures
                            that would be used to prepare a conventional scientific or mathematical document.
                        </LeadText>

                        <LeadText>
                            Second, the site was designed to be as lightweight and responsive as possible.
                            Since LaTeX essays are essentially static documents, there is little reason to parse
                            and construct them in the reader's browser. A custom LaTeX-to-React compiler was
                            therefore developed to process the documents ahead
                            of time and generate the React representation used to produce the final static pages.
                            Only the small number of components that require interaction are hydrated in the browser.
                        </LeadText>


                    </Box>

                    <Box component="section">
                        <SubsectionTitle sx={{ mb: 1.5 }}>
                            The Role of AI
                        </SubsectionTitle>

                        <LeadText>
                            Artificial intelligence is profoundly transforming the way we work,
                            and it has played an important role in making the rapid development of
                            Bach and Physics possible. It will undoubtedly continue to do so.
                            At the same time, clear boundaries have been maintained between the
                            work of the author and the role of AI throughout the project.
                        </LeadText>

                        <Typography variant="h6" sx={{ mt: 4, mb: 1.5 }}>
                            Scientific Content
                        </Typography>

                        <LeadText>
                            The physics and mathematics presented in the essays are the work of
                            the author. AI is not used to generate the scientific content or to
                            determine the mathematical and physical arguments developed in the
                            essays.
                        </LeadText>

                        <LeadText>
                            AI has, however, proved to be an invaluable sparring partner during
                            their preparation. It has been used to challenge derivations, identify
                            possible mistakes, discuss the structure and presentation of arguments,
                            and help maintain the standards of detail and clarity that the project
                            aims to achieve. It has also assisted with mechanical tasks such as
                            converting handwritten notes and screenshots into LaTeX.
                        </LeadText>

                        <Typography variant="h6" sx={{ mt: 4, mb: 1.5 }}>
                            Software
                        </Typography>

                        <LeadText>
                            The software architecture of Bach and Physics was designed by the author
                            and was not created through &ldquo;vibe coding.&rdquo; The principal React
                            components, the LaTeX-to-React publishing system, and the supporting
                            packages and abstractions were designed and developed as a coherent
                            software architecture rather than generated from high-level prompts.
                        </LeadText>

                        <LeadText>
                            Among the systems developed for the project are a general-purpose
                            LaTeX-to-React compiler built around KaTeX, reusable React building
                            blocks, and a flexible layout system based on CSS Grid.
                        </LeadText>

                        <LeadText>
                            AI has nevertheless been an extremely effective development partner.
                            It has helped evaluate architectural choices, identify and diagnose bugs,
                            develop test suites, work through the intricacies of the Ohm grammar,
                            and resolve package-management, build, and deployment problems.
                        </LeadText>

                        <LeadText>
                            AI has also contributed more directly to routine development tasks,
                            including refactoring, writing configuration files, implementing
                            well-defined changes, and handling repetitive or mechanical aspects of
                            the implementation. These contributions have substantially accelerated
                            development without replacing the author&apos;s responsibility for the
                            architecture and the critical components of the system.
                        </LeadText>

                        <Typography variant="h6" sx={{ mt: 4, mb: 1.5 }}>
                            Figures, Design, and Language
                        </Typography>

                        <LeadText>
                            AI has played a more direct role in other aspects of the project.
                            Most of the original illustrations and figures used throughout the
                            site have been created with the assistance of generative AI. AI has
                            also contributed substantially to the visual development of the site
                            by providing suggestions on layout and presentation.
                        </LeadText>

                        <LeadText>
                            Finally, AI has been used extensively as an editorial tool. The ideas
                            and original prose are those of the author, but AI has helped revise
                            the English, improve clarity and fluency, and express the author&apos;s
                            intended meaning more effectively.
                        </LeadText>

                        <LeadText>
                            Without AI, Bach and Physics could certainly have been built, but
                            bringing the project to its present state would have taken
                            considerably longer.
                        </LeadText>
                    </Box>

                    <Box component="section">
                        <SubsectionTitle sx={{ mb: 1.5 }}>Writing</SubsectionTitle>

                        <LeadText>
                            All essays in Bach and Physics are written in LaTeX. The web pages are
                            generated directly from the LaTeX source files. This allows the author
                            to write a single LaTeX document, relying on most of the standard LaTeX
                            environments, without having to create or maintain a separate version
                            for the web.
                        </LeadText>

                    </Box>

                    <Box component="section">
                        <SubsectionTitle sx={{ mb: 1.5 }}>The Publishing System</SubsectionTitle>

                        <LeadText>
                            Bach and Physics uses a custom publishing system developed specifically
                            for the site by the author. The LaTeX source
                            is parsed using an Ohm grammar and converted into a structured abstract
                            syntax tree (AST), which is then transformed into React components for
                            publication on the web.
                        </LeadText>

                        <LeadText>
                            The system supports the LaTeX structures used throughout the essays,
                            including sections, mathematical environments, equations, figures,
                            cross-references, and citations, while preserving the organization of
                            the original document.
                        </LeadText>

                        <Box
                            component="figure"
                            sx={{
                                m: 0,
                                mt: { xs: 3, md: 4 },
                                overflowX: 'auto',
                                WebkitOverflowScrolling: 'touch',
                            }}
                        >
                            <Box sx={{ minWidth: { xs: 760, md: 0 }, width: '100%' }}>
                                <NextImageAdapter
                                    src="/img/publishing-system-flowchart.png"
                                    alt="Five-stage Bach and Physics publishing pipeline: write LaTeX and images, compile the semantic document structure, generate typed artifacts and metadata, build static pages with Next.js and React, and publish pre-rendered HTML on Vercel."
                                    width={1672}
                                    height={941}
                                    sizes="(max-width: 899px) 760px, 82ch"
                                    style={{
                                        display: 'block',
                                        height: 'auto',
                                        width: '100%',
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>

                    <Box component="section">
                        <SubsectionTitle sx={{ mb: 1.5 }}>Typesetting and Rendering</SubsectionTitle>
                        <LeadText>
                            Mathematical expressions are typeset using KaTeX as part of the page generation
                            process. KaTeX is particularly well suited to this project because it can run in
                            a Node.js environment, allowing the mathematical expressions to be converted to
                            HTML during the build rather than in the reader&apos;s browser.
                        </LeadText>

                        <LeadText>
                            The LaTeX documents are compiled once and the resulting pages are rendered to
                            static HTML during the build, so that no document parsing or generation is
                            required in the reader&apos;s browser. Limited React hydration is used only for
                            the few interactive components, such as equation references and figure zooming.
                        </LeadText>

                        <LeadText>
                            This approach keeps the client-side application lightweight and allows even
                            mathematics-heavy essays to load and render quickly.
                        </LeadText>
                    </Box>

                    <Box component="section">
                        <SubsectionTitle sx={{ mb: 1.5 }}>The Website</SubsectionTitle>

                        <LeadText>
                            The website is built with Next.js, React, TypeScript, and Material UI. The publishing
                            system is organized as a collection of independently versioned packages,
                            which together provide the infrastructure used by Bach and Physics to
                            process and publish its essays.
                        </LeadText>

                        <LeadText>
                            The production site is deployed on Vercel, where the complete collection
                            of essays is built from its LaTeX sources and published as optimized
                            static web pages.
                        </LeadText>
                    </Box>


                    <Box component="section">
                        <SubsectionTitle sx={{ mb: 1.5 }}>Typography and Design</SubsectionTitle>
                        <LeadText>
                            The design of Bach and Physics is intentionally restrained, with an emphasis
                            on typography, readability, and the presentation of mathematical content.
                            The layout is designed to preserve the character of a technical document
                            while taking advantage of the navigation and presentation possibilities of
                            the web.
                        </LeadText>

                    </Box>

                    <Box component="section">
                        <SubsectionTitle sx={{ mb: 1.5 }}>Images and historical material</SubsectionTitle>

                        <LeadText>
                            Historical manuscripts, portraits, diagrams, and other visual source
                            material are identified on the pages where they appear. Original figures
                            are prepared specifically for the essays unless otherwise noted. All
                            externally sourced images and historical material used on the site are
                            in the public domain.
                        </LeadText>
                    </Box>

                    <Box component="section">
                        <SubsectionTitle sx={{ mb: 1.5 }}>
                            Corrections and Revisions
                        </SubsectionTitle>

                        <LeadText>
                            The essays are living documents and may be revised as explanations
                            are improved, notation is clarified, or errors are discovered.
                            Corrections and comments are always welcome.
                        </LeadText>
                    </Box>
                </StandardStack>
            </Box>
        </PageFrame>
    );
}

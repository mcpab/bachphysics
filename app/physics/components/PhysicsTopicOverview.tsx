import NextLink from 'next/link';
import { SectionTitle, SubsectionTitle } from '@mcpab/web-blocks';
import Box from '@mui/material/Box';
import { PageFrame } from '../../components/PageFrame';
import { LeadText } from '../../components/TextComponents';

type TopicEssayLink = {
    href: string;
    title: string;
    description?: string;
};

type PhysicsTopicOverviewProps = {
    title: string;
    description: string | readonly string[];
    essays?: readonly TopicEssayLink[];
    showWorkInProgressNote?: boolean;
};

export function PhysicsTopicOverview({
    title,
    description,
    essays = [],
    showWorkInProgressNote = false,
}: PhysicsTopicOverviewProps): React.ReactElement {
    return (
        <PageFrame>
            <Box
                sx={{
                    maxWidth: {
                        xs: '100%',
                        sm: '100%',
                        md: '74ch',
                        lg: '82ch',
                        xl: '88ch',
                    },
                    width: '100%',
                }}
            >
                <SectionTitle
                    sx={{
                        fontSize: 'clamp(2.75rem, 5vw, 4.125rem)',
                        hyphens: 'auto',
                        overflowWrap: 'break-word',
                    }}
                >
                    {title}
                </SectionTitle>
                {typeof description === 'string' ? (
                    <LeadText>{description}</LeadText>
                ) : (
                    description.map((paragraph, paragraphIndex) => (
                        <LeadText key={paragraphIndex}>{paragraph}</LeadText>
                    ))
                )}
                {showWorkInProgressNote && (
                    <LeadText>
                        This section is part of the long-term BachPhysics project and is currently
                        under development. Future essays will develop the subject carefully from
                        first principles, with emphasis on derivation, notation, and physical meaning.
                    </LeadText>
                )}
                {essays.length > 0 && (
                    <Box
                        component="ol"
                        sx={{
                            counterReset: 'essay',
                            listStyle: 'none',
                            mb: 0,
                            maxWidth: {
                                xs: '100%',
                                sm: '100%',
                                md: '70ch',
                                lg: '76ch',
                                xl: '80ch',
                            },
                            ml: 0,
                            mr: 0,
                            mt: { xs: 3.25, sm: 4 },
                            p: 0,
                        }}
                    >
                        {essays.map((essay) => (
                            <Box
                                component="li"
                                key={essay.href}
                                sx={{
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                    counterIncrement: 'essay',
                                    pb: { xs: 4, sm: 4.5 },
                                    pt: { xs: 3, sm: 3.5 },
                                    '&::before': {
                                        color: 'text.secondary',
                                        content: 'counter(essay, upper-roman)',
                                        display: 'block',
                                        fontSize: '1rem',
                                        letterSpacing: '0.12em',
                                        lineHeight: 1.2,
                                        mb: 1,
                                    },
                                    '&:last-child': {
                                        borderBottom: 0,
                                    },
                                }}
                            >
                                <SubsectionTitle
                                    sx={{
                                        fontSize: { xs: '1.575rem', sm: '1.8rem', md: '2rem' },
                                        hyphens: 'auto',
                                        lineHeight: 1.2,
                                        m: 0,
                                        mb: essay.description ? 0 : 2,
                                        overflowWrap: 'break-word',
                                        '& a': {
                                            color: 'inherit',
                                            textDecoration: 'none',
                                        },
                                        '& a:hover': {
                                            textDecoration: 'underline',
                                            textUnderlineOffset: '0.16em',
                                        },
                                    }}
                                >
                                    <NextLink href={essay.href}>{essay.title}</NextLink>
                                </SubsectionTitle>
                                {essay.description && (
                                    <LeadText
                                        sx={{
                                            lineHeight: 1.65,
                                            mb: 2,
                                            mt: 2,
                                            opacity: 0.82,
                                        }}
                                    >
                                        {essay.description}
                                    </LeadText>
                                )}
                                <Box
                                    sx={{
                                        '& a': {
                                            color: 'text.secondary',
                                            fontSize: '0.875rem',
                                            textDecoration: 'none',
                                        },
                                        '& a:hover': {
                                            color: 'text.primary',
                                            textDecoration: 'underline',
                                            textUnderlineOffset: '0.2em',
                                        },
                                    }}
                                >
                                    <NextLink href={essay.href}>Read essay →</NextLink>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                )}
            </Box>
        </PageFrame>
    );
}

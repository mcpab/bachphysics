import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import { BannerStatic, type ImageConf, MainTitle, SubsectionTitle } from '@mcpab/web-blocks';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { PageFrame } from '../PageFrame';
import { LeadText } from '../TextComponents';

export type SectionLink = {
    href: string;
    title: string;
};

export type SectionOverviewProps = {
    title: string;
    introduction: readonly string[];
    heroCaption: React.ReactNode;
    heroImage: ImageConf;
    sections?: readonly SectionLink[];
    sectionsLabel?: string;
};

export function SectionOverview({
    title,
    introduction,
    heroCaption,
    heroImage,
    sections = [],
    sectionsLabel = 'Current Collections',
}: SectionOverviewProps): React.ReactElement {
    return (
        <PageFrame
            hero={
                <BannerStatic ImageComponent={NextImageAdapter} image={heroImage} size="md">
                    <MainTitle
                        title={title}
                        subtitle=""
                        autoCapitalize={false}
                        slotProps={{
                            title: { color: 'primary.main' },
                            subtitle: {
                                sx: {
                                    color: 'primary.main',
                                    fontSize: '20px',
                                    lineHeight: 1.18,
                                    maxWidth: '30ch',
                                    opacity: 0.92,
                                },
                            },
                        }}
                    />
                </BannerStatic>
            }
        >
            <Typography variant="caption">{heroCaption}</Typography>

            {introduction.map((paragraph, paragraphIndex) => (
                <LeadText key={`${title}-introduction-${paragraphIndex}`}>{paragraph}</LeadText>
            ))}

            {sections.length > 0 && (
                <>
                    <Typography
                        variant="eyebrow"
                        color="text.secondary"
                        sx={{ display: 'block', mt: 4, mb: 1 }}
                    >
                        {sectionsLabel}
                    </Typography>

                    <Box
                        component="ul"
                        sx={{
                            listStyle: 'none',
                            m: 0,
                            maxWidth: { xs: '100%', md: '70ch', lg: '76ch' },
                            p: 0,
                        }}
                    >
                        {sections.map((section) => (
                            <Box
                                component="li"
                                key={section.href}
                                sx={{
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                    py: { xs: 2.5, sm: 3 },
                                    '&:last-child': { borderBottom: 0 },
                                }}
                            >
                                <SubsectionTitle
                                    sx={{
                                        fontSize: { xs: '1.575rem', sm: '1.8rem', md: '2rem' },
                                        hyphens: 'auto',
                                        lineHeight: 1.2,
                                        m: 0,
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
                                    <NextLink href={section.href}>{section.title}</NextLink>
                                </SubsectionTitle>
                            </Box>
                        ))}
                    </Box>
                </>
            )}
        </PageFrame>
    );
}

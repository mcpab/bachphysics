import { PageFrame } from '@/app/components/PageFrame';
import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import { BannerStatic, type ImageConf, MainTitle, SubsectionTitle } from '@mcpab/web-blocks';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { LeadText } from '../../components/TextComponents';

export type PhysicsTopic = {
    href: string,
    title: string,
}

export type PhysicsSubjectOverviewProps = {

    title: string;
    description: readonly string[];
    caption: React.ReactNode;
    topics: readonly PhysicsTopic[];
    imageConf: ImageConf;

}

export function PhysicsSubjectOverview({ caption, description, imageConf, title, topics }: PhysicsSubjectOverviewProps) {


    return (

        <PageFrame hero={
            <BannerStatic ImageComponent={NextImageAdapter} image={imageConf} size='md' >
                <MainTitle
                    title={title}
                    subtitle=''
                    autoCapitalize={false}
                    slotProps={{
                        title: {
                            color: 'primary.main',
                        },
                        subtitle: {
                            sx: {
                                color: 'primary.main',
                                fontSize: "20px",
                                lineHeight: 1.18,
                                maxWidth: "30ch",
                                opacity: 0.92,
                            },
                        }

                    }}
                />
            </BannerStatic>} >


            <Typography variant="caption">
                {caption}
            </Typography>

            {description.map((paragraph, paragraphIndex) => (
                <LeadText key={paragraphIndex + 'paragraph' + title}>
                    {paragraph}
                </LeadText>
            ))}

            <Typography
                variant="eyebrow"
                color="text.secondary"
                sx={{ display: 'block', mt: 4, mb: 1 }}
            >
                Current Collections
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
                {topics.map((topic) => (
                    <Box
                        component="li"
                        key={topic.href}
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
                            <NextLink href={topic.href}>{topic.title}</NextLink>
                        </SubsectionTitle>
                    </Box>
                ))}
            </Box>
        </PageFrame>
    )



}

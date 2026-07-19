import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import { MainTitle, BannerStatic } from '@mcpab/web-blocks';
import Typography from '@mui/material/Typography';
import { PageFrame } from '../../components/PageFrame';
import { LeadText } from '../../components/TextComponents';

type PhysicsFieldOverviewProps = {
    title: string;
    imageSrc: string;
    imageCaption: string;
};

export function PhysicsFieldOverview({
    title,
    imageSrc,
    imageCaption,
}: PhysicsFieldOverviewProps): React.ReactElement {
    return (
        <PageFrame hero={
            <BannerStatic ImageComponent={NextImageAdapter} image={{
                src: imageSrc,
                objectPosition: 'center',
                priority: true,
                overlayColor: 'rgba(12, 11, 10, 0.52)',
            }} size='md'>
                <MainTitle
                    title={title}
                    subtitle=''
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
        }>
            <Typography variant='caption'>{imageCaption}</Typography>
            <LeadText>
                This section is part of the long-term BachPhysics project and is currently
                under development. Future essays will develop the subject carefully from first
                principles, with emphasis on derivation, notation, and physical meaning.
            </LeadText>
        </PageFrame>
    );
}

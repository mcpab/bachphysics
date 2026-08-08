import { PageLayout } from '@mcpab/web-blocks';
import Container from '@mui/material/Container';

type PageFrameProps = {
    hero?: React.ReactNode;
    children: React.ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false;

};

export function PageFrame({
    hero,
    children,
    maxWidth,
}: PageFrameProps): React.ReactElement {
    const usesResponsiveDocumentWidth = maxWidth === undefined;

    return (
        <>
            {hero}
            <Container
                maxWidth={maxWidth ?? false}
                sx={{
                    ...(usesResponsiveDocumentWidth && {
                        width: {
                            xs: '100%',
                            sm: '94%',
                            md: '88%',
                            lg: '82%',
                            xl: '76%',
                        },
                        maxWidth: {
                            lg: 1200,
                            xl: 1400,
                        },
                    }),
                    pt: { xs: 4, md: 7 },
                    pb: { xs: 8, md: 12 },
                }}
            >
                <PageLayout >
                    {children}
                </PageLayout>
            </Container>

        </>
    );
}

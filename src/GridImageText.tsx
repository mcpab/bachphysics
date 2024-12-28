
import React from 'react';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { H1,H2, H6, Body2 } from '@/src/TypographyStyles';
import { Box } from '@mui/material';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { LayoutComponent } from './interfaces/interfaces';


/**
 * GridImageText Component
 * 
 * This component renders a grid layout for displaying a list of results. Each result is displayed
 * in a grid item with an image and text content. The component handles errors in the results and
 * displays an error message if any result contains an error.
 * 
 * @param {string} title - The title to be displayed at the top of the grid layout.
 * @param {ConfigFilesData[]} results - An array of result objects to be displayed in the grid layout.
 * 
 * @returns {JSX.Element} The rendered GridImageText component.
 * 
 * ConfigFilesData Type:
 * The ConfigFilesData type is expected to have the following structure:
 * {
 *   content: string;
 *   image: string;
 *   title: string;
 *   link: string;
 *   order: number;
 *   error?: string; // Optional error field
 * }
 * 
 * Example Usage:
 * <GridImageText title="My Grid Layout" results={myResultsArray} />
 * 
 * The component will:
 * - Display the title at the top of the grid layout.
 * - Iterate over the results array and render each result in a grid item.
 * - Display an error message if a result contains an error.
 * - Render the image and text content for each result.
 */

const GridImageText: React.FC<LayoutComponent> = ({ results, title }) => {
    return (
        <>
            <Container>
                <Grid container spacing={2} >

                    {/* title section */}
                </Grid> <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <H1 sx={{ padding: 5 }}>{title}</H1>
                </Grid>

                {/* Empty Grid for spacing Left*/}
                <Grid size={{ sm: 1, md: 1, lg: 1, xl: 3 }} />

                {/*Main Content Grid*/}
                <Grid size={{ sm: 10, md: 10, lg: 10, xl: 6 }}>
                    <Stack spacing={4}>
                        {results.map((result, index) => (
                            <Box key={index}>
                                {
                                    'error' in result ? (
                                        <p>Error: {result.error}</p>
                                    ) : (

                                        <Paper elevation={3} sx={{ padding: 5 }}>
                                            <Grid container spacing={1}>
                                                <Grid size={6}>
                                                    <div className="relative flex flex-col" style={{ height: '180px' }}> {/* Adjust height to make images bigger */}
                                                        <Image src={result.image} alt="" layout="fill" objectFit="contain" quality={100} />
                                                    </div>
                                                </Grid>
                                                <Grid size={6}>
                                                    <div className="relative flex flex-col">
                                                        {styleText(result.title, result.content, result.link)} {/* Render the 'text' as a React component */}

                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    )
                                }
                            </Box>))
                        };
                    </Stack>

                    {/* Empty Grid for spacing Right*/}
                    <Grid size={{ sm: 1, md: 1, lg: 1, xl: 3 }} />
                </Grid>
            </Container>
        </>
    );
};

export default GridImageText;

function styleText(title: string, description: string, link: string) {
    return (
        <>
            <H6><Link href={link} className='text-inherit no-underline hover:text-blue-30  '><b>{title}</b></Link></H6>
            <Body2>{description}</Body2>
        </>
    );
}
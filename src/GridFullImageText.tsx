/**
 * @file GridFullImageText.tsx
 * @description This file defines the GridFullImageText component, which displays a grid of images with text overlays.
 * Each grid item can either display an error message or an image with a title that links to a specified URL.
 */

import React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { LayoutComponent } from './interfaces/interfaces';
import Cover from './Cover';
import { H1 } from '@/src/TypographyStyles';

/**
 * @component GridFullImageText
 * @description A functional component that renders a grid of images with text overlays.
 * Each grid item can either display an error message or an image with a title that links to a specified URL.
 * @param {LayoutComponent} props - The props for the component.
 * @param {Array} props.results - An array of result objects to be displayed in the grid.
 * @param {string} props.title - The title to be displayed at the top of the grid.
 * @returns {JSX.Element} The rendered component.
 */
const GridFullImageText: React.FC<LayoutComponent> = ({ results, title }) => {

    return (

        <>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <H1 sx={{ padding: 5 }}>{title}</H1>
            </Box >

            <Stack spacing={4} className="flex justify-center content-center grow">

                {results.map((result, index) => (

                    'error' in result ? (<p key={index}>Error: {result.error}</p>) :
                        (
                            <Box key={index}>
                                <Cover height='h-180' image={result.image}>
                                    <Container className='text-white text-center'>
                                        <H1>
                                            <Link href={result.link} className='text-inherit no-underline hover:text-blue-300'>
                                                {result.title}
                                            </Link>
                                        </H1>
                                    </Container>
                                </Cover>
                            </Box>
                        )

                ))}

            </Stack>

        </>

    );
}

export default GridFullImageText;



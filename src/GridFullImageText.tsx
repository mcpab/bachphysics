import React from 'react';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { H2, H6, Body2 } from '@/src/TypographyStyles';
import { Box } from '@mui/material';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { LayoutComponent } from './interfaces/interfaces';
import Cover from './Cover';
import { H1 } from '@/src/TypographyStyles';




const GridFullImageText: React.FC<LayoutComponent> = ({ results, title }) => {

    return (

        <>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <H2 sx={{ padding: 5 }}>{title}</H2>
            </Box >

            <Stack spacing={4} className="flex justify-center content-center grow">

                {results.map((result, index) => (

                    'error' in result ? (<p>Error: {result.error}</p>) :
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



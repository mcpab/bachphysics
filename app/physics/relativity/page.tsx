'use client'

import ImageAndTextGrid from '@/src/ImageAndTextGrid';
import Link from 'next/link';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';


export default function Page() {




  return (
    <>
      <ScreenSizeLogger />
      <Box height={80} />
      <LocalGrid title='Dynamics'>
        <ImageAndTextGrid
          items={[
            {
              imgPath: '/img/time3.jpg',
              component: (
                styleText('The Transformation of Time and Space', 'The Lorentz transformation of time and space between systems moving at constant velocity relative to each other.', '/physics/relativity/time-and-space')
              ),
            },
            {
              imgPath: '/img/velocitiesComposition.jpg',
              component: (
                styleText('The Composition of Velocities', 'The relativistic composition of velocities.', '/physics/relativity/composition-of-velocities')
              ),
            },
          ]} />
      </LocalGrid>
      <Box height={80} />
      <LocalGrid title='Electrodynamics'>
        <ImageAndTextGrid
          items={[
            {
              imgPath: '/img/maxwellRel.jpg',
              component: (
                styleText('The Relativistic Maxwell Equations', 'The formulation of the Maxwell equations for a general boost in an arbitrary direction.', '/physics/relativity/relativistic-maxwell-equations')
              ),
            },
          ]} />
      </LocalGrid>



    </>
  );
}

import { H6, Body2 } from '@/src/TypographyStyles'; // Importing H2 from TypographyStyles
function styleText(title: string, description: string, link: string) {
  return (
    <>
      <H6><Link href={link} className='text-inherit no-underline hover:text-blue-30  '><b>{title}</b></Link></H6>
      <Body2>{description}</Body2>
    </>
  );
}

interface LocalGridProps {
  title: string;
  children: React.ReactNode;
}

const LocalGrid: React.FC<LocalGridProps> = ({ title, children }) => {
  return (



    <Grid container spacing={3}  >
      <Grid size={{ sm: 1, md: 1, lg: 1, xl: 3 }}>
        <Box
          sx={{
            display: { xl: 'flex' },
            flexGrow: { xl: 1 },
            position: 'sticky',
            justifyContent: 'flex-end',             
            height: '100%',
            borderStyle: 'solid',
            borderRightWidth: '2px',
            borderColor: 'rgba(168, 162, 158)', // border-stone-400
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            padding: '2.5rem', // p-10
            color: 'rgba(120, 113, 108)', // text-stone-600
          }}
        >
          <Box sx={{ transform: { xs: 'rotate(90deg)', xl: 'rotate(0deg)' } }}>
            <H6>{title}</H6>
          </Box>
        </Box>

      </Grid>
      <Grid size={{ sm: 10, md: 10, lg: 10, xl: 6 }} className='my-5 items-center'>
        {children}
      </Grid>
      <Grid size={{ sm: 1, md: 1, lg: 1, xl: 6 }}>
      </Grid>
    </Grid>

  );

}

import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

const ScreenSizeLogger = () => {
  const isXs = useMediaQuery('(max-width:600px)');
  const isSm = useMediaQuery('(min-width:600px) and (max-width:960px)');
  const isMd = useMediaQuery('(min-width:960px) and (max-width:1280px)');
  const isLg = useMediaQuery('(min-width:1280px) and (max-width:1920px)');
  const isXl = useMediaQuery('(min-width:1920px)');

  useEffect(() => {
    if (isXs) {
      console.log('Screen size: Extra Small (xs)');
    } else if (isSm) {
      console.log('Screen size: Small (sm)');
    } else if (isMd) {
      console.log('Screen size: Medium (md)');
    } else if (isLg) {
      console.log('Screen size: Large (lg)');
    } else if (isXl) {
      console.log('Screen size: Extra Large (xl)');
    }
  }, [isXs, isSm, isMd, isLg, isXl]);

  return <></>;
};


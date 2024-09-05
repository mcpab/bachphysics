
import ImageAndTextGrid from '@/src/ImageAndTextGrid';
import Link from 'next/link';
import { Box, Container, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import Paper from '@mui/material/Paper';

export default function Page() {




  return (
    <>
      <Box height={80} />
      <LocalGrid title='Kinematics'>
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
      <LocalGrid title='Electro-Dynamics'>
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

function styleText(title: string, description: string, link: string) {
  return (
    <div>

      <h2><Link href={link} className='text-inherit no-underline hover:text-blue-300'>{title}</Link></h2>
      <p>{description}</p>
    </div>
  );
}

interface LocalGridProps {
  title: string;
  children: React.ReactNode;
}

const LocalGrid: React.FC<LocalGridProps> = ({ title, children }) => {
  return (



    <Grid container spacing={3}  >
      <Grid size={3}>
        <div className="flex flex-row sticky justify-end text-xl h-full flex-grow border-solid border-r-2 border-stone-400 border-t-0 border-b-0 border-l-0 p-10 text-stone-600">{title}</div>
      </Grid>
      <Grid size={6} className='my-5 items-center'>
        {children}
      </Grid>
      <Grid size={3}>
      </Grid>
    </Grid>

  );

}

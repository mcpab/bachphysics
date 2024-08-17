
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Cover from '@/src/Cover';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextAndImage from '@/src/TextAndImage';

export default function Page() {
  return (

    <>

      <Stack spacing={24} className=" items-center space-y-6">

        <Container>
          <Paper elevation={3} className='p-10  space-y-10 text-black justify-center '> <h1>The Basics</h1>

            <TextAndImage component={
              <Stack>
                <Link href='/physics/relativity/time-and-space' className='text-inherit no-underline hover:text-blue-300' >  <h2> The Transformation of Time and Space</h2></Link>
              
                <p>The Lorentz transformation of time and space between systems moving at constant velocity relative to each other. </p>
              </Stack>
            }
              image="/img/time3.jpg" heigth='h-48' />
          </Paper>
        </Container>



        <Container>
          <Paper elevation={3} className='p-10  space-y-10 text-black justify-center '> <h1>Composition of Velocities</h1>

            <TextAndImage component={
              <Stack>
                <Link href='/physics/relativity/composition-of-velocities' className='text-inherit no-underline hover:text-blue-300' >  <h2> The Composition of Velocities</h2></Link>
              
                <p>The relativistic composition of velocities. 
 </p>
              </Stack>
            }
              image="/img/velocitiesComposition.jpg" heigth='h-48' />
          </Paper>
        </Container>


        <Container>
          <Paper elevation={3} className='p-10  space-y-10 text-black justify-center '> <h1>Electromagnetism</h1>

            <TextAndImage component={
              <Stack>
                <Link href='/physics/relativity/maxwell-relativistic' className='text-inherit no-underline hover:text-blue-300' >  <h2> The Relativistic Maxwell Equations</h2></Link>
              
                <p>The formulation of the Maxwell equations for a general boost in an arbitrary direction. 
 </p>
              </Stack>
            }
              image="/img/maxwellRel.jpg" heigth='h-48' />
          </Paper>
        </Container>

      </Stack>

    </>

  );
}


import Box from '@mui/material/Box';
import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Cover from '@/src/Cover';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
export default function Home() {

  return (
    <>


      <Stack spacing={24} className="flex justify-center content-center grow">

        <Cover height='h-180' image="/img/washington.jpg">
          <Container>
            <Grid container spacing={0} columns={3} className="container justify-center">

              <Grid size={2}>
                <Titles right='Marco Brunelli, PhD' left='Music and Physics' />
              </Grid>
              <Grid size={1}>
                <Typography variant="h5" gutterBottom color="white"> This site harmonizes melodies for friends seeking music and provides cosmic resonance for physics enthusiasts.</Typography>
              </Grid>
            </Grid></Container>
        </Cover>

        <Cover height='h-180' image="/img/bsc.jpg">
          <Container> 
            <Typography variant="h2" gutterBottom color="white" align='right'> Music</Typography>
            <Typography variant="h5" gutterBottom color="white" align='right'> For Friends Near and Distant</Typography>
          </Container>
        </Cover>

        <Cover height='h-180' image="/img/phys4.jpg">
        <Container> 
        <Typography variant="h2" gutterBottom color="white" align='right'> <Link href='/physics' className='text-inherit no-underline hover:text-blue-300' >Physics </Link></Typography>
            <Typography variant="h5" gutterBottom color="white" align='right'>For Entusiastics Out There</Typography>
         
          </Container>
          </Cover>
      </Stack>

      <Divider><h2 className='text-slate-500 mt-20'> JSB</h2> </Divider>

      <div className='flex justify-center'>
        <div className='w-1/2'>
          <Cover height='h-96' image="/img/bach_art_of_fugue.png" mode='contain' />
        </div>
      </div>





    </>
  );
}

interface TitlesProps {
  right: string;
  left: string;
}
const Titles: React.FC<TitlesProps> = ({ right, left }) => {

  return (
    <>
      <Typography variant="h1" gutterBottom color="white">{right}</Typography>
      <Typography variant="h5" gutterBottom color="white"> {left}</Typography>
    </>

  );
}
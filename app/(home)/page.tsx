
import Box from '@mui/material/Box';
import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Cover from '@/src/Cover';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import BackgroundImage from '@/src/BackgroundImage';
import Divider from '@mui/material/Divider';
import Link from 'next/link';

export default function Home() {
  return (
    <>

      
        <Stack spacing={24} className="flex justify-center content-center grow">

          <Cover height='h-180' image="/img/washington.jpg">
            <Container>
              <Grid container spacing={0} columns={3} className="container justify-center">

                <Grid item xs={2}>
                  <Container className=' text-4xl text-white'> <h1> Marco Brunelli, PhD</h1> </Container>
                  <Container className=' text-2xl text-white'> <h3> Music and Physics</h3> </Container>
                </Grid>
                <Grid item xs={1}>
                  <h2 className='text-2xl indent-5 leading-8 text-white'> This site harmonizes melodies for friends seeking music and provides cosmic resonance for physics enthusiasts. </h2>
                </Grid>
              </Grid></Container>
          </Cover>

          <Cover height='h-180' image="/img/bsc.jpg">
            <Container className=' text-4xl text-white'> <h1> Music</h1> </Container>
            <Container className=' text-2xl text-white'> <h3> For Friends Near and Distant</h3> </Container>
          </Cover>

          <Cover height='h-180' image="/img/phys4.jpg">
            <Container className=' text-4xl text-white text-right'> <h1> <Link href='/physics' className='text-inherit no-underline hover:text-blue-300' >Physics </Link></h1> </Container>
            <Container className=' text-2xl text-white text-right'> <h3> For Entusiastics Out There</h3> </Container>
          </Cover>

          <div className='flex justify-center'>
            <div className='w-1/2'>
              <Cover height='h-96' image="/img/bach_art_of_fugue.png" mode='contain' />
            </div>
          </div>
          <Divider><h2 className='text-slate-500'> JSB</h2> </Divider>
        </Stack>

 

    </>
  );
}

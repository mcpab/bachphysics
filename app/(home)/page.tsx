
import Box from '@mui/material/Box';
import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Cover from '@/src/Cover';
import Image from 'next/image';

//border-solid border-8 border-indigo-600
export default function Home() {
  return (
    <>
    <Stack spacing={4}>
      <Cover image="colorado-nav">
        <Container className=' text-4xl text-2xl text-gray-600'> <h1> Marco Brunelli, PhD</h1> </Container>
        <Container className=' text-2xl text-slate-300'> <h3> Music and Physics</h3> </Container>
      </Cover>

      <Cover image="bos-clouds">
        <Container className=' text-4xl text-2xl text-gray-600'> <h1> Music</h1> </Container>
        <Container className=' text-2xl text-slate-300'> <h3> For Friends Near and Distant</h3> </Container>
      </Cover>

      </Stack>
     
    </>
  );
}

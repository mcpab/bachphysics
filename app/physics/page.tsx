
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Cover from '@/src/Cover';
import Link from 'next/link';
import Container from '@mui/material/Container';
export default function Page() {
  return (

    <>

      <Stack spacing={24} className="flex justify-center content-center grow">

        <Cover height='h-180' image="/img/relativity.jpg">
          <Container className=' text-4xl text-white text-center'> <h1><Link href='/physics/relativity' className='text-inherit no-underline hover:text-blue-300' >Relativity </Link></h1>  </Container>
        </Cover>
      </Stack>

    </>

  );
}

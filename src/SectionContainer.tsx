import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextAndImage from '@/src/TextAndImage';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

type SectionProps = {
  title: string;
  link: string;
  linkText: string;
  description: string;
  image: string;
};

const SectionContainer: React.FC<SectionProps> = ({ title, link, linkText, description, image }) => {
  return (
    <Container>
      <Paper elevation={3} className='p-10 space-y-10 text-black justify-center'>
        <h1>{title}</h1>
        <TextAndImage
          component={
     <>
              <Link href={link} className='text-inherit no-underline hover:text-blue-300'>
                <h2>{linkText}</h2>
              </Link>
              <p>{description}</p>
              </>
          }
          image={image}
          heigth='h-48'
        />
      </Paper>
    </Container>
  );
};

export default SectionContainer;
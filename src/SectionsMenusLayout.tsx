'use client'
import { Container, Paper } from "@mui/material";
import React from 'react';
import Stack from '@mui/material/Stack';
import { SectionType } from "./types";
import { Fragment } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Sidebar from "./sidebar";

interface SectionMenusLayoutProps {
    mainSection: SectionType;
}

const SectionsMenusLayout: React.FC<SectionMenusLayoutProps> = ({ mainSection }) => {

    const title = mainSection.title;

    const sections: SectionType[] = mainSection.subsections;

    return (<>

        <ScreenSizeLogger />
        <Box className=" mx-auto p-4">
            <Grid container spacing={2}>
                <Grid size={{sm:1,md:1,lg:1,xl:3}} className=''>
                <Sidebar mainSection={mainSection} />
                </Grid>
                <Grid size={{sm:10,md:10,lg:10,xl:6}}>
                    <Stack spacing={24} className=" items-center space-y-6">

                        <h1 className='text-5xl'>{title}</h1>

                        <MainLayout sections={sections} />

                    </Stack>
                </Grid>
                <Grid size={{sm:1,md:1,lg:1,xl:3}}>

                </Grid>
            </Grid>


        </Box>

    </>)

}

export default SectionsMenusLayout;

interface MainLayoutProps {
    sections: SectionType[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ sections }) => {

    return (<>

        {sections.map((section, index) => (
            <Fragment key={index}>
                <LocalSection title={section.title} id={section.id}>
                    {section.content}
                    {section.subsections && (
                        <>                            {
                            section.subsections.map((subsection, index1) => (
                                <Fragment key={index + index1}>
                                    <LocalSubSection title={subsection.title} id={subsection.id}>
                                        {subsection.content}
                                    </LocalSubSection>
                                </Fragment>
                            ))
                        }
                        </>

                    )}
                </LocalSection>
            </Fragment>
        ))}
    </>)

}

interface LocalSectionProps {
    title: string | React.ReactNode;
    id: string;
    children: React.ReactNode;
}
import { Body2, Body1,H2,H3,H4,H5 } from "./TypographyStyles";

const LocalSection: React.FC<LocalSectionProps> = ({ title, id, children }) => {
    return (
        <Paper elevation={3} className='p-10 leading-loose space-y-10 text-black justify-center  max-w-full'>
            <section id={id}>
                <H4 sx={{ marginBottom: '30px' }}>{title}</H4>                 
                <Body1 >{children}</Body1>
            </section>
        </Paper>
    );
};


const LocalSubSection: React.FC<LocalSectionProps> = ({ title, id, children }) => {
    return (
        <>
            <section id={id}>
                <H5 sx={{ marginTop: '16px' , marginBottom: '30px' }}>{title}</H5>
                <Body1 >{children}</Body1>
            </section>
        </>
    );
};

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



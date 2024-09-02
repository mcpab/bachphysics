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



        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={3}>
                    <Sidebar mainSection={mainSection} />
                </Grid>
                <Grid size={6}>
                    <Stack spacing={24} className=" items-center space-y-6">

                        <h1 className='text-title'>{title}</h1>

                        <MainLayout sections={sections} />

                    </Stack>
                </Grid>
                <Grid size={3}>

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

        {sections.map((section,index) => (
            <Fragment key={index}>
                <LocalSection title={section.title} id={section.id}>
                    {section.content}
                    {section.subsections && (
                        <>                            {
                            section.subsections.map((subsection,index1) => (
                                <Fragment key={index+index1}>
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
    title: string|React.ReactNode;
    id: string;
    children: React.ReactNode;
}

const LocalSection: React.FC<LocalSectionProps> = ({ title, id, children }) => {
    return (
        <Paper elevation={3} className='p-10 leading-loose space-y-10 text-black justify-center'>
            <section id={id}>
                <h1 className="text-h1">{title}</h1>
                {children}
            </section>
        </Paper>
    );
};


const LocalSubSection: React.FC<LocalSectionProps> = ({ title, id, children }) => {
    return (
        <>
            <section id={id}>
                <h2 className="text-h2">{title}</h2>
                {children}
            </section>
        </>
    );
};

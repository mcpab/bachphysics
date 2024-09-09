'use client'


import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { SectionType } from './types';
import Button from '@mui/material/Button';
interface SideBarProps {
    mainSection: SectionType;
}

const Sidebar: React.FC<SideBarProps> = ({ mainSection }) => {

    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const content = mainSection.subsections;

    return (


        <div className="relative flex flex-col sticky top-0">

            <div className="flex flex-row justify-end items-center w-full">
                <Button
                    size="small"
                    variant="contained"
                    startIcon={<ChevronRightIcon />}
                    onClick={toggleDrawer(true)}
                    className="bg-white text-slate-500 hover:bg-slate-500 hover:text-white shadow-2xl "
                >
                    Content
                </Button>
            </div>

            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 500 }} role="presentation" onClick={toggleDrawer(false)}>
                    <List>
                        {content.map((section, index) => (
                            <React.Fragment key={index}>
                                <ListItem>
                                    <Link href={`#${section.id}`} className='no-underline text-black hover:text-blue-300' passHref>
                                        <ListItemText primary={<b >{section.title}</b>} />
                                    </Link>
                                </ListItem>
                                {section.subsections && section.subsections.map((subsection, index1) => (
                                    <ListItem key={index + index1} sx={{ pl: 4 }}>
                                        <Link href={`#${subsection.id}`} className='no-underline text-inherit hover:text-blue-300' passHref>
                                            <ListItemText primary={<span >{subsection.title}</span>} />
                                        </Link>
                                    </ListItem>
                                ))}
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>);
};

export default Sidebar;
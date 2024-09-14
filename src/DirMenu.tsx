'use client';
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Icon, MenuItem } from '@mui/material';

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconPicker from './IconPicker'; // Importing IconPicker




interface MenuItem {
    name: string;
    path: string;
    children?: MenuItem[];
}

const DirMenu: React.FC = () => {

    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [openCollapse, setOpenCollapse] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        async function fetchMenu() {
            const response = await fetch('/api/menus');
            if (!response.ok) {
                console.log('Failed to fetch menu');
            }
            const data = await response.json();
            setMenu(data['menu']);
            console.log('res', data['menu']);
        }
        fetchMenu();
    }, []);

    const iconPressed = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(!open);
    };

    const handleToggle = (path: string) => {
        setOpenCollapse(prevState => ({
            ...prevState,
            [path]: !prevState[path]
        }));
    };

    const items = menu;
    return (
        <>
            <IconButton onClick={iconPressed}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon className='text-slate-700' />
            </IconButton >
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>

                <List
                    sx={{ width: '100%', minWidth: 400, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            <b>Menu</b>
                        </ListSubheader>
                    }
                >
                    <Typography variant="h6" sx={{ padding: '16px' }}> {renderMenu(items, 0, openCollapse, handleToggle, setOpen)}</Typography>
                </List>

            </Drawer>
        </>
    );
};

export default DirMenu;

const renderMenu = (items: MenuItem[], level: number, openCollapse: { [key: string]: boolean }, handleToggle: (path: string) => void, setOpen: (open: boolean) => void) => {

    const iconPres = <Box sx={{ display: 'flex', alignItems: 'spacebetween' }}></Box>;

    return (<>
        <List>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <ListItem sx={{ pl: level * 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <Link href={item.path} className='no-underline text-black hover:text-blue-300' passHref   >
                                <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={() => setOpen(false)}>

                                    {<IconPicker name={item.name} /> &&
                                        <ListItemIcon>
                                           <IconPicker name={item.name}/>
                                        </ListItemIcon>
                                    }

                                    <ListItemText primary={capitalizeString(item.name)} primaryTypographyProps={{ variant: 'h6' }} />
                                </Box>
                            </Link>
                            {item.children?.length !== 0 && (
                                <Box onClick={() => handleToggle(item.path)}>
                                    {openCollapse[item.path] ? <ExpandLess /> : <ExpandMore />}
                                </Box>
                            )}
                        </Box>
                    </ListItem>

                    {item.children && <Collapse in={openCollapse[item.path]} timeout="auto" unmountOnExit> {renderMenu(item.children, level + 1, openCollapse, handleToggle, setOpen)} </Collapse>}
                </React.Fragment>
            ))}
        </List>
    </>)
}

const capitalizeString = (str: string): string => {
    const words = str.split('-');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
};


/**
 * @file DirMenu.tsx
 * @description This file defines the DirMenu component, a collapsible menu using Material-UI components.
 * The menu can be toggled open and closed, and individual menu items can be expanded or collapsed.
 */

'use client';
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

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
import { MenuItem } from './interfaces/interfaces';

/**
 * @interface DirMenuProps
 * @description Defines the structure of the props for the DirMenu component.
 * @property {MenuItem[]} menus - An array of MenuItem objects representing the menu structure.
 */
interface DirMenuProps {
    menus: MenuItem[];
}

/**
 * @function sortMenus
 * @description Recursively sorts the menus array and its subarrays based on the 'order' property.
 * @param {MenuItem[]} menus - The array of menu items to sort.
 * @returns {MenuItem[]} The sorted array of menu items.
 */
const sortMenus = (menus: MenuItem[]): MenuItem[] => {
    return menus
        .map(menu => ({
            ...menu,
            children: sortMenus(menu.children || [])
        }))
        .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
};

/**
 * @component DirMenu
 * @description A functional component that renders a collapsible menu using Material-UI components.
 * @param {DirMenuProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const DirMenu: React.FC<DirMenuProps> = ({ menus }) => {

    /**
     * @state {boolean} open - A boolean state to track whether the drawer is open or closed.
     */
    const [open, setOpen] = useState<boolean>(false);

    /**
     * @state {object} openCollapse - An object state to track the open/close state of individual collapsible menu items.
     */
    const [openCollapse, setOpenCollapse] = useState<{ [key: string]: boolean }>({});

    /**
     * @function iconPressed
     * @description Toggles the open state of the drawer.
     * @param {React.MouseEvent<HTMLButtonElement>} event - The mouse event.
     */
    const iconPressed = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(!open);
    };

    /**
     * @function handleToggle
     * @description Toggles the open/close state of individual collapsible menu items.
     * @param {string} path - The path of the menu item to toggle.
     */
    const handleToggle = (path: string) => {
        setOpenCollapse(prevState => ({
            ...prevState,
            [path]: !prevState[path]
        }));
    };


    // Sort the menus array before rendering
    const sortedMenus = sortMenus(menus);

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
                    <Typography variant="h6" sx={{ padding: '16px' }}> {renderMenu(sortedMenus, 0, openCollapse, handleToggle, setOpen)}</Typography>
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
                            <Link href={item.path} className='no-underline text-black hover:text-blue-300' >
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


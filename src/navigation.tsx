'use client';

import { useState } from 'react';

import Container from '@mui/material/Container';

import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs';
import type { AppProps } from "next/app";
import Link from 'next/link'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Navigation() {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const iconPressed = (event: React.MouseEvent<HTMLButtonElement>) => {

        const rt = anchorEl == null ? event.currentTarget : null;
        setAnchorEl(rt);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (

        <>
            <ClerkProvider>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}

                >
                    <MenuItem> <Link className='text-slate-700' href="/">Home</Link> </MenuItem>
                    <MenuItem> <Link className='text-slate-700' href="/physics">Physics</Link></MenuItem>
                </Menu>

                <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }} className="absolute z-10" >
                    <Toolbar>
                        <Container className='flex flex-row flex-nowrap ' >
                            <IconButton onClick={iconPressed}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon className='text-slate-700' />
                            </IconButton >
                            <Container className="flex grow justify-end">
                                <SignedOut>
                                    <SignInButton>
                                        <Button className='text-slate-700' >Sign in</Button>
                                    </SignInButton>
                                </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                            </Container>
                        </Container>
                    </Toolbar>


                </AppBar>



            </ClerkProvider>
        </>
    );



}
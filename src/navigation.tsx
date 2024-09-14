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

import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import DirMenu from './DirMenu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BreadMenu from './BreadMenu';


export default function Navigation({ clerkKey }: Readonly<{ clerkKey: string }>) {



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
            <ClerkProvider publishableKey={`${clerkKey}`}>
                
                {/*  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}

                >
                    <MenuItem> <Link className='text-slate-700 text-sm' href="/">Home</Link> </MenuItem>
                    <MenuItem> <Link className='text-slate-700 text-sm' href="/physics">Physics</Link></MenuItem>
                </Menu> */}

                <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }} className="" >
                    <Toolbar>
                        <Container><div className='flex flex-row justify-between items-center w-full' >
                        <DirMenu  />

                            <div className='grow flex justify-center'> <BreadMenu /></div>
                            <div className="flex justify-end shrink ">
                                <SignedOut>
                                    <SignInButton>
                                        <Button className='text-slate-700' >Sign in</Button>
                                    </SignInButton>
                                </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                            </div>
                        </div>
                        </Container>
                    </Toolbar>


                </AppBar>



            </ClerkProvider>
        </>
    );



}
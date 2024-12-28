
/**
 * @file navigation.tsx
 * @description This file defines the Navigation component, which includes an AppBar with a directory menu, breadcrumb menu, and user authentication buttons using Clerk.
 */
import Container from '@mui/material/Container';
import { generateMenu } from '@/utils/generateMenus';

import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs';


import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

import Toolbar from '@mui/material/Toolbar';
import DirMenu from './DirMenu';

import BreadMenu from './BreadMenu';

/**
 * @component Navigation
 * @description A functional component that renders an AppBar with a directory menu, breadcrumb menu, and user authentication buttons.
 * @param {Readonly<{ clerkKey: string }>} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
export default function Navigation({ clerkKey }: Readonly<{ clerkKey: string }>) {
    /**
     * @constant {string} workinDir - The working directory path.
     */
    const workinDir = process.cwd() + "/app/";

    /**
     * @constant {MenuItem[]} menus - The generated menu items.
     */
    const menus = generateMenu(workinDir, 'pageRef.json');

    return (

        <>
            <ClerkProvider publishableKey={`${clerkKey}`}>

                <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }} className="" >
                    <Toolbar>
                        <Container><div className='flex flex-row justify-between items-center w-full' >
                        <DirMenu menus={menus} />

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
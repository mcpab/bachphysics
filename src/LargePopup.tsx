'use client'

import { Popper } from '@mui/base/Popper';
import Paper from '@mui/material/Paper';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';

export default function LargePopup({ inline = false, zoom, children }: Readonly<{ inline?: boolean, zoom?: React.ReactNode, children: React.ReactNode }>) {

    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const open = Boolean(anchor);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const id = open ? 'simple-popper' : undefined;

    const cp = inline ? <span onClick={handleClick}>{children}</span> : <div onClick={handleClick}>{children}</div>

    return (
        <>
            {cp}
            <Popper id={id} open={open} anchorEl={anchor}>
                <div className="relative scale-150">
                    <div onClick={handleClick}><CancelIcon className='fill-blue-500 absolute -top-2 right-0' sx={{ fontSize: 15 }} /></div>
                    {/* */}
                    <div className=''>  <Paper elevation={3} className='m-2 p-5 justify-center '> {zoom ? zoom : children}</Paper></div>
                    {/*  */}
                </div>
            </Popper>
        </>
    )

}
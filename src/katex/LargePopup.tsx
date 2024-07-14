import { Popper } from '@mui/base/Popper';
import Paper from '@mui/material/Paper';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';

export default function LargePopup({ zoomContent, inline=false, children }: Readonly<{ zoomContent: React.ReactNode, inline?:boolean, children: React.ReactNode }>) {

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
            <div className="relative">
            <div onClick={handleClick}><CancelIcon className='fill-blue-500 absolute top-0 right-0' sx={{ fontSize: 20 }} /></div>
                {/* */}
                <div className='p-0.5 '>  <Paper elevation={3} className='m-2 p-10 justify-center '> {zoomContent}</Paper></div>
                {/*  */}
            </div>
        </Popper>
        </>
    )

}
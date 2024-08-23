
import Image from 'next/image';

import Grid from '@mui/material/Grid'

export default function TextAndImage({ component, image, heigth, imageOn = 'left' }: Readonly<{ component: React.ReactNode, image: string, heigth:string, imageOn?: 'left' | 'right' }>) {

    const img = <Image src={`${image}`} alt="" fill={true} quality={100} style={{ objectFit: 'contain' }} />;

    const left = imageOn === 'left' ? img : component;
    const right = imageOn === 'right' ? img : component;


    return (

        <>

            <Grid container >
                <Grid xs={4}><div className={`relative ${heigth} flex flex-col`}> {left}   </div> </Grid>
                <Grid xs={8}><div className={`relative ${heigth} flex flex-col`}> {right}   </div> </Grid>
            </Grid>

        </>
    );



}
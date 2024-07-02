
import Image from 'next/image'
import Grid from '@mui/material/Grid';


export default function MediaAndText({ imageSrc, imageSize = 50, imagePosition = 'left', caption = '', children }: Readonly<{ imageSrc: string, imageSize?: number, imagePosition?: string, caption?: string, children: React.ReactNode }>) {

    var sImage;
    var sChild;

   
    const cp = caption === '' ? '' : <figcaption className='m-4 text-sm text-center'> {caption}</figcaption>;

    const img = <figure className='relative content-center drop-shadow-lg '>
        <Image className=' relative   h-auto w-full' src={`${imageSrc}`}   alt="" quality={100} fill={true} />
        {cp}
    </figure>;

    if (imageSize > 100) {
        sImage = 6;
        sChild = 6;
    } else {
        sImage = Math.floor(12 / 100 * imageSize);
        sChild = 12 - sImage;
    }



    var rg;
    var lf;
    var sl, sr;

    if (imagePosition !== 'left') {
        rg = img; sr = sImage;
        lf = children; sl = sChild;

    } else {
        rg = children; sr = sChild;
        lf = img; sl = sImage;
    }

    return (
        <>
            <Grid container spacing={1}>

                <Grid item  xs={sl}>
                    {lf}
                </Grid>
                <Grid item  xs={sr}>
                    {rg}
                </Grid>

            </Grid>

        </>
        //   <div className={fg}> 


        //     <div  className=' flex content-center '> {lf} </div>

        //     <div className=' flex content-center '>
        //         {rg}
        //     </div>
        // </div>

    );
}
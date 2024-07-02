
import Image from 'next/image'



export default function MediaAndText({ imageSrc, imageSize = 50, imagePosition = 'left', caption = '', children }: Readonly<{ imageSrc: string, imageSize?: number, imagePosition?: string, caption?: string, children: React.ReactNode }>) {

    const cp = caption === '' ? '' : <figcaption className='m-4 text-sm text-center'> {caption}</figcaption>;

    const img = <figure className='relative content-center drop-shadow-lg '>
        <Image className=' relative   h-auto w-full' src={`${imageSrc}`} alt="" quality={100} fill={true} />
        {cp}
    </figure>;

    if (imageSize > 100) {
        sImage = '50%';
        sChild = '50%';
    } else {
        sImage = imageSize + '%';
        sChild = (100 - imageSize) + '%';
    }

    var rg;
    var lf;
    var sl,sr;

    if (imagePosition !== 'left') {
        rg = img;sr=sImage;
        lf = children; sl = sChild;

    } else {
        rg = children; sr=sChild;
        lf = img; sl= sImage;
    }

    var sImage;
    var sChild;



    return (
        <div className={`grid grid-cols-[${sl}_${sr}] justify-center content-center  `}>

            <div> {lf} </div>

            <div className=' flex content-center '>
                {rg}
            </div>
        </div>

    );
}
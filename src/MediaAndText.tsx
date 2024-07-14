
import Image from 'next/image'



export default function MediaAndText({ imageSrc, imageSize = 50, imagePosition = 'left', caption , children }: Readonly<{ imageSrc: string, imageSize: number, imagePosition: string, caption: Element |string, children: React.ReactNode }>) {

    var sImage;
    var sChild;
    
    const cp = caption  ? '' : <figcaption className='m-4 text-sm text-center'> {caption}</figcaption>;

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

    var fg= "grid grid-flow-col grid-cols-["+sl+"_"+sr+"] justify-center content-center  ";


    return (

          <div className={fg}> 


            <div  className=' flex content-center justify-center  '> {lf} </div>

            <div className=' flex content-center justify-center '>
                {rg}
            </div>
        </div>

    );
}
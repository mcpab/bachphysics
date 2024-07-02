import Image from 'next/image'


export default function BackgroundImage({ image, mode = 'cover' }: Readonly<{ image: string, mode?: 'cover' | 'contain' }>) {

    return (

        <Image
            src={`${image}`}
            alt=""
            fill={true}
            quality={100}
            style={{objectFit: `${mode}`}}  

        />

    );

}
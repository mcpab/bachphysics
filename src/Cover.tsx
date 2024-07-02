

import Container from '@mui/material/Container';
import BackgroundImage from '@/src/BackgroundImage';


export default function Cover({ image, height, mode ='cover' , children }: Readonly<{ image: string, height:string, mode?: 'cover' | 'contain', children?: React.ReactNode }>) {

    return (

        <>
            <div className={`relative ${height} flex flex-col`}>
                <BackgroundImage image={image}  mode={mode}/>
                <div className="flex-auto flex-col justify-center content-center z-10">
                    {children}
                </div>
            </div>
        </>


    )

}
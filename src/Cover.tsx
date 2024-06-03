

import Container from '@mui/material/Container';

export default function Cover({ image, children }: Readonly<{ image: string, children: React.ReactNode }>) {

    return (

        <>
            <div className={`flex flex-col grow bg-${image} bg-center bg-cover bg-no-repeat h-180`}>
                <div className="flex-auto flex-col justify-center content-center">
                    {children}
                </div>
            </div>
        </>


    )

}

import Image from 'next/image';

import Grid from '@mui/material/Grid2'

interface TextAndImageProps {
    component: React.ReactNode;
    image: string;
    height: string;
    imageOn?: 'left' | 'right';
  }

  const TextAndImage: React.FC<TextAndImageProps> = ({ component, image, height, imageOn = 'left' }) => {

    const img = <Image src={`${image}`} alt="" fill={true} quality={100} style={{ objectFit: 'contain' }} />;

    const left = imageOn === 'left' ? img : component;
    const right = imageOn === 'right' ? img : component;


    return (

        <>
            <Grid container spacing={2} >
                <Grid size={4}><div className={`relative ${height} flex flex-col`}> {left}   </div> </Grid>
                <Grid size={8}><div className={`relative ${height} flex flex-col`}> {right}   </div> </Grid>
            </Grid>

        </>
    );
}

export default TextAndImage;



/**
 * Renders a grid of images and corresponding text.
 *
 * @component
 * @param {Props} props - The component props.
 * @param {Item[]} props.items - The array of items containing image paths and text.
 * @returns {JSX.Element} The rendered ImageTextGrid component.
 */
import React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

interface Item {
    imgPath: string;
    component: React.ReactNode;  // The 'text' is a React component
}

interface Props {
    title: string;
    items: Item[];
}

const ImageAndTextGrid: React.FC<Props> = ({ title, items }) => {
    return (
        <Container className='mx-auto my-5'> {/* Center the Container and add vertical margins */}
            <Paper elevation={3} className='p-10 space-y-10 text-black justify-center overflow-hidden'> {/* Add overflow-hidden to prevent content overflow */}
                <Typography variant="h2" align="center" className='text-center'>{title}</Typography> {/* Render the title with larger font size */}
                <Grid container spacing={1}>
                    {items.map((item, index) => (
                        <Grid container item xs={12} key={index}>
                            <Grid item xs={6}>
                                <div className="relative flex flex-col" style={{ height: '180px' }}> {/* Adjust height to make images bigger */}
                                    <Image src={item.imgPath} alt="" layout="fill" objectFit="contain" quality={100} />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="relative flex flex-col">
                                    {item.component} {/* Render the 'text' as a React component */}
                                </div>
                            </Grid>
                            {index < items.length - 1 && (
                                <Grid item xs={12}>
                                    <Divider variant="middle" className="my-10" /> {/* Add Divider between items */}
                                </Grid>
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container>
    );
}


export default ImageAndTextGrid;

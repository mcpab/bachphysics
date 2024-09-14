import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
 

export default function BorderedDiv({ signature, children }: Readonly<{ signature?: string; children: React.ReactNode }>) {
 
    return (
        <Box
            sx={{
                border: '2px solid',
                borderColor:  '#e0e0e0',
                borderRadius: 1,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
            }}
            {...(signature ? { id: signature } : {})}
        >
            {signature && (
                <Typography
                    variant="subtitle2"
                    sx={{
                        position: 'absolute',
                        top: '-12px',
                        left: '10px',
                        backgroundColor: 'white',
                        padding: '0 4px',
                    }}
                >
                    {signature}
                </Typography>
            )}
            {children}
        </Box>
    );
}
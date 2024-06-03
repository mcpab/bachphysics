
"use client";

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
import { useState } from 'react';
import Script from 'next/script';
import { useFormStatus } from "react-dom";
import handleLogin from "../src/serverLogin";

export default function LoginForm() {

    const { pending } = useFormStatus();

    const submitAction = async (formData: FormData) => {
        console.log(formData.get('g-recaptcha-response'));
        const rt =  await handleLogin(formData);
        console.log(rt);
        const gh='opo';
        console.log('flkjg ${gh}');
    }
    return (

        <Container maxWidth="sm" className="border border-2 border-solid border-gray-300 rounded-xl p-7">
            
            <form action={submitAction}>

                <FormControl fullWidth>
                    <Stack spacing={4}>
                        <h3 className="text-gray-500">Login:</h3>
                        <TextField name="user_ID" label="User ID" variant="outlined" required />
                        <TextField name="password" label="Password" type="password" variant="outlined" required/>
                        <Button type="submit" variant="text" className='bg-gray-300 text-gray-500' disabled={pending} >
                            Submit
                        </Button>
                        <Script src="https://www.google.com/recaptcha/api.js" />
                        <div className="place-content-center g-recaptcha" data-sitekey="6Ld4ssMpAAAAAHMORupYjg4eUTFjceJzFsNLUX-j"></div>
                    </Stack>
                </FormControl>
            </form>

        </Container>

    );




}

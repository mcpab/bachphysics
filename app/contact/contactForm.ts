'use client';


import { useEffect, useState } from "react";
import { type Inputs } from "./schema";
import { type SubmitHandler } from "react-hook-form";
import { sendContactMessage } from "./actions";

export type ServerContactFormState = "serverTokenError" |
    "serverAdminEmailError" |
    "serverSenderEmailError" |
    "serverNotSubmitted" |
    "serverZodNotMatching" |
    "serverSubmissionSuccess" ;
   

export type ClientContactFormState = "clientTokenInitializing" |
    "clientTokenError" |
    "clientTokenExpired" |
    "clientValidToken" |
    "clientSubmissionError";

export type ContactFormState = ServerContactFormState |
    ClientContactFormState ;

export type ContactFormController = {
    [K in ContactFormState]: {
        status: K;
        token: K extends "clientValidToken" ? string : null
        onSubmit: K extends "clientValidToken" ? SubmitHandler<Inputs> : null
    }
}[ContactFormState]


export function useContactForm(): ContactFormController {

    const [turnstileValue, setTurnstileValue] =
        useState<ContactFormController>({
            token: null,
            status: "clientTokenInitializing",
            onSubmit: null
        });

    useEffect(() => {
        window.onTurnstileSuccess = (token) => {
            setTurnstileValue({
                token,
                status: "clientValidToken",
                onSubmit: async (data) => {
        
                    try {

                        const result = await sendContactMessage({ ...data, token });

                        if (result.success) {
                            setTurnstileValue({
                                token: null,
                                status: "serverSubmissionSuccess",
                                onSubmit: null
                            });
                            return;
                        } else {                        
                            
                            switch (result.type) {
                                case 'admin':
                                    setTurnstileValue({
                                        token: null,
                                        status: "serverAdminEmailError",
                                        onSubmit: null
                                    });
                                    return;
                                case 'sender':
                                    setTurnstileValue({
                                        token: null,
                                        status: "serverSenderEmailError",
                                        onSubmit: null
                                    });
                                    return;
                                case 'token':
                                    setTurnstileValue({
                                        token: null,
                                        status: "serverTokenError",
                                        onSubmit: null
                                    });
                                    return;
                                case 'zod':
                                    setTurnstileValue({
                                        token: null,
                                        status: "serverZodNotMatching",
                                        onSubmit: null
                                    });
                                    return;                                    
                                default: {
                                    const exhaustiveCheck: never = result;
                                    return exhaustiveCheck;
                                }
                            }


                        }


                    } catch {
                        setTurnstileValue({
                            token: null,
                            status: "clientSubmissionError",
                            onSubmit: null
                        });
                    }
                }
            });
        };

        window.onTurnstileExpired = () => {
            setTurnstileValue({
                token: null,
                status: "clientTokenExpired",
                onSubmit: null
            });
        };

        window.onTurnstileError = () => {
            setTurnstileValue({
                token: null,
                status: "clientTokenError",
                onSubmit: null
            });
        };

        return () => {
            delete window.onTurnstileSuccess;
            delete window.onTurnstileExpired;
            delete window.onTurnstileError;
        };
    }, []);

    return turnstileValue;
}

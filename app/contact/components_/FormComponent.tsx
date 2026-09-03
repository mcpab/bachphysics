import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { type Inputs, contactSchema } from "../schema";
import { ContactFormController } from "../contactForm";
import Box from "@mui/material/Box";
import { useState } from "react";


export type FormComponentProps = {
    contactForm: ContactFormController;
}
export function FormComponent({ contactForm }: FormComponentProps) {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<Inputs>({
        resolver: zodResolver(contactSchema)
    });

    const [submissionId] = useState(() => crypto.randomUUID());

    const isValid = contactForm.status === "clientValidToken";

    return (
        <Box
            sx={{
                visibility: isValid ? "visible" : "hidden",
            }}
        >

            <form onSubmit={
                isValid
                    ? handleSubmit(contactForm.onSubmit)
                    : undefined
            }>

                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            required
                            label="First Name"
                            {...register("firstName")}
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                            sx={{
                                "& input:-webkit-autofill": {
                                    WebkitBoxShadow: "0 0 0 1000px #202020 inset",
                                    WebkitTextFillColor: "#fff",
                                    caretColor: "#fff",
                                },
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            required
                            label="Last Name"
                            {...register("lastName")}
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                            sx={{
                                "& input:-webkit-autofill": {
                                    WebkitBoxShadow: "0 0 0 1000px #202020 inset",
                                    WebkitTextFillColor: "#fff",
                                    caretColor: "#fff",
                                },
                            }}
                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField fullWidth required
                            label="Email"
                            {...register("email")} type='email'
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            sx={{
                                "& input:-webkit-autofill": {
                                    WebkitBoxShadow: "0 0 0 1000px #202020 inset",
                                    WebkitTextFillColor: "#fff",
                                    caretColor: "#fff",
                                },
                            }}
                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField required
                            multiline
                            fullWidth
                            minRows={10}
                            label="Message"
                            {...register("message")}
                            error={!!errors.message}
                            helperText={errors.message?.message}
                            sx={{
                                "& input:-webkit-autofill, & textarea:-webkit-autofill": {
                                    WebkitBoxShadow: (theme) =>
                                        `0 0 0 1000px ${theme.palette.background.default} inset`,
                                    WebkitTextFillColor: (theme) =>
                                        theme.palette.text.primary,
                                    caretColor: (theme) =>
                                        theme.palette.text.primary,
                                },
                            }} />
                    </Grid>
                    <Grid size={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            loading={isSubmitting}
                        >
                            Send message
                        </Button>
                        <TextField
                            {...register("website")}
                            tabIndex={-1}
                            aria-hidden="true"
                            autoComplete="off"
                            sx={{
                                position: "absolute",
                                left: "-10000px",
                                width: 1,
                                height: 1,
                                overflow: "hidden",
                            }}
                        />
                        <input
                            type="hidden"
                            {...register("submissionId")}
                            value={submissionId}
                        />
                    </Grid>
                </Grid>

            </form>
        </Box>
    )

}
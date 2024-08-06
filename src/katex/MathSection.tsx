import { Container, Paper } from "@mui/material";

export default function MathSection({children}:Readonly<{children:React.ReactNode}>) {

    return (

        <Container>
            <Paper elevation={3} className='p-10 leading-loose space-y-10 text-black justify-center ' >
                {children}
            </Paper>
          </Container>
    )


}
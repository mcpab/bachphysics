import { Container, Paper } from "@mui/material";

export default function MathSection({title,children}:Readonly<{title:string,children:React.ReactNode}>) {

    return (

        <Container>
            <Paper elevation={3} className='p-10 leading-loose space-y-10 text-black justify-center ' >
            <h1>{title}</h1>
                {children}
            </Paper>
          </Container>
    )


}
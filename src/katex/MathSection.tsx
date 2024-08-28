import { Container, Paper } from "@mui/material";

export default function MathSection({title,id='',children}:Readonly<{title:string,id?:string,children:React.ReactNode}>) {

    return (

        <Container id={id}>
            <Paper elevation={3} className='p-10 leading-loose space-y-10 text-black justify-center ' >
            <h1>{title}</h1>
                {children}
            </Paper>
          </Container>
    )


}
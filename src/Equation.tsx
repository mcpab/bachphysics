
export default function Equation({ label = '', children }: Readonly<{ label?: string, children: React.ReactNode }>) {

    const eq = '\\begin{equation}';
    const en = '\\end{equation}';

    const lb = label === '' ? '' : `\\label{${label}}`;
 
    return (

        <>
       $$
                {eq}
                {children}
                {lb}
                {en}
        $$        
            
        </>
    )

}

export function Ref({label}:Readonly<{label:string}>) {

    const rs = `\\eqref{${label}}`;

    return(rs);

}

export function Ket({v}:Readonly<{v:string}>) {

    const rs=`\\Ket{\\vb ${v}}`;
    return(rs);

}

export function Bra({v}:Readonly<{v:string}>) {

    const rs=`\\bra{\\vb ${v}}`;
    return(rs);

}

export function Align({children}:Readonly<{children: React.ReactNode}>) {


    const rs='\\begin{align}';
    const rg='\\end{align}';

    return(
    <>   {rs}
        {children}
        {rg}
        </> 
        )
    

}
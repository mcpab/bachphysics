'use client'


import Ktx from './KatexEnv';
 
import LargePopup from './LargePopup';

export default function Equation({ math, label }: Readonly<{ math: string, label?: string }>) {

    
    var rt = '*';
    var eq;

    var popCt = <span dangerouslySetInnerHTML={{ __html: Ktx.render("\\begin{equation*}\\huge " + math + "\\end{equation*}") }} />;

    if (label !== undefined) {
        console.log('Define '+label)
        Ktx.addLabel(label,popCt);
        rt = '';
       console.log('Got ');console.log(Ktx.getLabel(label))
    }


    eq = <span dangerouslySetInnerHTML={{ __html: Ktx.render("\\begin{equation" + rt + "}" + math + "\\end{equation" + rt + "}") }} />;
    
    
    return (
           <LargePopup zoomContent={popCt}> {eq} </LargePopup>  
    )

}
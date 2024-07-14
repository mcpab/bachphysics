 
'use client'

import Ktx from './KatexEnv';
import LargePopup from './LargePopup';


export default function Ref({ label}:Readonly<{ label:string}>) {


    var lbl = Ktx.getLabel(label); 

    const rt = lbl===undefined? <span className="bg-yellow-300 text-red-600">Label {label} not defined</span> : <span className="underline text-blue-500">Eq ({lbl[0]})</span>; 
    const popCt = lbl===undefined? <span className="bg-yellow-300 text-red-600">Label {label} not defined</span> : lbl[1]; 

        return(
            <>
           <LargePopup zoomContent={popCt} inline={true}> {rt} </LargePopup>  
            </>
        )

}
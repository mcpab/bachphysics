'use client'

import LargePopup from "../LargePopup";
import { getEquation } from "./KatexPrismaExceptions";
import { useEffect, useState } from "react";
import BorderedDiv from "../BorderedDiv";

export default function Ref({ label ,pageName}: Readonly<{ label: string , pageName:string}>) {


    const [_label, _setLabel] = useState('');
    const [_html, _setHtml] = useState('');
    const [_pageName, _setPageName] = useState('');
    const [loading, setLoading] = useState(true);

    var results;


    useEffect(() => {

        (async () => {

            try {
                // Start loading
                setLoading(true);
                results = await getEquation({ label, pageName });
                setLoading(false);
                _setLabel(results['label']);
                _setHtml(results['html']);
                _setPageName(results['pageName']);
            } catch (error) {
                _setLabel('');
                setLoading(false);
            }    
           
        })();


    }, [label])

    if (loading) {
        return <span>Loading...</span>;
    }

    var rt = <span className="bg-yellow-300 text-red-600">Label &#34;{label}&#34; not defined</span>

    if (_label !== '') {

        let eq = <span dangerouslySetInnerHTML={{ __html: _html }} />;

        let signature = (_pageName+": "+_label).replace(/-/g,' ').replace(/\b\w/g, function (char) {
            return char.toUpperCase()
        })
        let zoom = <BorderedDiv signature={signature}>{eq} </BorderedDiv>

        rt = <LargePopup inline={true} zoom={zoom}> <span className="underline text-blue-500">{label}</span>  </LargePopup>


    }

    return (<>{rt}</>)

}
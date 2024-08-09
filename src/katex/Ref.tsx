'use client'

import LargePopup from "../LargePopup";
import { getEquation } from "./KatexPrisma";
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

            setLoading(true); // Start loading
            results = await getEquation(label,pageName);
            setLoading(false); // Start loading

            _setLabel(results.result['label']);
            _setHtml(results.result['html']);
            _setPageName(results.result['pageName']);

        })();


    }, [label])

    if (loading) {
        return <span>Loading...</span>;
    }

    var rt = <span className="bg-yellow-300 text-red-600">Label {label} not defined</span>

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
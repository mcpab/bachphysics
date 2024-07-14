'use client'

import { simpleKatex } from '@/src/simpleKatex.js' 

import { useState, useEffect } from 'react';

export default function MathJaxNode() {

  // const [isCompiling, setCompiling] = useState(false);
    const [html, setHtml] = useState('Loading');
 
    useEffect( ()=> {
        simpleKatex('lk').then( (res) => {
            console.log(res)
            setHtml(res);
        })
    })


    return (
        <>
            <p> this is: {html}</p>
        </>
    )
}

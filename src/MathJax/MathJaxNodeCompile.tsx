import { useState, useEffect } from 'react';

//export default function MathJaxNodeCompile({isCompiling}: Readonly<{  isCompiling:boolean  }>)  {

export default function MathJaxNodeCompile() {


    const [isCompiling, setCompiling] = useState(false);
    const [html, setHtml] = useState('Loading');

    latexFunc('k').then( (res) => {
        setHtml(res.html);
    })

    return (
        <>
            <p> this is: {html}</p>
        </>
    )
}

async function latexFunc(text: string) {

    var mjAPI = require("mathjax-node");

    mjAPI.config({
        MathJax: {
            loader: { load: ['[tex]/physics'] },
            tex: {
                tags: 'ams',
                inlineMath: [['$', '$'], ['\\(', '\\)']],
                packages: { '[+]': ['physics'] }
            }
        }
    });

    mjAPI.start();

    var yourMath = 'E = mc^2';

    return mjAPI.typeset({
        math: yourMath,
        format: "TeX",
        html: true,
    });

    try {
        const result = await mjAPI.typeset({
            math: yourMath,
            format: "TeX",
            html: true,
        });
        console.log('MathJax conversion result:', result.html);
        return result.html;
    } catch (error) {
        console.error('Error during MathJax conversion:', error);
        return 'not compiled ' + error; // Fallback value if conversion fails
    }



}

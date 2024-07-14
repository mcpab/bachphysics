'use client'

 import React, { useEffect } from 'react';

export default function MathJax() {

   

/*         const script1 = document.createElement('script');
        script1.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
        script1.defer = true;
        document.body.appendChild(script1);
 */
 

    return (
        <>
        <script src="/js/MathJaxConfigDirect.js" onLoad={() => console.log('script loaded')} defer> </script>
        <script src= "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" onLoad={() => console.log('mathjax loaded')} defer> </script>
        </>
    )

}



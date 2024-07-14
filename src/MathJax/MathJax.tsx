
'use client'
import Script from 'next/script'
import { useState, useEffect } from 'react';

export default function MathJax() {

    const [index, setIndex] = useState(0);
 
    useEffect( () => {
        console.log('this is the initial '+index) ;
        setIndex(1);
    },[index])
    
    

    return (
        <>
        <p>{index}
      
        </p>
            {/*             <Script id="mtx" strategy="beforeInteractive" onLoad={() => console.log('loaded config')}>
                {`
                    MathJax = {
                        loader: { load: ['[tex]/physics'] },
                        tex: {
                            tags: 'ams',
                            packages: { '[+]': ['physics'] }
                        }
                    };
                `}
            </Script> */}

            <Script src='/js/MathJaxConfig.js' onReady={() => { console.log('ready config '+ index);}}
                onLoad={() => { console.log('loaded config'+ index); }}
                onError={() => { console.log('error config'+ index); }} defer />

            <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
                onLoad={() => {console.log('loaded MathJax'+ index); }}
                onReady={() => { console.log('ready MathJax'+ index); setIndex(1); }}
                onError={() => { console.log('error MathJax'+ index); }} defer />

        </>
    )

}

 


'use client'
import Script from 'next/script'

export default function MathJax() {


    return (
        <>
            <Script src='/js/MathJaxConfig.js' strategy="afterInteractive" onReady={() => {
                console.log('loaded config');
            }}
                defer />

            <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" strategy="afterInteractive" onReady={() => {
                console.log('loaded MathJax');
            }}
                defer />
        </>
    )

}



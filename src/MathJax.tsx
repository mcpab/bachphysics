
'use client'
import Script from 'next/script'

export default function MathJax() {


    return (
        <>
            <Script id='mtx' strategy="beforeInteractive">
                {`MathJax = {
  loader: {load: ['[tex]/physics']},
    tex: {
      tags: 'ams',
      packages: {'[+]': ['physics']}
    }
  };
  console.log('loaded config');`
                }
            </Script>

           {/*  <Script src='/js/MathJaxConfig.js' strategy="lazyOnload" onReady={() => {
                console.log('loaded config');
            }}
                defer /> */}

            <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"  strategy="afterInteractive" onReady={() => {
                console.log('loaded MathJax');
            }}
                defer />
        </>
    )

}



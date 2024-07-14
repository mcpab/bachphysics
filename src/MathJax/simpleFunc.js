 'use server'
export async function simpleFunc(text) {

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
 
    var tr='1';

    var rt=  await mjAPI.typeset({
        math: yourMath,
        format: "TeX",
        html: true,
    });

   
    return rt;

   return new Promise( (resolve,reject) => {
    setTimeout( () => resolve(tr),2000);
   });
   

 
}
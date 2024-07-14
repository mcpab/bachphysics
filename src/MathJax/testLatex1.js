async function latexFunc(text) {
 
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
 
     mjAPI.typeset({
        math: yourMath,
        format: "TeX",
        html: true,
    }, (data) => {
        console.log('2')

        console.log(data);
    });

   
 
}

var rt='1'

console.log('1')

 latexFunc()
 console.log('3')


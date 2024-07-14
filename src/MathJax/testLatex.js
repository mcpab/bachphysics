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
        return 'not compiled '+error; // Fallback value if conversion fails
    }

 
 
}

var rt='1'

 latexFunc().then((data) =>{
    rt=data;console.log(rt);
});


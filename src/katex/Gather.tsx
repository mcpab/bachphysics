 

import Labels from './KatexLabels';
 

export default function Gather({math}:Readonly<{math:string }>) {

    const katex = require('katex');
 
    var rt='*'; 

    var eq;

    try {
        const rd = katex.renderToString("\\begin{gather"+rt +"}" + math +"\\end{gather"+rt+"}" , {
            output: 'html',
            displayMode: true
        });
        eq= <span dangerouslySetInnerHTML={{ __html: rd }} />;
    } catch (error:any) {
        // Handle any rendering errors (e.g., invalid TeX expression)
        eq= <span>Error rendering TeX expression: {error.message}</span>;
    }

        return(
            <>
          {eq}
            </>
        )

}
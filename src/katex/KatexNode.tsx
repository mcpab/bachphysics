
import 'katex/dist/katex.min.css';

export default function KatexNode({math}:Readonly<{math:string}>) {

    const katex = require('katex');
    require('katex/contrib/mhchem');

    try {
        const rd = katex.renderToString(math, {
 
            output: 'html',
            displayMode: true
        });
        return <span dangerouslySetInnerHTML={{ __html: rd }} />;
    } catch (error:any) {
        // Handle any rendering errors (e.g., invalid TeX expression)
        return <span>Error rendering TeX expression: {error.message}</span>;
    }


}
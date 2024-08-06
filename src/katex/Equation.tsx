


import { addEquation, renderLatex } from '@/src/katex/KatexPrisma'
import BorderedDiv from '../BorderedDiv';

export default async function Equation({ math, label }: Readonly<{ math: string, label?: string }>) {


    var eq;

    var html;
    let pageName;
    var signature;

    var latex = "\\begin{equation*}" + math + "\\end{equation*}";

    if (label === undefined) {
        html = await renderLatex(latex);

    } else {

        const rt = await addEquation(latex, label);
        html = rt.result['html'];
        pageName = rt.result['pageName']
        signature = pageName + ': ' + label.replace(/\b\w/g, function (char) {
            return char.toUpperCase()
        })

    }

    eq = <span dangerouslySetInnerHTML={{ __html: html }} />;

    const rrn = label === undefined ? eq : <BorderedDiv signature={signature}>{eq} </BorderedDiv>

    return (rrn)

}
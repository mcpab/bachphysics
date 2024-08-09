


import { addEquation, renderLatex } from '@/src/katex/KatexPrisma'
import BorderedDiv from '../BorderedDiv';

import { EquationProps } from './types';

export default async function Equation({ math, label,pageName }: Readonly<EquationProps>) {

    var eq;
    var html='initial html';
    var signature;
    var message;
    
    var latex = "\\begin{equation*}" + math + "\\end{equation*}";

    if (label && pageName) {
        // Both label and pageName are defined
        const rt = await addEquation(latex, label, pageName);
        html = rt.result.html;
        message = rt.message;
        signature = `${pageName}: ${label.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}`;
    } else {
        // Both label and pageName are undefined
        html = await renderLatex(latex);
        message = 'Equation rendered';
    }


    eq = <span data-hidden-field={`${message}`} dangerouslySetInnerHTML={{ __html: html }} />;

    const rrn = label === undefined ? eq : <BorderedDiv signature={signature}>{eq} </BorderedDiv>

    return (rrn)

}

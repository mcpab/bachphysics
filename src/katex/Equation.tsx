


import { addEquation, renderLatex } from '@/src/katex/KatexPrismaExceptions'
import BorderedDiv from '../BorderedDiv';
import { EquationProps } from './types';
import { handleError } from './supportFunction';
import CustomContainer from '../Bordered_v1';

export default async function Equation({ math, label, pageName }: Readonly<EquationProps>) {
    
    let html = 'initial html';
    let signature='';
    let message;
    let rt;

    const formatSignature = (sgn: string): string => {
        return sgn.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    };

    try {


        var latex = "\\begin{equation*}" + math + "\\end{equation*}";

        if (label && pageName) {
            // Both label and pageName are defined

            rt = await addEquation({ latex: latex, label: label, pageName: pageName });
            html = rt.html;
            message = rt.message;

            signature = `${formatSignature(pageName)}: ${formatSignature(label)}`;
        } else {
            // Both label and pageName are undefined
            html = await renderLatex(latex);
            message = 'Equation rendered';
        }

        const equationElement = <span data-hidden-field={message} dangerouslySetInnerHTML={{ __html: html }} />;
       const renderedEquation = label === undefined ? equationElement :<div className='m-5'><BorderedDiv signature={signature}>{equationElement}</BorderedDiv> </div> ;
       // const renderedEquation = label === undefined ? equationElement : <CustomContainer title={signature}>{equationElement}</CustomContainer>;

        return renderedEquation;

    } catch (error) {
        return <div>error in Equation: {handleError(error)+ JSON.stringify(rt)}</div>;
    }

}

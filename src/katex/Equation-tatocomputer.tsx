


import { addEquation, renderLatex } from '@/src/katex/KatexPrismaExceptions'
import BorderedDiv from '../BorderedDiv';
import { EquationProps } from './types';
import { handleError } from './supportFunction';
import { getEquation } from "./KatexPrismaExceptions";
import { EquationResult } from './types';

const formatSignature = (sgn: string | undefined): string => {
    if (sgn === undefined) {
        return '';
    }
    return sgn.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
};

export default async function RenderedEquation({ math, label, pageName }: Readonly<EquationProps>) {

    let html = 'initial html';
    let signature = '';
    let message;
    let rt;

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

        return EquationBlock({ label, pageName, html, message });

    } catch (error) {
        return <div>error in Equation: {handleError(error) + JSON.stringify(rt)}</div>;
    }

}

export async function EquationBlock({ label, pageName, html, message }: Readonly<{ label: string | undefined, pageName: string | undefined, html: string, message: string }>) {

    const signature = `${formatSignature(pageName)}: ${formatSignature(label)}`;
    const equationElement = <span data-hidden-field={message} dangerouslySetInnerHTML={{ __html: html }} />;
    const renderedEquation = label === undefined ? equationElement : <div className='m-5'><BorderedDiv signature={signature}>{equationElement}</BorderedDiv> </div>;

    return renderedEquation;
}

export async function Equation({ label, pageName }: Readonly<{ label: string, pageName: string }>) {

    try {
        const result: EquationResult = await getEquation({ label, pageName });
        return EquationBlock({ label, pageName, html: result.html, message: result.message });

    } catch (error) {
        return <div>Failed to load equation: {handleError(error)}</div>;
    }

}
'use server'

const katex = require('katex');

import { PrismaClient, Prisma } from '@prisma/client';
import { EquationResult, FunctionReturnType, PageResult,PageReturnType } from './types';
const prisma = new PrismaClient();

async function convertToTitleCase(str: string) {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

class pageAttributes {

    static NONSELECTED = "Page Not Selected";
    static SELECTED = "Page Selected";

    equationNumber: number = 0;
    pageName: string = pageAttributes.NONSELECTED;
    link = '';
    pageId: number = 0;
    latex: string = '';
    html = '';

    constructor(pgName: string, pageId: number) {
        this.pageName = pgName;
        this.pageId = pageId;
    }
    addOneEquation() {
        this.equationNumber++;
    }
    getEquationNumber(): number {
        return this.equationNumber;
    }
    getPageName(): string {
        return this.pageName;
    }
    getPageId(): number {
        return this.pageId;
    }


}

//////////////////// isError //////////////////
const isPrismaError = (error: any) => {
    return error instanceof Prisma.PrismaClientKnownRequestError ||
        error instanceof Prisma.PrismaClientUnknownRequestError ||
        error instanceof Prisma.PrismaClientRustPanicError ||
        error instanceof Prisma.PrismaClientValidationError ||
        error instanceof Prisma.PrismaClientInitializationError
}

const getError = (error: Prisma.PrismaClientUnknownRequestError | Prisma.PrismaClientRustPanicError | Prisma.PrismaClientValidationError | Prisma.PrismaClientInitializationError): string => {
    return error.message;
}

const fakeEquation: EquationResult = {
    label: '',
    latex: '',
    html: '',
    number: 0,
    pageId: -1,
    pageName: ""
}

const fakePage: PageResult = {
    pageName: "",
    link: "",
    id: -1
}

function isFakePage(pageReturn: PageReturnType): boolean {
    return pageReturn.result.id === fakePage.id &&
        pageReturn.result.pageName === fakePage.pageName &&
        pageReturn.result.link === fakePage.link;
}

//////////////////// Find Page //////////////////
const findPage = async (pageName: string): Promise<PageResult | null> => {
    return await prisma.pages.findUnique({
        where: {
            pageName: pageName,
        },
        select: {
            id: true,
            pageName: true,
            link: true
        }
    });
}

//////////////////// Create Page //////////////////
const createPage = async (pageName: string): Promise<PageResult | null> => {
    return await prisma.pages.create({
        data: {
            pageName: pageName,
            label: await convertToTitleCase(pageName),
        },
        select: {
            id: true,
            pageName: true,
            link: true
        }
    })

}

//////////////////// Delete Page //////////////////
const eraseDb = async (): Promise<any> => {
    return await prisma.pages.deleteMany({});
}


//////////////////// Delete Page //////////////////
const deletePage = async (pageName: string): Promise<any> => {
    return await prisma.pages.delete({
        where: {
            pageName: pageName
        }
    })

}


//////////////////// Find equation from pageName and label //////////////////
const findEquationWithLabel = async (label: string): Promise<EquationResult | null> => {
    const equation = await prisma.equation.findUnique({
        where: {
            pageId_label: {
                pageId: thisPage.getPageId(),
                label: label
            }
        },
        include: {
            page: {
                select: {
                    pageName: true
                }
            }
        }
    });

    // Check if an equation was found and restructure the result
    if (equation) {
        const { page, ...equationData } = equation;
        return {
            ...equationData,
            pageName: page?.pageName
        };
    }

    return null;
}

//////////////////// Create an equation //////////////////
const addEquationWithLabel = async (equationNumber: number, label: string, latex: string, html: string): Promise<EquationResult | null> => {
    const equation = await prisma.equation.create({
        data: {
            label: label,
            latex: latex,
            html: html,
            number: equationNumber,
            page: {
                connect: { id: thisPage.getPageId() }
            }
        },
        include: {
            page: {
                select: {
                    pageName: true
                }
            }
        }
    });

    // Check if an equation was created and restructure the result
    if (equation) {
        const { page, ...equationData } = equation;
        return {
            ...equationData,
            pageName: page?.pageName
        };
    }

    return null;
}

//////////////////// Create an equation //////////////////
const updateEquationWithLabel = async (pageId: number, equationNumber: number, label: string, latex: string, html: string): Promise<EquationResult | null> => {
    const equation = await prisma.equation.update({
        where: {
            pageId_label: {
                pageId: pageId,
                label: label
            }
        },
        data: {
            latex: latex,
            html: html,
            number: equationNumber
        },
        include: {
            page: {
                select: {
                    pageName: true
                }
            }
        }
    });

    // Check if an equation was updated and restructure the result
    if (equation) {
        const { page, ...equationData } = equation;
        return {
            ...equationData,
            pageName: page?.pageName
        };
    }

    return null;
}
//////////////////// Local class for equation tracking //////////////////
var thisPage: pageAttributes = new pageAttributes(pageAttributes.NONSELECTED, -1);

////////////////////////////////////////////////////////// GET IN FUNCTIONS 

//////////////////// Get-In Function: select a page, very first function to be called //////////////////
export async function deleteAllPages() {

    let result;

    result = await eraseDb();
    if (isPrismaError(result)) {
        return getError(result);
    }

    return "All pages erased";

}


//////////////////// Get-In Function: select a page, very first function to be called //////////////////
async function selectPage(pageName: string): Promise<PageReturnType> {

    let success: any;
    let fail: any;
    let message = 'Page retrieved';

    try {

        let result;

        result = await findPage(pageName);

        if (result === null) {
            result = await createPage(pageName);
            if (result == null) {
                return { result: fakePage, message: 'Page did not exist and could not be created - strange!!' };
            }
            message = 'Page created';
            return { result: result, message: message };
        }

        thisPage = new pageAttributes(pageName, result['id']);

        return { result: result, message: message };

    } catch (error) {

        if (error instanceof Prisma.PrismaClientKnownRequestError ||
            error instanceof Prisma.PrismaClientUnknownRequestError ||
            error instanceof Prisma.PrismaClientRustPanicError ||
            error instanceof Prisma.PrismaClientValidationError ||
            error instanceof Prisma.PrismaClientInitializationError) {
            return { result: fakePage, message: error.message };
        } else if (error instanceof Error) {
            return { result: fakePage, message: error.message };
        }

        return { result: fakePage, message: 'Unknown error in selectPage - you should NOT see this' };

    }
}



//////////////////// Get-In Function: get an equation //////////////////
export async function getEquation(label: string, pageName: string): Promise<FunctionReturnType> {

    try {

        let pageResult;

        if (thisPage.getPageId() === -1) {

            // page has not been selected
            pageResult = await selectPage(pageName);

            if (isFakePage(pageResult)) {
                return {
                    result: fakeEquation, message: pageResult.message
                };
            }
        }

        let result = await findEquationWithLabel(label);

        if (result === null) {
            return {
                result: fakeEquation, message: "Label not defined"
            };
        }

        return { result, message: "Label found" };

    } catch (error) {
        if (error instanceof Error) {
            return {
                result: fakeEquation, message: error.message
            };
        } else if (typeof error === 'string') {
            return { result: fakeEquation, message: error };
        } else {
            // If it's not an Error, we can decide how to handle it,
            // for example, by returning a generic message.
            return { result: fakeEquation, message: 'An unexpected error occourred in KATEX add equation' };
        }
    }

}

export async function addEquation(latex: string, label: string,pageName:string): Promise<FunctionReturnType> {

    let message = 'Equation retrieved';

    // waiting for the page to be set
    try {

        let result;
        let html: string;

        let pageResult;

        if (thisPage.getPageId() === -1) {

            // page has not been selected
            pageResult = await selectPage(pageName);

            if (isFakePage(pageResult)) {
                return {
                    result: fakeEquation, message: pageResult.message
                };
            }

            message += pageResult.message+ " " + message;
        }

        result = await findEquationWithLabel(label);

        if (result === null) {

            thisPage.addOneEquation();
            html = await renderLatex(latex);
            result = await addEquationWithLabel(thisPage.getEquationNumber(), label, latex, html);
            if (result === null) {
                return { result: fakeEquation, message: 'An unexpected error occourred in KATEX add equation CONDITION 1' };
            }
            message = 'Equation created';

        } else {   /// equation is in the database, check whether is the same as before

            let updated: boolean = false;

            let _number = result['number'];
            let _html = result['html'];
            let _latex = result['latex'];

            let c2 = '', c3 = ' retrieved ';

            if (_latex !== latex) {
                updated = true;
                _html = await renderLatex(latex);
                _latex = latex;
                c3 = ' updated '
                c2 = ' Latex ';
            }

            if (_number !== thisPage.getEquationNumber()) {
                updated = true;
                _number = thisPage.getEquationNumber();
                c3 = ' updated '
                c2 = ' number ';
            }

            //results changed
            if (updated) result = await updateEquationWithLabel(thisPage.getPageId(), _number, label, _latex, _html);
            if (result === null) {
                return { result: fakeEquation, message: 'An unexpected error occourred in KATEX add equation CONDITION 2' };
            }
            message = 'Equation' + c3 + c2 + ' ' + _latex + ' ' + latex + ' ' + _number + ' ' + thisPage.getEquationNumber();

            result['pageName'] = await convertToTitleCase(thisPage.getPageName());

        }

        return { result: result, message: message };

    } catch (error) {

        if (error instanceof Error) {
            return { result: fakeEquation, message: error.message };
        } else if (typeof error === 'string') {
            return { result: fakeEquation, message: error };
        } else {
            // If it's not an Error, we can decide how to handle it,
            // for example, by returning a generic message.
            return { result: fakeEquation, message: 'An unexpected error occourred in KATEX add equation CONDITION 3' };
        }
    }

}

//////////////////// Render LaTeX //////////////////
export async function renderLatex(math: string, displayMode: boolean = true): Promise<string> {

    const macros = {
        "\\vb": "\\textbf",
        "\\vb*": "\\textbf",
        "\\grad": "\\nabla"
    };

    try {

        const rd = katex.renderToString(math, {

            output: 'html',
            displayMode: displayMode,
            macros: macros


        });

        return rd;

    } catch (error: any) {
        return `<span style="background-color: yellow; color: red;">Error rendering TeX expression: ${error.message}</span>`;
    }

}

//////////////////// END //////////////////

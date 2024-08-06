'use server'

const katex = require('katex');

import { PrismaClient, Prisma } from '@prisma/client';

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


var pagePromise: Promise<string> = Promise.reject(pageAttributes.NONSELECTED);

//////////////////// Generic Prisma Operation //////////////////
type PrismaOperation = () => Promise<any>;
async function handlePrismaOperation(operation: PrismaOperation) {

    try {
        const result = await operation();
        return (result);
    } catch (error) {
        return error
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

type EquationResult = {
    label: string;
    latex: string;
    html: string;
    number: number;
    pageId:number;
    pageName: string;
};

const fakeEquation:EquationResult =  {
    label: '',
    latex: '',
    html: '',
    number: 0,
    pageId:-1,
    pageName: ""
}

// Define the structure of the entire return object
type FunctionReturnType = {
    result: EquationResult;
    message: string;
};

//////////////////// Find Page //////////////////
const findPage = async (pageName: string): Promise<any> => {
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
const createPage = async (pageName: string): Promise<any> => {
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
const findEquationWithLabel = async (label: string): Promise<EquationResult|null> => {
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
const addEquationWithLabel = async (equationNumber: number, label: string, latex: string, html: string): Promise<EquationResult|null> => {
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
const updateEquationWithLabel = async (pageId: number, equationNumber: number, label: string, latex: string, html: string): Promise<EquationResult|null> => {
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
var thisPage: pageAttributes;

////////////////////////////////////////////////////////// GET IN FUNCTIONS 

//////////////////// Get-In Function: select a page, very first function to be called //////////////////
export async function deleteAllPages() {

    let result;

    result = await handlePrismaOperation(() => eraseDb());
    if (isPrismaError(result)) {
        return getError(result);
    }

    return "All pages erased";

}


//////////////////// Get-In Function: select a page, very first function to be called //////////////////
export async function selectPage(pageName: string) {

    let success: any;
    let fail: any;
    let message = 'Page retrieved';

    pagePromise = new Promise((resolve, rejects) => {
        success = resolve;
        fail = rejects;
    });

    const pageLoaded = () => {
        success(pageAttributes.SELECTED)
    }
    const errorInPage = () => {
        fail('error in page')
    }

    try {

        let result;

        result = await handlePrismaOperation(() => findPage(pageName));

        if (result === null) {
            result = await handlePrismaOperation(() => createPage(pageName));
            message = 'Page created';
        }

        thisPage = new pageAttributes(pageName, result['id']);

        pageLoaded();

        return { result: result, message: message };

    } catch (error) {

        errorInPage();
        if (isPrismaError(error)) {
            throw new Error(error.message);
        } else if (error instanceof Error) {
            throw error;
        } else {
            throw new Error('Unknown error in selectPage - you should NOT see this')
        }
    }
}


//////////////////// Get-In Function: get an equation //////////////////
export async function getEquation(label: string,pageName?:string): Promise<FunctionReturnType> {

    try {

        let result = await handlePrismaOperation(() => findEquationWithLabel(label));

        if(result===null) {
            return {
                result: fakeEquation, message: "Label not defined"
            };
        }

        return { result, message: "Label found"};

    } catch (error) {
        if (error instanceof Error) {
            return {
                result: fakeEquation, message: error.message
            };
        } else if (typeof error === 'string') {
            return {result:fakeEquation, message: error};
        } else {
            // If it's not an Error, we can decide how to handle it,
            // for example, by returning a generic message.
            return {result: fakeEquation, message: 'An unexpected error occourred in KATEX add equation'};
        }
    }
    



}
//////////////////// Get-In Function: add an equation //////////////////
export async function addEquation(latex: string, label: string): Promise<FunctionReturnType> {

    let message = 'Equation retrieved';

    // waiting for the page to be set
    try {

        await pagePromise;

        let result;
        let html: string;

        result = await handlePrismaOperation(() => findEquationWithLabel(label));

        if (result === null) {

            thisPage.addOneEquation();
            html = await renderLatex(latex);
            result = await handlePrismaOperation(() => addEquationWithLabel(thisPage.getEquationNumber(), label, latex, html));
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
            if (updated) result = await handlePrismaOperation(() => updateEquationWithLabel(thisPage.getPageId(), _number, label, _latex, _html));

            message = 'Equation' + c3 + c2 + ' ' + _latex + ' ' + latex + ' ' + _number + ' ' + thisPage.getEquationNumber();
        }

        result['pageName'] = await convertToTitleCase(thisPage.getPageName());
        return { result: result, message: message };

    } catch (error) {

        if (error instanceof Error) {
            return {result:fakeEquation, message: error.message};
        } else if (typeof error === 'string') {
            return {result: fakeEquation, message: error};
        } else {
            // If it's not an Error, we can decide how to handle it,
            // for example, by returning a generic message.
            return {result:fakeEquation, message: 'An unexpected error occourred in KATEX add equation'};
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




'use server'

const katex = require('katex');

import { PrismaClient } from '@prisma/client';
import { EquationResult, PageResult } from './types';
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

const fakeEquation: EquationResult = {
    label: '',
    latex: '',
    html: '',
    number: 0,
    pageId: -1,
    pageName: "",
    message: ''
}

const fakePage: PageResult = {
    pageName: "",
    link: "",
    id: -1,
    message: ""
}


//////////////////// Find Page //////////////////
const findPage = async (pageName: string): Promise<PageResult | null> => {
    const page = await prisma.pages.findUnique({
        where: {
            pageName: pageName,
        },
        select: {
            id: true,
            pageName: true,
            link: true,
        }
    });


    if (page) {
        return {
            ...page,
            message: 'found'
        };
    }

    return null;
}

//////////////////// Create Page //////////////////
const createPage = async (pageName: string): Promise<PageResult | null> => {
    const page = await prisma.pages.create({
      data: {
        pageName: pageName,
        label: await convertToTitleCase(pageName),
      },
      select: {
        id: true,
        pageName: true,
        link: true
      }
    });
  
    // Add a custom field to the result
    return {
      ...page,
      message: 'created'
    };
  };
  

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
            pageName: page?.pageName,
            message: 'Equation retrieved'
        };
    }

    return null;
}

//////////////////// Create an equation //////////////////
const addEquationWithLabel = async ({ equationNumber, label, latex, html }: { equationNumber: number; label: string; latex: string; html: string; }): Promise<EquationResult | null> => {
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
            pageName: page?.pageName,
            message: 'Equation created'
        };
    }

    return null;
}

//////////////////// Create an equation //////////////////
const updateEquationWithLabel = async ({ pageId, equationNumber, label, latex, html }: { pageId: number; equationNumber: number; label: string; latex: string; html: string; }): Promise<EquationResult | null> => {
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
            pageName: page?.pageName,
            message: 'Equation updated'
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

    return "All pages erased";

}


//////////////////// Get-In Function: select a page, very first function to be called //////////////////
async function selectPage(pageName: string): Promise<PageResult> {

    let message = 'Page retrieved';


    let result;

    result = await findPage(pageName);

    if (result === null) {
        result = await createPage(pageName);
        if (result == null) {
            throw new Error('Page did not exist and could not be created - strange!!');
        }
        message = 'Page created';
        return result;
    }

    thisPage = new pageAttributes(pageName, result['id']);

    return result;
}



//////////////////// Get-In Function: get an equation //////////////////
export async function getEquation({ label, pageName }: { label: string; pageName: string; }): Promise<EquationResult> {

    let pageResult;

    if (thisPage.getPageId() === -1) {

        // page has not been selected
        pageResult = await selectPage(pageName);

    }

    let result = await findEquationWithLabel(label);

    return result === null ? fakeEquation : result;

}

//////////////////// Get-In Function: add an equation //////////////////
export async function addEquation({ latex, label, pageName }: { latex: string; label: string; pageName: string; }): Promise<EquationResult> {


    // waiting for the page to be set

    let result;
    let html: string;

    let pageResult: PageResult;

    if (thisPage.getPageId() === -1) {
        // page has not been selected
        pageResult = await selectPage(pageName);
    }

    result = await findEquationWithLabel(label);

    if (result === null) {

        thisPage.addOneEquation();
        html = await renderLatex(latex);
        result = await addEquationWithLabel({ equationNumber: thisPage.getEquationNumber(), label: label, latex: latex, html: html });
        if (result === null) {
            throw new Error('An unexpected error occourred in KATEX add equation CONDITION 1');
        }
 

    } else {   /// equation is in the database, check whether is the same as before

        let updated: boolean = false;

        let { number: equationNumber, html: equationHtml, latex: equationLatex } = result;
        let changeType = '', status = 'retrieved';


        if (equationLatex !== latex) {
            updated = true;
            equationHtml = await renderLatex(latex);
            equationLatex = latex;
            status = 'updated';
            changeType = 'Latex';
        }

        if (equationNumber !== thisPage.getEquationNumber()) {
            updated = true;
            equationNumber = thisPage.getEquationNumber();
            status = 'updated';
            changeType = 'number';
        }

        // If any updates were made, update the equation
        if (updated) {
            result = await updateEquationWithLabel({ pageId: thisPage.getPageId(), equationNumber: equationNumber, label: label, latex: equationLatex, html: equationHtml });
            if (result === null) {
                throw new Error('An unexpected error occurred in KATEX add equation CONDITION 2');
            }
        }

        // Construct the final message
        result['message'] = `Equation ${label} ${status} ${changeType}`;

        // Convert the page name to title case and add it to the result
        result['pageName'] = await convertToTitleCase(thisPage.getPageName());

    }

    return result;

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

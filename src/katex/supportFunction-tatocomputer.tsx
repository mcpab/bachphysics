import Math from "./Math";
import LargePopup from "../LargePopup";
import RenderedEquation, { Equation } from "./Equation";
import Ref from "./Ref";
import { Prisma } from "@prisma/client";

export const mt = (math: string) => {
    return <Math math={math} />;
}

// Overloaded function signatures
function eq(math: string): JSX.Element;
function eq(math: string, label: string, pageName: string): JSX.Element;

// Function implementation that matches the overloads
function eq(math: string, label?: string, pageName?: string): JSX.Element {
    if (label && pageName) {
        // Call with math, label, and pageName
        return <LargePopup><RenderedEquation math={math} label={label} pageName={pageName} /></LargePopup>;
    } else {
        // Call with only math
        return <LargePopup><RenderedEquation math={math} /></LargePopup>;
    }
}

function get(label: string, pageName: string): JSX.Element {
    return <LargePopup><Equation label={label} pageName={pageName}/></LargePopup>;
}

export {get}

// Export the overloaded function
export { eq };

export const ref = (label: string, pageName: string) => {
    return <Ref label={label} pageName={pageName} />;
}

export const mtx = (mode: "none" | 'split' | "matrix" | "pmatrix" | "align" = "matrix", ...args: string[]): string => {
    const gh1 = mode === "none" ? "" : "\\begin{" + mode + "} ";
    const gh2 = mode === "none" ? "" : "\\end{" + mode + "} ";

    return gh1 + args.join(' \\\\ ') + gh2;
}

export function handleError(error: any): string {
    if (error instanceof Prisma.PrismaClientKnownRequestError ||
        error instanceof Prisma.PrismaClientUnknownRequestError ||
        error instanceof Prisma.PrismaClientRustPanicError ||
        error instanceof Prisma.PrismaClientValidationError ||
        error instanceof Prisma.PrismaClientInitializationError ||
        error instanceof Error) {
        return error.message;
    } else {
        return "Unknown error";
    }
}

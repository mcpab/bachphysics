import Math from "./Math";
import LargePopup from "../LargePopup";
import Equation from "./Equation";
import Ref from "./Ref";
import { EquationProps } from "./types";

export const mt = (math: string) => {
    return <Math math={math} />;
}

// Overloaded function signatures
function eq(math: string): JSX.Element;
function eq(math: string, label: string, pageName: string): JSX.Element;

// Function implementation that matches the overloads
function eq(math: string, label?: string, pageName?: string): JSX.Element {
    if (typeof math === 'string' && label && pageName) {
        // Call with math, label, and pageName
        return <LargePopup><Equation math={math} label={label} pageName={pageName} /></LargePopup>;
    } else if (typeof math === 'string') {
        // Call with only math
        return <LargePopup><Equation math={math}  /></LargePopup>;
    }
    return <div>error in eq</div>;
}

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

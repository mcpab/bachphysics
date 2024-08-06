import Math from "./Math";
import LargePopup from "../LargePopup";
import Equation from "./Equation";
import Ref from "./Ref";

export const mt = (math: string) => {
    return <Math math={math} />;
}
export const eq = (math: string, label?: string) => {
    return <LargePopup><Equation math={math} label={label} /></LargePopup>
}

export const ref = (label: string) => {
    return <Ref label={label} />
}

export const mtx = (mode: "none" | 'split' | "matrix" | "pmatrix" | "align" = "matrix", ...args: string[]): string => {

    const gh1 = mode === "none" ? "" : "\\begin{" + mode + "} ";
    const gh2 = mode === "none" ? "" : "\\end{" + mode + "} ";
  
    return gh1 + args.join(' \\\\ ') + gh2;
  }

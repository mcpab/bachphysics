import { labelIndex } from '@/library/electromagnetism/moving-charge/generated/moving-charge-complete.labelIndex';
import { latexDocument } from '@/library/electromagnetism/moving-charge/generated/moving-charge-complete.layout.ast';

import Essay from '@/app/components/Essay';
import {
    type ChapterFrontMatterProps
} from "@mcpab/katex/react";

export const frontMatter = {
    eyebrow: "Electromagnetism",

    title: "Electromagnetic Field of a Uniformly Moving Charge",

    subtitle:
        "Derivation from Maxwell's equations using the Lorenz gauge and retarded potentials",

    abstract: [
        "Starting from Maxwell's equations in the Lorenz gauge, we derive the electromagnetic field of a uniformly moving point charge. The wave equations for the scalar and vector potentials are solved using Green's functions, leading naturally to the retarded potentials and the Heaviside expressions for the electric and magnetic fields.",
    ],

    prerequisites: [
        "Vector calculus",
        "Maxwell's equations",
        "The Lorenz gauge",
        "Green's functions",
        "Wave equation",
    ],

    topics: [
    ],
} satisfies ChapterFrontMatterProps;

export default function UniformCharge(): React.ReactElement {
    return (
        <Essay frontMatter={frontMatter} labelIndex={labelIndex} latexDocument={latexDocument} />
    )

}

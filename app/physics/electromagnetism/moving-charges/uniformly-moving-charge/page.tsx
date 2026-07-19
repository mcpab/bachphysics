'use client'
import { NextLinkLike } from '@/app/components/NextLinkLike';
import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import { ReferenceEnhancer } from '@mcpab/katex/client';
import {
    createLatexRendererContextValue,
    LatexHostContext,
    LatexRendererContext,
    type LatexHostContextValue,
    RenderLatexDocument,
} from '@mcpab/katex/react';
import { latexDocument } from '@/library/electromagnetism/moving-charge/generated/moving-charge-complete.layout.ast';
import { labelIndex } from '@/library/electromagnetism/moving-charge/generated/moving-charge-complete.labelIndex';
import { PageFrame } from '@/app/components/PageFrame';
import { scientificEssayLayout } from "@/app/physics/scientificEssayLayout";


import {
    ChapterFrontMatter,
    type ChapterFrontMatterProps,
} from "@mcpab/katex/react";

const frontMatter = {
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
        "Wave equations for the electromagnetic potentials",
        "Retarded Green's function",
        "Retarded scalar and vector potentials",
        "Uniformly moving point charge",
        "Electric field",
        "Magnetic field",
        "Heaviside fields",
    ],
} satisfies ChapterFrontMatterProps;

export default function UniformCharge(): React.ReactElement {

    const latexRendererContextValue = createLatexRendererContextValue({
    })

    const latexHostContextValue: LatexHostContextValue = {
        ImageComponent: NextImageAdapter,
        resolveAssetSrc: (src) => `/img/${src}`,
        LinkComponent: NextLinkLike,
    };


    return (

        <LatexRendererContext.Provider value={latexRendererContextValue}>
            <LatexHostContext.Provider value={latexHostContextValue}>
                <PageFrame>
                    <RenderLatexDocument latexDocument={latexDocument} layoutConfig={scientificEssayLayout}
                        frontMatter={
                            <ChapterFrontMatter {...frontMatter} />
                        } />
                    <ReferenceEnhancer labelIndex={labelIndex} />
                </PageFrame>
            </LatexHostContext.Provider>
        </LatexRendererContext.Provider>
    )



}

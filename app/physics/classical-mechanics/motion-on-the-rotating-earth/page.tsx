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

import { latexDocument } from '../../../../library/classical-mechanics/motion-on-the-rotating-earth.layout.ast';
import { labelIndex } from '../../../../library/classical-mechanics/motion-on-the-rotating-earth.labelIndex';
import { PageFrame } from '@/app/components/PageFrame';
import { scientificEssayLayout } from "@/app/physics/scientificEssayLayout";

import {
    ChapterFrontMatter,
    type ChapterFrontMatterProps,
} from "@mcpab/katex/react";

const frontMatter = {
    eyebrow: "Classical Mechanics",

    title: "Motion on the Rotating Earth",

    subtitle:
        "Applications of rotating-frame dynamics to motion near Earth's surface.",

    abstract: [
        "This essay applies the dynamics of rotating reference frames to motion near Earth's surface. Treating the Earth as a rotating frame, we derive the Coriolis and centrifugal contributions in terrestrial coordinates and examine how the general equations of rotating-frame dynamics acquire concrete physical meaning.",
    ],

    prerequisites: [
        "Dynamics in Rotating Reference Frames",
        "Vector calculus",
        "Introductory classical mechanics",
    ],

    topics: [
        "Earth-fixed reference frames",
        "Earth's angular velocity",
        "Local terrestrial coordinates",
        "Coriolis effects near Earth's surface",
        "Centrifugal effects near Earth's surface",
        "Latitude dependence",
        "Physical interpretation",
    ],
} satisfies ChapterFrontMatterProps;

export default function RigidBodyMotion(): React.ReactElement {

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
                    <ReferenceEnhancer latexDocument={latexDocument} labelIndex={labelIndex} />
                </PageFrame>
            </LatexHostContext.Provider>
        </LatexRendererContext.Provider>
    )



}

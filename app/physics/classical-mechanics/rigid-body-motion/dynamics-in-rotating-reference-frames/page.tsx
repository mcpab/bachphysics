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
import { latexDocument } from '@/library/classical-mechanics/rigid-body-motion/dynamics-in-rotating-reference-frames/generated/dynamics-in-rotating-reference-frames.layout.ast';
import { labelIndex } from '@/library/classical-mechanics/rigid-body-motion/dynamics-in-rotating-reference-frames/generated/dynamics-in-rotating-reference-frames.labelIndex';
import { PageFrame } from '@/app/components/PageFrame';
import { scientificEssayLayout } from "@/app/physics/scientificEssayLayout";

import {
    ChapterFrontMatter,
    type ChapterFrontMatterProps,
} from "@mcpab/katex/react";

const frontMatter = {
    eyebrow: "Classical Mechanics",

    title: "Dynamics in Rotating Reference Frames",

    subtitle:
        "Velocity and acceleration transformations, inertial forces, and Newtonian dynamics in non-inertial reference frames.",

    abstract: [
        "Building upon the kinematics of rotating reference frames, this essay derives the equations of motion observed by a rotating observer. Beginning with the transformation laws for velocity and acceleration, we obtain the inertial forces that arise in non-inertial frames, including the Euler, Coriolis, and centrifugal forces, and discuss their physical interpretation.",
    ],

    prerequisites: [
        "The Kinematics of Rigid Body Motion",
        "Newton's laws of motion",
    ],

    topics: [
        "Time derivatives in rotating frames",
        "Velocity transformations",
        "Acceleration transformations",
        "Euler force",
        "Coriolis force",
        "Centrifugal force",
        "Equations of motion in rotating frames",
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
                    <ReferenceEnhancer labelIndex={labelIndex} />
                </PageFrame>
            </LatexHostContext.Provider>
        </LatexRendererContext.Provider>
    )



}

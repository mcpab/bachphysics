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
import { latexDocument as rigidBodyKinematics } from '../../../../library/classical-mechanics/rigid-body-kinematics.layout.ast';
import { labelIndex } from '../../../../library/classical-mechanics/rigid-body-kinematics.labelIndex.ts';
import { PageFrame } from '@/app/components/PageFrame';
import { scientificEssayLayout } from "@/app/physics/scientificEssayLayout";

import {
    ChapterFrontMatter,
    type ChapterFrontMatterProps,
} from "@mcpab/katex/react";

export const rigidBodyMotionFrontMatter = {
    eyebrow: "Classical Mechanics",

    title: "The Kinematics of Rigid Body Motion",

    subtitle:
        "Orthogonal transformations, finite and infinitesimal rotations, angular velocity, and rotating reference frames.",

    abstract: [
        "This essay develops the kinematics of rigid body motion from first principles, emphasizing geometric intuition, careful derivation, and precise notation. Beginning with orthogonal transformations, we construct the mathematical framework required to describe the motion of rigid bodies and rotating reference frames.",
    ],

    prerequisites: [
        "Linear algebra and matrix transformations",
        "Vector calculus",
        "Introductory classical mechanics",
    ],

    topics: [
        "Orthogonal transformations",
        "Finite rotations",
        "Infinitesimal rotations",
        "Angular velocity",
        "Rotating reference frames",
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
                    <RenderLatexDocument latexDocument={rigidBodyKinematics} layoutConfig={scientificEssayLayout}
                        frontMatter={
                            <ChapterFrontMatter {...rigidBodyMotionFrontMatter} />
                        } />
                    <ReferenceEnhancer latexDocument={rigidBodyKinematics} labelIndex={labelIndex} />
                </PageFrame>
            </LatexHostContext.Provider>
        </LatexRendererContext.Provider>
    )



}

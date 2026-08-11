'use client'
import { labelIndex } from '@/library/classical-mechanics/rigid-body-motion/kinematics-of-rotations/generated/kinematics-of-rotations.labelIndex';
import { latexDocument } from '@/library/classical-mechanics/rigid-body-motion/kinematics-of-rotations/generated/kinematics-of-rotations.layout.ast';

import Essay from '@/app/components/Essay';
import {
    type ChapterFrontMatterProps
} from "@mcpab/katex/react";

export const frontMatter = {
    eyebrow: "Classical Mechanics",

    title: "The Kinematics of Rotations",

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
    ],
} satisfies ChapterFrontMatterProps;

export default function RigidBodyMotion(): React.ReactElement {

    return (
        <Essay frontMatter={frontMatter} labelIndex={labelIndex} latexDocument={latexDocument} />
    )

}

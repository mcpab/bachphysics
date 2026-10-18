 
import { labelIndex } from '@/library/classical-mechanics/rigid-body-motion/dynamics-in-rotating-reference-frames/generated/dynamics-in-rotating-reference-frames.labelIndex';
import { latexDocument } from '@/library/classical-mechanics/rigid-body-motion/dynamics-in-rotating-reference-frames/generated/dynamics-in-rotating-reference-frames.layout.ast';

import Essay from '@/app/components/Essay';
import {
    type ChapterFrontMatterProps
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
    

    return (

         <Essay
            frontMatter={frontMatter}
            labelIndex={labelIndex}
            latexDocument={latexDocument}
        />
    )



}

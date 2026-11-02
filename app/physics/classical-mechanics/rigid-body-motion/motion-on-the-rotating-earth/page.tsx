'use client'

import Essay from '@/app/components/Essay';
import { labelIndex } from '@/library/classical-mechanics/rigid-body-motion/motion-on-the-rotating-earth/generated/motion-on-the-rotating-earth.labelIndex';
import { latexDocument } from '@/library/classical-mechanics/rigid-body-motion/motion-on-the-rotating-earth/generated/motion-on-the-rotating-earth.layout.ast';

import {
    type ChapterFrontMatterProps
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
   
    return (

       <Essay
                   frontMatter={frontMatter}
                   labelIndex={labelIndex}
                   latexDocument={latexDocument}
               />
    )



}

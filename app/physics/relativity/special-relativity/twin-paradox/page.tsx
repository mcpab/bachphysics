'use client'
import { labelIndex } from '@/library/relativity/special-relativity/twin-paradox/generated/twin-paradox.labelIndex';
import { latexDocument } from '@/library/relativity/special-relativity/twin-paradox/generated/twin-paradox.layout.ast';

import Essay from '@/app/components/Essay';
import {
    type ChapterFrontMatterProps
} from "@mcpab/katex/react";

const frontMatter = {
  eyebrow: 'Special Relativity',
  title: 'The Twin Paradox',
subtitle: 'The apparent asymmetry of relativistic motion and its resolution',
  abstract: [
    'This essay examines the twin paradox in detail, showing how two observers can each regard the other as moving while nevertheless measuring different elapsed times when they reunite. The apparent asymmetry is resolved directly from the Lorentz transformations and the different spacetime descriptions of the journey.',
  ],
  prerequisites: [
    'Linear algebra and inner-product spaces',
    'Multivariable calculus',
    'Fundamental principles of special relativity',
    'Lorentz transformations',
  ],
  topics: [
    'Twin paradox',
    'Time dilation',
    'Length contraction',
    'Relativity of simultaneity',
    'Lorentz transformations',
    'Proper time',
  ],
} satisfies ChapterFrontMatterProps;

export default function RigidBodyMotion(): React.ReactElement {

    return (
        <Essay frontMatter={frontMatter} labelIndex={labelIndex} latexDocument={latexDocument} />
    )

}

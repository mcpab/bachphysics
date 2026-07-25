'use client';

import Essay from '@/app/components/Essay';
import { labelIndex } from '@/library/relativity/special-relativity/composition-of-velocities/generated/composition-of-velocities.labelIndex';
import { latexDocument } from '@/library/relativity/special-relativity/composition-of-velocities/generated/composition-of-velocities.layout.ast';
import {
    type ChapterFrontMatterProps
} from '@mcpab/katex/react';

const frontMatter = {
    eyebrow: 'Special Relativity',
    title: 'Composition of Velocities',
    subtitle: 'The relativistic relation between velocities measured in inertial reference frames.',
    abstract: [
        'This essay derives the relativistic composition of velocities from the Lorentz transformation for a general boost. The resulting relation respects the invariant speed of light and reduces to Galilean velocity addition in the low-speed limit.',
    ],
    prerequisites: [
        'Lorentz Transformations',
        'Vector calculus',
        'Differentiation of vector-valued functions',
    ],
    topics: [ 
    ],
} satisfies ChapterFrontMatterProps;

export default function CompositionOfVelocities(): React.ReactElement {
    
    return (
       <Essay frontMatter={frontMatter} labelIndex={labelIndex} latexDocument={latexDocument} />
    );
}

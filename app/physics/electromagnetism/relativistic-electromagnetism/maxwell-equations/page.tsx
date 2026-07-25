'use client';

import Essay from '@/app/components/Essay';
import { labelIndex } from '@/library/electromagnetism/relativistic-electromagnetism/maxwell-equations/generated/relativistic-maxwell-equations.labelIndex';
import { latexDocument } from '@/library/electromagnetism/relativistic-electromagnetism/maxwell-equations/generated/relativistic-maxwell-equations.layout.ast';
import {
    type ChapterFrontMatterProps
} from '@mcpab/katex/react';

const frontMatter = {
    eyebrow: 'Relativistic Electromagnetism',
    title: 'The Relativistic Maxwell Equations',
    subtitle: 'The transformation of electromagnetic field equations under a Lorentz boost in an arbitrary direction.',
    abstract: [
        'This essay derives the relativistic transformation of Maxwell\'s equations using multivariable calculus. After establishing the required differential identities, it transforms divergence and curl under a general Lorentz boost and applies the result to the vacuum field equations.',
    ],
    prerequisites: [
        'Lorentz Transformations',
        'Multivariable and vector calculus',
        'Maxwell\'s equations in vacuum',
    ],
    topics: [
    ],
} satisfies ChapterFrontMatterProps;

export default function MaxwellEquations(): React.ReactElement {

    return (
          <Essay frontMatter={frontMatter} labelIndex={labelIndex} latexDocument={latexDocument} />
    );
}

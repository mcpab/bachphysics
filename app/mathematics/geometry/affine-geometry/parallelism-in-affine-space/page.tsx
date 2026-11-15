'use client';

import Essay from '@/app/components/Essay';
import { labelIndex } from '@/library/mathematics/geometry/affine-geometry/parallelism-in-affine-space/generated/parallelism-in-affine-space.labelIndex';
import { latexDocument } from '@/library/mathematics/geometry/affine-geometry/parallelism-in-affine-space/generated/parallelism-in-affine-space.layout.ast';
import type { ChapterFrontMatterProps } from '@mcpab/katex/react';

const frontMatter = {
    eyebrow: 'Geometry',
    title: 'Parallelism in Affine Space',

    // TODO: Write the essay subtitle.
    // subtitle: '',

    abstract: [
        // TODO: Write the essay abstract.
    ],

    prerequisites: [
        'Affine Subspaces and Coordinates',
        'Hyperplanes and Linear Equations',
    ],

    topics: [
        'Parallel affine subspaces',
        'Translations of affine subspaces',
        'Parallel hyperplanes',
        'Equal-or-disjoint behavior',
        'The fifth parallel axiom',
    ],
} satisfies ChapterFrontMatterProps;

export default function ParallelismInAffineSpace(): React.ReactElement {
    return (
        <Essay
            frontMatter={frontMatter}
            labelIndex={labelIndex}
            latexDocument={latexDocument}
        />
    );
}

'use client';

import Essay from '@/app/components/Essay';
import { labelIndex } from '@/library/mathematics/geometry/affine-geometry/affine-independence-and-spans/generated/affine-independence-and-spans.labelIndex';
import { latexDocument } from '@/library/mathematics/geometry/affine-geometry/affine-independence-and-spans/generated/affine-independence-and-spans.layout.ast';
import type { ChapterFrontMatterProps } from '@mcpab/katex/react';
import { affineGeometryLatexPropsOverrides } from '../affineGeometryOverrides';

const frontMatter = {
    eyebrow: 'Geometry',
    title: 'Affine Independence and Spans',

    // TODO: Write the essay subtitle.
    // subtitle: '',

    abstract: [
        // TODO: Write the essay abstract.
    ],

    prerequisites: [
        'Foundations of Affine Space',
        'Affine Subspaces and Coordinates',
    ],

    topics: [
        'Affine dependence and independence',
        'Dimension bounds',
        'Affine subspaces spanned by points',
        'Existence and uniqueness of the affine span',
    ],
} satisfies ChapterFrontMatterProps;

export default function AffineIndependenceAndSpans(): React.ReactElement {
    return (
        <Essay
            frontMatter={frontMatter}
            labelIndex={labelIndex}
            latexDocument={latexDocument}
            latexPropsOverrides={affineGeometryLatexPropsOverrides}
        />
    );
}

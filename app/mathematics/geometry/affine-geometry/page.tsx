'use client';

import Essay from '@/app/components/Essay';
import { labelIndex } from '@/library/mathematics/geometry/affine-geometry/generated/affine-geometry.labelIndex';
import { latexDocument } from '@/library/mathematics/geometry/affine-geometry/generated/affine-geometry.layout.ast';
import type { ChapterFrontMatterProps } from '@mcpab/katex/react';

const frontMatter = {
    eyebrow: 'Geometry',
    title: 'Affine Geometry',
    subtitle: 'Points, vectors, affine spaces, and the transformations that preserve their structure.',
    abstract: [
        'This essay is under development. It will introduce affine geometry from first principles and establish the notation used by later geometry essays.',
    ],
    prerequisites: [],
    topics: [],
} satisfies ChapterFrontMatterProps;

export default function AffineGeometry(): React.ReactElement {
    return (
        <Essay
            frontMatter={frontMatter}
            labelIndex={labelIndex}
            latexDocument={latexDocument}
        />
    );
}

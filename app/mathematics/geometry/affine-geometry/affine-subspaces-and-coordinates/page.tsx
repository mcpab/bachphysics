'use client';

import Essay from '@/app/components/Essay';
import { labelIndex } from '@/library/mathematics/geometry/affine-geometry/affine-subspaces-and-coordinates/generated/affine-subspaces-and-coordinates.labelIndex';
import { latexDocument } from '@/library/mathematics/geometry/affine-geometry/affine-subspaces-and-coordinates/generated/affine-subspaces-and-coordinates.layout.ast';
import type { ChapterFrontMatterProps } from '@mcpab/katex/react';

const frontMatter = {
    eyebrow: 'Geometry',
    title: 'Affine Subspaces and Coordinates',

    // TODO: Write the essay subtitle.
    // subtitle: '',

    abstract: [
        // TODO: Write the essay abstract.
    ],

    prerequisites: [
        'Foundations of Affine Space',
    ],

    topics: [
        'Affine subspaces and direction spaces',
        'Inherited affine structure',
        'Equality and intersections',
        'Affine coordinate systems',
    ],
} satisfies ChapterFrontMatterProps;

export default function AffineSubspacesAndCoordinates(): React.ReactElement {
    return (
        <Essay
            frontMatter={frontMatter}
            labelIndex={labelIndex}
            latexDocument={latexDocument}
        />
    );
}

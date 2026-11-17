'use client';

import Essay from '@/app/components/Essay';
import { labelIndex } from '@/library/mathematics/geometry/affine-geometry/hyperplanes-and-linear-equations/generated/hyperplanes-and-linear-equations.labelIndex';
import { latexDocument } from '@/library/mathematics/geometry/affine-geometry/hyperplanes-and-linear-equations/generated/hyperplanes-and-linear-equations.layout.ast';
import type { ChapterFrontMatterProps } from '@mcpab/katex/react';
import { affineGeometryLatexPropsOverrides } from '../affineGeometryOverrides';
const frontMatter = {
    eyebrow: 'Geometry',
    title: 'Hyperplanes and Linear Equations',

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
        'Linear functionals and kernels',
        'Codimension-one subspaces',
        'Hyperplanes',
        'Coordinate equations',
        'Converse construction from a linear equation',
    ],
} satisfies ChapterFrontMatterProps;

export default function HyperplanesAndLinearEquations(): React.ReactElement {
    return (
        <Essay
            frontMatter={frontMatter}
            labelIndex={labelIndex}
            latexDocument={latexDocument}
            latexPropsOverrides={affineGeometryLatexPropsOverrides}
        />
    );
}

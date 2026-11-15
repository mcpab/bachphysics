'use client';

import Essay from '@/app/components/Essay';
import { labelIndex } from '@/library/mathematics/geometry/affine-geometry/foundations-of-affine-space/generated/foundations-of-affine-space.labelIndex';
import { latexDocument } from '@/library/mathematics/geometry/affine-geometry/foundations-of-affine-space/generated/foundations-of-affine-space.layout.ast';
import type { LatexPropsOverrides } from '@mcpab/katex';
import type { ChapterFrontMatterProps } from '@mcpab/katex/react';

const latexPropsOverrides = {
    table: {
        $all: {
            sizeVariant: 'large',
            align: 'left',
        },
    },
} satisfies LatexPropsOverrides;

const frontMatter = {
    eyebrow: 'Geometry',
    title: 'Foundations of Affine Space',

    // TODO: Write the essay subtitle.
    // subtitle: '',

    abstract: [
        // TODO: Write the essay abstract.
    ],

    prerequisites: [],

    topics: [
        'Notation and conventions',
        'Points and vectors',
        'Affine-space axioms',
        'Displacements',
        'Translations',
    ],
} satisfies ChapterFrontMatterProps;

export default function FoundationsOfAffineSpace(): React.ReactElement {
    return (
        <Essay
            frontMatter={frontMatter}
            labelIndex={labelIndex}
            latexDocument={latexDocument}
            latexPropsOverrides={latexPropsOverrides}
        />
    );
}

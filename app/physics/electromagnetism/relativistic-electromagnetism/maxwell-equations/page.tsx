'use client';

import { NextLinkLike } from '@/app/components/NextLinkLike';
import { PageFrame } from '@/app/components/PageFrame';
import { scientificEssayLayout } from '@/app/physics/scientificEssayLayout';
import { latexDocument } from '@/library/electromagnetism/relativistic-electromagnetism/maxwell-equations/generated/relativistic-maxwell-equations.layout.ast';
import { labelIndex } from '@/library/electromagnetism/relativistic-electromagnetism/maxwell-equations/generated/relativistic-maxwell-equations.labelIndex';
import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import { ReferenceEnhancer } from '@mcpab/katex/client';
import {
    ChapterFrontMatter,
    createLatexRendererContextValue,
    LatexHostContext,
    LatexRendererContext,
    type ChapterFrontMatterProps,
    type LatexHostContextValue,
    RenderLatexDocument,
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
        'Differential identities for vector fields',
        'Transformation of divergence and curl',
        'Electromagnetic field transformations',
        'Lorentz covariance of Maxwell\'s equations',
    ],
} satisfies ChapterFrontMatterProps;

export default function MaxwellEquations(): React.ReactElement {
    const latexRendererContextValue = createLatexRendererContextValue({});
    const latexHostContextValue: LatexHostContextValue = {
        ImageComponent: NextImageAdapter,
        resolveAssetSrc: (src) => `/img/${src}`,
        LinkComponent: NextLinkLike,
    };

    return (
        <LatexRendererContext.Provider value={latexRendererContextValue}>
            <LatexHostContext.Provider value={latexHostContextValue}>
                <PageFrame>
                    <RenderLatexDocument
                        latexDocument={latexDocument}
                        layoutConfig={scientificEssayLayout}
                        frontMatter={<ChapterFrontMatter {...frontMatter} />}
                    />
                    <ReferenceEnhancer labelIndex={labelIndex} />
                </PageFrame>
            </LatexHostContext.Provider>
        </LatexRendererContext.Provider>
    );
}

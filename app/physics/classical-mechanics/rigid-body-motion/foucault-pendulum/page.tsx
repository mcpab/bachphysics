'use client'

import { NextLinkLike } from '@/app/components/NextLinkLike';
import { PageFrame } from '@/app/components/PageFrame';
import { scientificEssayLayout } from '@/app/physics/scientificEssayLayout';
import { labelIndex } from '@/library/classical-mechanics/rigid-body-motion/foucault-pendulum/generated/foucault-pendulum.labelIndex';
import { latexDocument } from '@/library/classical-mechanics/rigid-body-motion/foucault-pendulum/generated/foucault-pendulum.layout.ast';
import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import { FigureEnhancer, ReferenceEnhancer } from '@mcpab/katex/client';
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
    eyebrow: 'Classical Mechanics',
    title: 'The Foucault Pendulum',
    subtitle:
        "How the Coriolis force produces the slow precession of a pendulum's oscillation plane.",
    abstract: [
        "This essay derives the motion of the Foucault pendulum from the equations of motion near Earth's surface. It develops the constrained dynamics, linearizes the pendulum equations, identifies the Coriolis-induced splitting of the circular normal modes, and obtains the precession of the oscillation direction.",
    ],
    prerequisites: [
        'Motion on the Rotating Earth',
        'Dynamics in Rotating Reference Frames',
        'Introductory classical mechanics',
    ],
    topics: [
        'Pendulum constraint',
        'Linearized motion',
        'Coriolis coupling',
        'Circular normal modes',
        'Frequency splitting',
        'Precession of the oscillation plane',
    ],
} satisfies ChapterFrontMatterProps;

export default function FoucaultPendulum(): React.ReactElement {
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
                    <FigureEnhancer />
                </PageFrame>
            </LatexHostContext.Provider>
        </LatexRendererContext.Provider>
    );
}

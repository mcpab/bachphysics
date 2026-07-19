'use client';
import { NextLinkLike } from '@/app/components/NextLinkLike';
import { PageFrame } from '@/app/components/PageFrame';
import { scientificEssayLayout } from '@/app/physics/scientificEssayLayout';
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
import type { LatexNodeMap, LatexReferenceIndex, LatexPropsOverrides } from '@mcpab/katex';


export type EssayProps = {
    frontMatter: ChapterFrontMatterProps;
    latexDocument: LatexNodeMap['latexDocument'];
    labelIndex: LatexReferenceIndex;
    latexPropsOverride?: LatexPropsOverrides;
}
export default function Essay({ frontMatter, latexDocument, labelIndex, latexPropsOverride }: EssayProps): React.ReactElement {
    //

    const latexRendererContextValue = createLatexRendererContextValue({ latexPropsOverride });

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

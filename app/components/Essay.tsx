'use client';

import { NextLinkLike } from '@/app/components/NextLinkLike';
import { PageFrame } from '@/app/components/PageFrame';
import { scientificEssayLayout } from '@/app/physics/scientificEssayLayout';
import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import type {
    LatexDocumentNode,
    LatexLabelNodeIndex,
    LatexPropsOverrides,
} from '@mcpab/katex/latex';
import {
    ChapterFrontMatter,
    LatexDocumentPage,
    LatexHostContext,
    type ChapterFrontMatterProps,
    type LatexHostContextValue,
} from '@mcpab/katex/react';


export type EssayProps = {
    frontMatter: ChapterFrontMatterProps;
    latexDocument: LatexDocumentNode;
    labelIndex: LatexLabelNodeIndex;
    latexPropsOverrides?: LatexPropsOverrides;
}
export default function Essay({ frontMatter, latexDocument, labelIndex, latexPropsOverrides }: EssayProps): React.ReactElement {

    const latexHostContextValue: LatexHostContextValue = {
        ImageComponent: NextImageAdapter,
        resolveAssetSrc: (src) => `/img/${src}`,
        LinkComponent: NextLinkLike,
    };

    return (
        <LatexHostContext.Provider value={latexHostContextValue}>
            <PageFrame>
                <LatexDocumentPage
                    component="div"
                    documentLayout={scientificEssayLayout}
                    frontMatter={
                        <ChapterFrontMatter
                            {...frontMatter}
                            editorialMaxWidth={scientificEssayLayout.editorialMaxWidth}
                            chapterTitleSx={scientificEssayLayout.chapterTitleSx}
                        />
                    }
                    labelIndex={labelIndex}
                    latexDocument={latexDocument}
                    latexPropsOverrides={latexPropsOverrides}
                    sx={{ p: 0 }}
                />
            </PageFrame>
        </LatexHostContext.Provider>
    );
}

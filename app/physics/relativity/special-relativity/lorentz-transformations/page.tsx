import Essay from '@/app/components/Essay';
import { labelIndex } from '@/library/relativity/special-relativity/time-and-space/generated/time-and-space.labelIndex';
import { latexDocument } from '@/library/relativity/special-relativity/time-and-space/generated/time-and-space.layout.ast';
import {
    type ChapterFrontMatterProps
} from '@mcpab/katex/react';

const frontMatter = {
    eyebrow: 'Special Relativity',
    title: 'Lorentz Transformations',
    subtitle: 'The transformation of time and space between inertial reference frames for a boost in an arbitrary direction.',
    abstract: [
        'This essay follows Einstein\'s clock-synchronization argument and develops the Lorentz transformation for a general velocity boost. It makes explicit the geometry parallel and perpendicular to the boost and derives the corresponding transformations of space and time.',
    ],
    prerequisites: [
        'Linear algebra and inner-product spaces',
        'Multivariable calculus',
        'Fundamental principles of special relativity',
    ],
    topics: [ 
    ],
} satisfies ChapterFrontMatterProps;

export default function LorentzTransformations(): React.ReactElement {
    //

    return (
       <Essay frontMatter={frontMatter} labelIndex={labelIndex} latexDocument={latexDocument} />
    );
}

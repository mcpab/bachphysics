import { EssayCollectionOverview } from '@/app/components/overview/EssayCollectionOverview';
import {
    getImmediateMenuTopics,
    withMenuTopicMetadata,
} from '@/app/navigation/getImmediateMenuTopics';
import { siteMenuTree } from '@/app/navigation/siteMenuTree';

const affineGeometryIntroduction = [
    // TODO: Write the Affine Geometry collection introduction.
] as const;

const affineGeometryEssayMetadata = {
    '/mathematics/geometry/affine-geometry/foundations-of-affine-space': {
        title: 'Foundations of Affine Space',
    },
    '/mathematics/geometry/affine-geometry/affine-subspaces-and-coordinates': {
        title: 'Affine Subspaces and Coordinates',
    },
    '/mathematics/geometry/affine-geometry/hyperplanes-and-linear-equations': {
        title: 'Hyperplanes and Linear Equations',
    },
    '/mathematics/geometry/affine-geometry/parallelism-in-affine-space': {
        title: 'Parallelism in Affine Space',
    },
    '/mathematics/geometry/affine-geometry/affine-independence-and-spans': {
        title: 'Affine Independence and Spans',
    },
} as const;

const affineGeometryEssays = withMenuTopicMetadata(
    getImmediateMenuTopics(siteMenuTree, 'affine-geometry'),
    affineGeometryEssayMetadata,
);

export default function AffineGeometry(): React.ReactElement {
    return (
        <EssayCollectionOverview
            title="Affine Geometry"
            introduction={affineGeometryIntroduction}
            essays={affineGeometryEssays}
        />
    );
}

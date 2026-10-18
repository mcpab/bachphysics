import { SectionOverview } from '@/app/components/overview/SectionOverview';
import { getImmediateMenuTopics } from '@/app/navigation/getImmediateMenuTopics';
import { siteMenuTree } from '@/app/navigation/siteMenuTree';

const geometryIntroduction = [
    'Geometry provides one of the fundamental languages of physics. This collection will begin with affine geometry, where the elementary structures of points, vectors, and transformations can be developed carefully, before proceeding toward differential geometry and the description of curved spaces.',
    'The task is necessarily selective. Affine and differential geometry are immense subjects, and this collection cannot attempt a comprehensive treatment of either. It will instead develop a carefully chosen path through the concepts needed by the physics essays, with particular attention to logical continuity, explicit assumptions, and derivation from first principles.'
] as const;

const geometrySections = getImmediateMenuTopics(siteMenuTree, 'geometry');

export default function Geometry(): React.ReactElement {
    return (
        <SectionOverview
            title="Geometry"
            heroCaption="A page from Bernhard Riemann’s handwritten notes on the foundations of geometry."
            heroImage={{
                src: '/img/reimannHandSchrift.jpg',
                objectPosition: '10% 1%',
                priority: true,
                overlayColor: 'rgba(12, 11, 10, 0.32)',
            }}
            introduction={geometryIntroduction}
            sections={geometrySections}
        />
    );
}

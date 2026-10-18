import { SectionOverview } from '@/app/components/overview/SectionOverview';
import { getImmediateMenuTopics } from '@/app/navigation/getImmediateMenuTopics';
import { siteMenuTree } from '@/app/navigation/siteMenuTree';

const mathematicsIntroduction = [
'This section is not intended to reconstruct the vast body of mathematics used throughout physics, nor to provide a comprehensive course in mathematical physics. Such an undertaking would be neither possible nor consistent with the purpose of this project.',
'Instead, it develops a deliberately narrow selection of mathematical ideas that arise naturally in the physics essays. Each subject is included only where it clarifies the structure of the physics, but is developed carefully enough to preserve the continuity of the reasoning.',
'As throughout BachPhysics, the emphasis is on first principles, consistent notation, and the logical connections between concepts—not on assembling an encyclopedic collection of results.',
] as const;

const mathematicsSections = getImmediateMenuTopics(siteMenuTree, 'mathematics');

export default function Mathematics(): React.ReactElement {
    return (
        <SectionOverview
            title="Mathematics"
            heroCaption="Gottfried Wilhelm Leibniz’s working notes on algebraic multiplication. Gottfried Wilhelm Leibniz Bibliothek, LH 35, 3 A 5, fols. 6r–6v."
            heroImage={{
                src: '/img/leibniz-manuscript.png',
                objectPosition: '20% 5%',
                priority: true,
            }}
            introduction={mathematicsIntroduction}
            sections={mathematicsSections}
        />
    );
}

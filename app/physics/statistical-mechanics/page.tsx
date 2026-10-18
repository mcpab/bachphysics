import { SectionOverview } from '@/app/components/overview/SectionOverview';

export default function StatisticalMechanics(): React.ReactElement {
    return (
        <SectionOverview
            title='Statistical Mechanics'
            heroCaption='Statistical mechanics in the BachPhysics library.'
            heroImage={{
                src: '/img/fluxions.png',
                objectPosition: 'center',
                priority: true,
                overlayColor: 'rgba(12, 11, 10, 0.52)',
            }}
            introduction={[
                'This section is part of the long-term BachPhysics project and is currently under development. Future essays will develop the subject carefully from first principles, with emphasis on derivation, notation, and conceptual understanding.',
            ]}
        />
    );
}

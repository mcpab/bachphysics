import { PhysicsSubjectOverview } from '../components/PhysicsSubjectOverview';

const classicalMechanicsDescription = [
    'Classical Mechanics is the foundation upon which much of physics is built. Its apparent simplicity is somewhat deceptive: beneath familiar concepts such as motion and force lies a rich mathematical structure ranging from elementary kinematics to the variational principles of Lagrangian and Hamiltonian mechanics.',
    'Here we face a formidable task. The subject is vast, and no single collection of notes can hope to cover it completely. We shall therefore proceed in the spirit that guides this entire project: slowly, carefully, and always from first principles.',
    'Each step will be derived explicitly whenever possible, with the aim of understanding not only what the equations say, but why they must take the form they do.',
    "Our journey will begin with the kinematics of rigid body motion before moving on to systems of many particles and the deeper principles that govern their dynamics. This choice reflects, in part, the author's own desire to revisit and better understand topics that were often passed over too quickly during earlier years of study.",
    'Progress will be gradual, and many sections will evolve over time. Nevertheless, the goal remains constant: to build a coherent and rigorous understanding of classical mechanics, one derivation at a time.',
    "The subject will be developed through the following major topics."
] as const;

const classicalMechanicsTopics = [
    {
        href: '/physics/classical-mechanics/rigid-body-motion',
        title: 'Rigid Body Motion',
    },
    {
        href: '/physics/classical-mechanics/lagrangian-mechanics',
        title: 'Lagrangian Mechanics',
    },
    {
        href: '/physics/classical-mechanics/hamiltonian-mechanics',
        title: 'Hamiltonian Mechanics',
    },
] as const;

export default function ClassicalMechanics(): React.ReactElement {
    return (
        <PhysicsSubjectOverview
            title="Classical Mechanics"
            caption={
                <>
                    Hero image: Galileo&apos;s <em>Discorsi e Dimostrazioni Matematiche</em>{' '}
                    (1638).
                </>
            }
            description={classicalMechanicsDescription}
            imageConf={{
                src: '/img/galileo.jpg',
                objectPosition: '10% 1%',
                transform: 'scale(1.18)',
                priority: true,
                overlayColor: 'rgba(12, 11, 10, 0.52)',
            }}
            topics={classicalMechanicsTopics}
        />
    );
}

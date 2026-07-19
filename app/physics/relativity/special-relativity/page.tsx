import { PhysicsTopicOverview } from '../../components/PhysicsTopicOverview';

const specialRelativityEssays = [
    {
        href: '/physics/relativity/special-relativity/lorentz-transformations',
        title: 'Lorentz Transformations',
        description: 'Derives the transformation of time and space for a general Lorentz boost and examines the synchronization of clocks between inertial frames.',
    },
    {
        href: '/physics/relativity/special-relativity/composition-of-velocities',
        title: 'Composition of Velocities',
        description: 'Develops the relativistic law for composing velocities from the Lorentz transformation and recovers the classical limit.',
    },
] as const;

export default function SpecialRelativity(): React.ReactElement {
    return (
        <PhysicsTopicOverview
            title="Special Relativity"
            description={[
                'This collection develops the kinematics of special relativity from the transformation of space and time to the relativistic composition of velocities.',
                'The essays are intended to be read in order: the Lorentz transformation establishes the geometry and notation used in the treatment of moving bodies that follows.',
            ]}
            essays={specialRelativityEssays}
        />
    );
}

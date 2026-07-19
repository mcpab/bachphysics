import { PhysicsTopicOverview } from '../../components/PhysicsTopicOverview';

const movingChargesEssays = [
    {
        href: '/physics/electromagnetism/moving-charges/uniformly-moving-charge',
        title: 'The Electromagnetic Field of a Uniformly Moving Charge',
        description: 'Starting from Maxwell\'s equations, we derive the electromagnetic field of a uniformly moving point charge and recover the Heaviside field.',
    },

] as const;

export default function MovingCharges(): React.ReactElement {
    return (
        <PhysicsTopicOverview
            title='Moving Charges'
            description={[
                'A stationary point charge gives rise to the familiar Coulomb field.',
                'Once the charge begins to move, however, electric and magnetic fields become inseparably linked.',
                'Rather than introducing the final expressions directly, we derive the fields of moving charges step by step from Maxwell\'s equations, beginning with uniform motion and later extending to accelerated charges and electromagnetic radiation.',
            ]}
            essays={movingChargesEssays}
        />
    );
}

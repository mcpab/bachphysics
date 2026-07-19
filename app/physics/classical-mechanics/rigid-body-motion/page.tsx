import { PhysicsTopicOverview } from '../../components/PhysicsTopicOverview';

const rigidBodyEssays = [
    {
        href: '/physics/classical-mechanics/rigid-body-motion/kinematics',
        title: 'The Kinematics of Rigid Body Motion',
        description: 'Develops the geometry of rigid body motion, including orthogonal transformations, finite and infinitesimal rotations, angular velocity, and rotating reference frames.',
    },
    {
        href: '/physics/classical-mechanics/rigid-body-motion/dynamics-in-rotating-reference-frames',
        title: 'Dynamics in Rotating Reference Frames',
        description: 'Derives Newton\'s laws as observed from rotating frames and obtains the Euler, Coriolis, and centrifugal forces.',
    },
    {
        href: '/physics/classical-mechanics/rigid-body-motion/motion-on-the-rotating-earth',
        title: 'Motion on the Rotating Earth',
        description: 'Applies rotating-frame dynamics to motion near Earth\'s surface and examines the observable effects of Earth\'s rotation.',
    },
] as const;

export default function RigidBodyMotion(): React.ReactElement {
    return (
        <PhysicsTopicOverview
            title='Rigid Body Motion'
            description={[
                'The theory of rigid body motion is developed through three essays intended to be read in sequence. Each essay establishes the ideas and notation used by the next.',
                'The sequence begins with the geometry of rotations and rotating coordinate systems, proceeds to dynamics in rotating reference frames, and concludes by applying those ideas to motion near the Earth\'s surface.',
            ]}
            essays={rigidBodyEssays}
        />
    );
}

import {
    getImmediateMenuTopics,
    withMenuTopicMetadata,
} from '@/app/navigation/getImmediateMenuTopics';
import { siteMenuTree } from '@/app/navigation/siteMenuTree';
import { PhysicsTopicOverview } from '../../components/PhysicsTopicOverview';

const rigidBodyEssayMetadata = {
    '/physics/classical-mechanics/rigid-body-motion/kinematics-of-rotations': {
        title: 'The Kinematics of Rotations',
        description: 'Develops the geometry of rigid body motion, including orthogonal transformations, finite and infinitesimal rotations, angular velocity, and rotating reference frames.',
    },
    '/physics/classical-mechanics/rigid-body-motion/dynamics-in-rotating-reference-frames': {
        title: 'Dynamics in Rotating Reference Frames',
        description: 'Derives Newton\'s laws as observed from rotating frames and obtains the Euler, Coriolis, and centrifugal forces.',
    },
    '/physics/classical-mechanics/rigid-body-motion/motion-on-the-rotating-earth': {
        title: 'Motion on the Rotating Earth',
        description: 'Applies rotating-frame dynamics to motion near Earth\'s surface and examines the observable effects of Earth\'s rotation.',
    },
    '/physics/classical-mechanics/rigid-body-motion/foucault-pendulum': {
        title: 'The Foucault Pendulum',
        description: 'Derives the constrained motion of the Foucault pendulum and explains the slow precession of its oscillation plane.',
    },
} as const;

const rigidBodyEssays = withMenuTopicMetadata(
    getImmediateMenuTopics(siteMenuTree, 'rigid-body-motion'),
    rigidBodyEssayMetadata,
);

export default function RigidBodyMotion(): React.ReactElement {
    return (
        <PhysicsTopicOverview
            title='Rigid Body Motion'
            description={[
                'The theory of rigid body motion is developed through four essays intended to be read in sequence. Each essay establishes the ideas and notation used by the next.',
                'The sequence begins with the geometry of rotations and rotating coordinate systems, proceeds to dynamics in rotating reference frames, applies those ideas to motion near the Earth\'s surface, and concludes with the Foucault pendulum.',
            ]}
            essays={rigidBodyEssays}
        />
    );
}

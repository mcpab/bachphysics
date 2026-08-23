import {
    getImmediateMenuTopics,
    withMenuTopicMetadata,
} from '@/app/navigation/getImmediateMenuTopics';
import { siteMenuTree } from '@/app/navigation/siteMenuTree';
import { PhysicsTopicOverview } from '../../components/PhysicsTopicOverview';

const specialRelativityEssayMetadata = {
    '/physics/relativity/special-relativity/lorentz-transformations': {
        description: 'Derives the transformation of time and space for a general Lorentz boost and examines the synchronization of clocks between inertial frames.',
    },
    '/physics/relativity/special-relativity/composition-of-velocities': {
        description: 'Develops the relativistic law for composing velocities from the Lorentz transformation and recovers the classical limit.',
    },
    '/physics/relativity/special-relativity/twin-paradox': {
        description: 'Resolves the apparent asymmetry of the twin paradox using Lorentz transformations, proper time, and the relativity of simultaneity.',
    },
} as const;

const specialRelativityEssays = withMenuTopicMetadata(
    getImmediateMenuTopics(siteMenuTree, 'special-relativity'),
    specialRelativityEssayMetadata,
);

export default function SpecialRelativity(): React.ReactElement {
    return (
        <PhysicsTopicOverview
            title="Special Relativity"
            description={[
                'This collection develops Special Relativity systematically from its kinematical foundations, with particular emphasis on the structure of spacetime, the role of events and reference frames, and the physical meaning of relativistic quantities.',
                'The essays are intended to build on one another, deriving results carefully from first principles and developing the mathematical language needed for more advanced topics in relativistic physics.',
            ]}
            essays={specialRelativityEssays}
        />
    );
}

import {
    getImmediateMenuTopics,
    withMenuTopicMetadata,
} from '@/app/navigation/getImmediateMenuTopics';
import { siteMenuTree } from '@/app/navigation/siteMenuTree';
import { PhysicsTopicOverview } from '../../components/PhysicsTopicOverview';

const relativisticElectromagnetismEssayMetadata = {
    '/physics/electromagnetism/relativistic-electromagnetism/maxwell-equations': {
        title: 'The Relativistic Maxwell Equations',
        description: 'Derives the transformation of Maxwell\'s equations under a general Lorentz boost using multivariable calculus.',
    },
} as const;

const relativisticElectromagnetismEssays = withMenuTopicMetadata(
    getImmediateMenuTopics(siteMenuTree, 'relativistic-electromagnetism'),
    relativisticElectromagnetismEssayMetadata,
);

export default function RelativisticElectromagnetism(): React.ReactElement {
    return (
        <PhysicsTopicOverview
            title="Relativistic Electromagnetism"
            description="A collection examining the Lorentz covariance of electromagnetic fields and Maxwell's equations."
            essays={relativisticElectromagnetismEssays}
        />
    );
}

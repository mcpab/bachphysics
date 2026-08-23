import { getImmediateMenuTopics } from '@/app/navigation/getImmediateMenuTopics';
import { siteMenuTree } from '@/app/navigation/siteMenuTree';
import { PhysicsSubjectOverview } from '../components/PhysicsSubjectOverview';

const relativityDescription = [
  'This section is part of the long-term BachPhysics project and currently contains only essays on Special Relativity.',
  'Future essays will broaden the scope while developing the subject carefully from first principles, with emphasis on derivation, notation, and physical meaning.',
] as const;

const relativityTopics = getImmediateMenuTopics(siteMenuTree, 'relativity');

export default function Relativity(): React.ReactElement {
    return (
        <PhysicsSubjectOverview
            title="Relativity"
            caption="Relativity in the BachPhysics library."
            description={relativityDescription}
            imageConf={{
                src: '/img/relativity.jpg',
                objectPosition: 'center',
                priority: true,
                overlayColor: 'rgba(12, 11, 10, 0.52)',
            }}
            topics={relativityTopics}
        />
    );
}

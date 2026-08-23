import { getImmediateMenuTopics } from '../navigation/getImmediateMenuTopics';
import { siteMenuTree } from '../navigation/siteMenuTree';
import { PhysicsSubjectOverview } from './components/PhysicsSubjectOverview';

const physicsDescription = [
    'BachPhysics is a long-term project and remains very much a work in progress. The collection presented here is only the beginning and will continue to grow over time.',
    'The current material focuses on Classical Mechanics, Electromagnetism, and Special Relativity. These subjects were chosen both for their intrinsic beauty and because they provide much of the conceptual foundation upon which modern physics is built.',
    'Additional sections are planned for the future, including Quantum Mechanics, Statistical Physics, Thermodynamics, General Relativity, and various topics in mathematical physics. New essays and notes will be added gradually as they are written.',
    'The aim is not to create an encyclopedia, but a carefully curated collection of derivations, explanations, and perspectives united by a common philosophy: understanding through first principles, mathematical clarity, and intellectual curiosity.',
] as const;

const physicsTopics = getImmediateMenuTopics(siteMenuTree, 'physics');

export default function Physics(): React.ReactElement {
    return (
        <PhysicsSubjectOverview
            title="Physics"
            caption="Hero image: a page from Newton's manuscript on the method of fluxions."
            description={physicsDescription}
            imageConf={{
                src: '/img/fluxions.png',
                objectPosition: '10% 1%',
                priority: true,
                overlayColor: 'rgba(12, 11, 10, 0.52)',
            }}
            topics={physicsTopics}
        />
    );
}

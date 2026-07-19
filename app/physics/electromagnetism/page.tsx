import { PhysicsSubjectOverview } from '../components/PhysicsSubjectOverview';


const electromagnetismDescription = [
    "Electromagnetism is one of the great intellectual achievements of science. It unifies electricity, magnetism, and light into a single mathematical framework whose elegance is matched only by its depth. Yet that elegance can be deceptive: beneath the compact form of Maxwell's equations lies a remarkably rich theory that demands a solid understanding of vector calculus, differential equations, and, ultimately, the geometry of spacetime itself.",

    "This section is still in its early stages and will take considerable time to mature. The hope is that, over the years, it will grow into a comprehensive collection of carefully derived notes, perhaps with contributions from others who share the same passion for understanding physics from first principles. As throughout BachPhysics, our aim is not merely to state results, but to derive them patiently and to understand the ideas that make them inevitable.",

    "The path we follow here will not always resemble that of a traditional textbook. Alongside the classical foundations, we will occasionally explore topics whose importance extends into special and general relativity, differential geometry, and other areas of mathematical physics. Some of these subjects are included simply because they answer questions that have fascinated the author for many years—questions for which it was often surprisingly difficult to find a clear and satisfying exposition. Consequently, the collection may at times appear eclectic, but every topic has been chosen with the goal of deepening our understanding of electromagnetic theory and its intimate connections with the broader structure of modern physics.",
] as const;


const electromagnetismTopics = [
    {
        href: '/physics/electromagnetism/moving-charges/',
        title: 'Electromagnetic Field of Moving Charges',
    },
    {
        href: '/physics/electromagnetism/relativistic-electromagnetism/maxwell-equations',
        title: 'Relativistic Maxwell Equations',
    },
] as const;



export default function Electromagnetism(): React.ReactElement {
  return (
          <PhysicsSubjectOverview
              title="Electromagnetism"
              caption={
                  <>
                      Hero image: James Clerk Maxwell, “A Dynamical Theory of the
                      Electromagnetic Field” (1865).
                  </>
              }
              description={electromagnetismDescription}
              imageConf={{
                  src: '/img/maxwellManuscript.png',
                //   objectPosition: '10% 1%',
                  transform: 'scale(1.18)',
                  priority: true,
                  overlayColor: 'rgba(12, 11, 10, 0.52)',
              }}
              topics={electromagnetismTopics}
          />
      );
}

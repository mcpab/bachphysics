
import ImageAndTextGrid from '@/src/ImageAndTextGrid';
import Link from 'next/link';

export default function Page() {
  return (
    <>

      <ImageAndTextGrid title='Kinematics'
        items={[
          {
            imgPath: '/img/time3.jpg',
            component: (
              styleText('The Transformation of Time and Space', 'The Lorentz transformation of time and space between systems moving at constant velocity relative to each other.', '/physics/relativity/time-and-space')
            ),
          },
          {
            imgPath: '/img/velocitiesComposition.jpg',
            component: (
              styleText('The Composition of Velocities', 'The relativistic composition of velocities.', '/physics/relativity/composition-of-velocities')
            ),
          },
        ]} />

      <ImageAndTextGrid title='Electro-Dynamics'
        items={[
          {
            imgPath: '/img/maxwellRel.jpg',
            component: (
              styleText('The Relativistic Maxwell Equations', 'The formulation of the Maxwell equations for a general boost in an arbitrary direction.', '/physics/relativity/relativistic-maxwell-equations')
            ),
          },
        ]} />

    </>
  );
}

function styleText(title: string, description: string, link: string) {
  return (
    <div>

      <h2><Link href={link} className='text-inherit no-underline hover:text-blue-300'>{title}</Link></h2>
      <p>{description}</p>
    </div>
  );
}

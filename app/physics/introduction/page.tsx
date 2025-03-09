
import 'katex/dist/katex.min.css';
import '@/styles/katexCustom.css';
import MediaAndText from '@/src/MediaAndTextGrid';
import SectionsMenusLayout from '@/src/SectionsMenusLayout';
import Section from '@/src/katex/SectionClass';
import { SectionType } from '@/src/types';
import { Box } from '@mui/material';

export default function Page() {

  let sections = new Section('Introduction');

  let introduction = sections.addSection('What Motivated this Project');

  introduction.setContent(
    <>
      <MediaAndText imageSrc='/img/ales-krivec-NeOmIgsXEXA-unsplash.jpg' imageSize={50} caption="" imagePosition='right'>
        <p>
          When studying physics, we often encounter a vast array of materials that require careful reading and comprehension. However, it is not uncommon to struggle with
          fully understanding the derivation of all the equations presented. This can be due to various reasons: sometimes our personal limits hinder our understanding,
          and other times the authors possess a deeper insight into the physics and mathematics, allowing them to see things more clearly than we do.
        </p>

        <p>

          Regardless of the reason, many of us have felt the need for a resource where fundamental equations are derived in a detailed and accessible manner.
          This project aims to address that need by providing a comprehensive platform where key equations are meticulously derived and explained. Our goal is to create a valuable tool for
          students and enthusiasts alike, helping them bridge the gap between complex theoretical concepts and practical understanding.


        </p>

      </MediaAndText>

    </>
  );

  let whichtopics = sections.addSection('The Topics Covered');

  whichtopics.setContent(
    <>
      <MediaAndText imageSrc='/img/a-c-a3XdceJ8tA0-unsplash.jpg' imageSize={50} caption="" imagePosition='left'>
        <p>
          Physics is an incredibly vast field, and this project will only be able to cover some of its fundamental aspects. The topics selected for this project are those that the authors
          find personally most interesting and important. Some topics were chosen because the authors tutored students on specific subjects, such as the kinematics of rigid bodies, which led them to derive the Foucault Pendulum equation.

          Another example is the derivation of the Lorentz equations of special relativity. The authors read Einstein  original 1905 paper and admired his genius in deriving the equations.
          However, they felt that additional work could be done to extend his formalism to a more general case.

          The authors aspire for this project to grow further with the help of the community, allowing for the addition of more topics in the future. By collaborating and sharing knowledge,
          they hope to create a valuable resource that continues to expand and evolve.


        </p>

        <p>
          The topics that ideally would be covered in this project are the following:
        </p>

        <Box display="flex" justifyContent="center">
          <ul>
            <li>Classical Mechanics</li>
            <li>Special Relativity</li>
            <li>General Relativity</li>
            <li>Electromagnetism</li>
            <li>Quantum Mechanics</li>
            <li>Statistical Mechanics</li>
          </ul>
        </Box>

        <p> The authors are far from contributing meaningfully to all of them. Hopefully, in the future, some contribution to each will be available for the reader.</p>
      </MediaAndText>
    </>
  );

  let whichreaders = sections.addSection('The Readers of This Project');

  whichreaders.setContent(
    <>
      <MediaAndText imageSrc='/img/thought-catalog-OJZB0VUQKKc-unsplash.jpg' imageSize={50} caption="" imagePosition='right'>
        <p>
          This project is intended for readers with a solid understanding of mathematics and physics. It aims to provide detailed derivations and explanations of fundamental equations, which may be challenging for those without a strong background in these subjects.

          Undergraduate physics students at the beginning of their studies might find some sections particularly difficult. To fully benefit from this project, it is highly recommended that readers have a good grasp of linear algebra,
          multivariable calculus, and general physics principles. These mathematical tools are essential for understanding the complex derivations and concepts presented.

          The project is designed to bridge the gap between theoretical knowledge and practical application, offering a deeper insight into the mechanics of physics. By providing detailed explanations and
          derivations, the authors hope to make advanced topics more accessible to those with the necessary foundational knowledge.

        </p>

      </MediaAndText>

      <p> References to main books and articles are given through the project. The authors hope that the readers will be able to find the original sources and read them in order to get a deeper understanding of the topics.</p>
      <p> The authors apologize for any errors in the text. A contact form will soon be available for providing feedback. </p>
    </>
  );

  let authors = sections.addSection('The Authors of This Project');

  authors.setContent(
    <>
      <p>
        The authors of this project are two individuals who share a passion for physics and mathematics. They have a strong background in these subjects and are dedicated to making complex concepts more accessible to others.

        Their goal is to provide a comprehensive resource that helps students and enthusiasts alike understand the fundamental equations of physics. By sharing their knowledge and insights, they hope to inspire others to explore the beauty of the physical world.

        Through this project, the authors aim to create a collaborative platform where ideas can be shared and discussed, fostering a community of learners who are eager to deepen their understanding of physics and mathematics.

      </p>
      <MediaAndText imageSrc='/img/Kellie Ffrench--12.jpg' imageSize={50} caption="" imagePosition='left'>
        <Box my={5} />
        <b>Dr. Rer. Nat Marco Claudio Pio Brunelli </b> holds a PhD in Physics with top honors from the University of Stuttgart, Germany. He completed his undergraduate studies in Physics,
        graduating Magna Cum Laude from the University of Bologna, Italy. Currently, he works as a director at a German multinational company, where he leads projects
        at the forefront of technology development. Dr. Brunelli is a passionate physicist and mathematician who loves to share his knowledge with others.
      </MediaAndText>
    </>
  );

  let sectionsToRender: SectionType = sections.getSections();

  return (
    <>
      <SectionsMenusLayout mainSection={sectionsToRender} />
    </>
  );

}


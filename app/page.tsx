
import { MainTitle } from '@mcpab/web-blocks';
import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import { BannerStatic } from '@mcpab/web-blocks';
import { LeadText } from './components/TextComponents';
import { PageFrame } from './components/PageFrame';
import { HomeClosingScore } from './components/HomeClosingScore';

export default function HomePage(): React.ReactElement {
  return (

    <PageFrame hero={
      <BannerStatic ImageComponent={NextImageAdapter} image={{
        src: '/img/bachKunst.png',
        objectPosition: '20% 23%',
        transform: 'translateX(-5%) scale(1.30)',
        priority: true,
        overlayColor: 'rgba(12, 11, 10, 0.72)',
        filter: 'saturate(0.45) brightness(0.65) contrast(1.05)'
      }} size='md' >
        <MainTitle
          title='Bach and Physics' subtitle='Notes on Mathematics, Physics, and Harmony'
          autoCapitalize={false}
          slotProps={{
            title: {
              color: 'primary.main',
            },
            subtitle: {
              sx: {
                color: 'primary.main',
                fontSize: "20px",
                lineHeight: 1.18,
                maxWidth: "30ch",
                opacity: 0.92,
              },
            }

          }}
        />
      </BannerStatic>} >

      <LeadText>
        BachPhysics is a long-term collection of essays on physics and mathematics,
        written for readers who want to understand difficult topics in detail and from
        first principles. The intended audience is primarily advanced undergraduate and
        graduate students, as well as self-learners who are comfortable following
        mathematical arguments closely.
      </LeadText>
      <LeadText>
        The guiding philosophy is understanding through derivation. The goal is not
        simply to state results, but to follow the path that leads to them. Equations
        are developed carefully, intermediate steps are shown whenever possible, and
        the connections between mathematical structure and physical meaning are made
        explicit.
      </LeadText>
      <LeadText>
        Many physics texts move quickly from one equation to the next, often omitting
        passages that are essential for real understanding. BachPhysics is built
        around the opposite approach: derivations should be readable, reproducible,
        and detailed enough that a careful student can follow each step.
      </LeadText>
      <LeadText>
        The project is intentionally a work in progress. Its scope includes selected
        parts of classical mechanics, electromagnetism, relativity, quantum mechanics,
        and the mathematical tools needed to study them, including calculus, linear
        algebra, differential equations, tensor analysis, and differential geometry.
      </LeadText>
      <LeadText>
        The site is not meant to be complete in the encyclopedic sense. Its purpose is
        clarity rather than coverage: to develop selected topics slowly, explicitly,
        and with enough mathematical detail to make the physics genuinely transparent.
      </LeadText>

      <LeadText>
        Despite every effort to ensure accuracy and completeness, errors and omissions may remain.
        The reader is asked to regard these notes as a work in progress
        and to excuse any shortcomings that may be encountered.
      </LeadText>
      <LeadText>
        The essays collected here are written by a theoretical physicist with a longstanding interest in
        the mathematical foundations of physics. They are offered in the hope that others may find in them some
        of the same joy, wonder, and illumination that accompany the patient study of mathematics and the laws of nature.
        Perhaps, in time, others who share this spirit will join in expanding and enriching the collection.
        More information can be found on the About page.
      </LeadText>
      <LeadText>
        Physics understood one derivation at a time.
      </LeadText>

      <HomeClosingScore />


    </PageFrame>
  );
}

import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import { MainTitle } from '@mcpab/web-blocks';
import { PageFrame } from '../components/PageFrame';
import { LeadText } from '../components/TextComponents';
import { BannerStatic } from '@mcpab/web-blocks';
import Typography from '@mui/material/Typography';

export default function Physics(): React.ReactElement {


    return (

        <PageFrame hero={
            <BannerStatic ImageComponent={NextImageAdapter} image={{
                src: '/img/fluxions.png',
                objectPosition: '10% 1%',
                // transform: 'translateX(-5%) scale(0.95)',
                priority: true,
                overlayColor: 'rgba(12, 11, 10, 0.52)',
                // filter: 'saturate(0.45) brightness(0.65) contrast(1.05)'
            }} size='md' >
                <MainTitle
                    title='Physics'
                     subtitle=''
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

            <Typography variant='caption'>
                Hero image: a page from Newton&apos;s manuscript on the method of fluxions.
            </Typography>

            <LeadText>
                BachPhysics is a long-term project and remains very much a work in
                progress. The collection presented here is only the beginning and will
                continue to grow over time.
            </LeadText>

            <LeadText>
                The current material focuses on Classical Mechanics,
                Electromagnetism, and Special Relativity. These subjects were chosen
                both for their intrinsic beauty and because they provide much of the
                conceptual foundation upon which modern physics is built.
            </LeadText>

            <LeadText>
                Additional sections are planned for the future, including Quantum
                Mechanics, Statistical Physics, Thermodynamics, General Relativity,
                and various topics in mathematical physics. New essays and notes will
                be added gradually as they are written.
            </LeadText>

            <LeadText>
                The aim is not to create an encyclopedia, but a carefully curated
                collection of derivations, explanations, and perspectives united by a
                common philosophy: understanding through first principles,
                mathematical clarity, and intellectual curiosity.
            </LeadText>

        </PageFrame>

    )

}

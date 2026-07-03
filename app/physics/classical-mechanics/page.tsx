import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import { MainTitle, SectionTitle, SubsectionTitle } from '@mcpab/web-blocks';
import { PageFrame } from '../../components/PageFrame';
import { LeadText } from '../../components/TextComponents';
import { BannerStatic } from '@mcpab/web-blocks';
import Typography from '@mui/material/Typography';

export default function ClassicalMechanics(): React.ReactElement {


    return (

        <PageFrame hero={
            <BannerStatic ImageComponent={NextImageAdapter} image={{
                src: '/img/galileo.jpg',
                objectPosition: '10% 1%',
                transform: '  scale(1.18)',
                priority: true,
                overlayColor: 'rgba(12, 11, 10, 0.52)',
                // filter: 'saturate(0.45) brightness(0.65) contrast(1.05)'
            }} size='md' >
                <MainTitle
                    title='Classical Mechanics'
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

            <Typography variant="caption">
                Hero image: Galileo&apos;s <em>Discorsi e Dimostrazioni Matematiche</em> (1638).
            </Typography>

            <LeadText>
                Classical Mechanics is the foundation upon which much of physics is built.
                Its apparent simplicity is somewhat deceptive: beneath familiar concepts such
                as motion and force lies a rich mathematical structure ranging from elementary
                kinematics to the variational principles of Lagrangian and Hamiltonian
                mechanics.
            </LeadText>

            <LeadText>
                Here we face a formidable task. The subject is vast, and no single collection
                of notes can hope to cover it completely. We shall therefore proceed in the
                spirit that guides this entire project: slowly, carefully, and always from
                first principles.
            </LeadText>

            <LeadText>
                Each step will be derived explicitly whenever possible, with the aim of
                understanding not only what the equations say, but why they must take the form
                they do.
            </LeadText>

            <LeadText>
                Our journey will begin with the kinematics of rigid body motion before moving
                on to systems of many particles and the deeper principles that govern their
                dynamics. This choice reflects, in part, the author&apos;s own desire to revisit
                and better understand topics that were often passed over too quickly during
                earlier years of study.
            </LeadText>

            <LeadText>
                Progress may be gradual, and many sections will evolve over time. Nevertheless,
                the goal remains constant: to build a coherent and rigorous understanding of
                classical mechanics, one derivation at a time.
            </LeadText>

            <LeadText>
                Here is the list of topics covered:
            </LeadText>

            <SubsectionTitle>
                Rigid Body Motion
            </SubsectionTitle>
        </PageFrame>

    )

}

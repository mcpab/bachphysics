import { EssayCollectionOverview } from '@/app/components/overview/EssayCollectionOverview';

export default function HamiltonianMechanics(): React.ReactElement {
    return (
        <EssayCollectionOverview
            title='Hamiltonian Mechanics'
            introduction='A future collection devoted to phase space, canonical equations, and the Hamiltonian formulation of classical mechanics.'
            showWorkInProgressNote
        />
    );
}

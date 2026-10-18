import { EssayCollectionOverview } from '@/app/components/overview/EssayCollectionOverview';

export default function LagrangianMechanics(): React.ReactElement {
    return (
        <EssayCollectionOverview
            title='Lagrangian Mechanics'
            introduction='A future collection devoted to variational principles and the Lagrangian formulation of classical mechanics.'
            showWorkInProgressNote
        />
    );
}

import { EssayCollectionOverview } from '@/app/components/overview/EssayCollectionOverview';

export default function GeneralRelativity(): React.ReactElement {
    return (
        <EssayCollectionOverview
            title="General Relativity"
            introduction="A future collection devoted to gravitation, spacetime geometry, and Einstein's field equations."
            showWorkInProgressNote
        />
    );
}

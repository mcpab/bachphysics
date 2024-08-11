import { renderLatex } from "./KatexPrismaExceptions";
import { handleError } from "./supportFunction";

export default async function Math({ math }: Readonly<{ math: string }>) {

    try {
        const rd = await renderLatex(math, false);

        return <span dangerouslySetInnerHTML={{ __html: rd }} />;

    } catch (error) {
        return <div>error in Math: {handleError(error)}</div>;
    }
}
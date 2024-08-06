import {renderLatex } from "./KatexPrisma";

export default async function Math({ math }: Readonly<{ math: string }>) {

    const rd = await renderLatex(math, false);

    return <span dangerouslySetInnerHTML={{ __html: rd }} />;


}
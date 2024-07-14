import Ktx from "./KatexEnv";

export default function Math({ math }: Readonly<{ math: string }>) {

    const rd = Ktx.render(math, false);

    return <span dangerouslySetInnerHTML={{ __html: rd }} />;


}
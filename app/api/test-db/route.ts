import { NextResponse } from 'next/server';

import { deleteAllPages, addEquation, getEquation } from '@/src/katex/KatexPrisma'

export async function GET(request: Request) {


    const { searchParams } = new URL(request.url);

    var pageName = searchParams.get('pageName');
    var latex = searchParams.get('latex');
    // var html = searchParams.get('html');
    var label = searchParams.get('label');
    var command = searchParams.get('command');

    if (pageName === null || latex === null || label === null) {
        return NextResponse.json("Invalid input", { status: 500 });
    }

    if (command === 'erase') {
        const rt = await deleteAllPages();
        return NextResponse.json({ return: rt }, { status: 200 });
    } else if (command === 'addEquation') {
        const rt = await addEquation(latex, label,pageName)
        return NextResponse.json({ return: rt }, { status: 200 });

    } else if (command === 'select') {

        const rt = await getEquation(label); 
        return NextResponse.json({ return: rt }, { status: 200 });
    }

    const rt = 'Command Not Defined'
    return NextResponse.json({ rt }, { status: 200 });

}

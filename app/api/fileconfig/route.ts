import { NextRequest, NextResponse } from 'next/server';
import { findConfigFiles, ResultData } from '@/utils/findConfigFiles'; // Adjust the path as needed
import path from 'path';

export async function GET(req: NextRequest) {

  const { searchParams } = new URL(req.url);

  const dir = searchParams.get('dir');
  const fileName = searchParams.get('fileName');



  if (!dir || !fileName) {
    return NextResponse.json({ error: 'Invalid query parameters. Please provide "dir" and "fileName".' ,search:searchParams}, { status: 400 });
  }

  const appDirectory = process.cwd()+ "/app/" + dir; // path.join(process.cwd(), 'app',dir); 

  try {
    const results: ResultData[] = findConfigFiles(appDirectory, fileName);
    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: `Server error: ${error.message}` }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Unknown server error' }, { status: 500 });
    }
  }
}
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const reqData = await req.json();
  return NextResponse.json(
    { message: 'The account was successfully created.' },
    { status: 201 },
  );
}

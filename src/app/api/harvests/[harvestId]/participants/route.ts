import { prisma } from '@/lib/prismaClient';
import { HarvestIdSchema, HarvestParticipantsSchema } from '@/lib/schemas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { harvestId: string } }
) {
  // Validate harvest id
  try {
    HarvestIdSchema.parse(params.harvestId);
  } catch {
    return NextResponse.json(
      { message: 'The provided Harvest ID is invalid' },
      { status: 400 }
    );
  }

  let harvestParticipants;

  try {
    harvestParticipants = await prisma.userHarvestParticipations.findMany({
      where: {
        harvestId: params.harvestId,
      },
      select: {
        userId: true,
        status: true,
      },
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: 'Error while getting data from database',
      },
      { status: 500 }
    );
  }

  return NextResponse.json(harvestParticipants, { status: 200 });
}

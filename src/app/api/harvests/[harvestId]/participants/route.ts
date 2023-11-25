import { nextAuthConfig } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prismaClient';
import { HarvestIdSchema, HarvestParticipantsSchema } from '@/lib/schemas';
import { randomUUID } from 'crypto';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

// TODO Will need an API for approving participants
//* Getting an array of the IDs and participation status of joined participants
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

//* Adding a user to the list of participants
export async function POST(
  req: NextRequest,
  { params }: { params: { harvestId: string } }
) {
  const session = await getServerSession(nextAuthConfig);

  if (!session) {
    return NextResponse.json(
      { message: 'You must be logged in' },
      { status: 401 }
    );
  }

  // Validating harvest ID
  try {
    HarvestIdSchema.parse(params.harvestId);
  } catch {
    return NextResponse.json(
      { message: 'Invalid harvest ID' },
      { status: 400 }
    );
  }

  // Checking if harvest exists
  let harvestData;
  try {
    harvestData = await prisma.harvest.findUniqueOrThrow({
      where: {
        id: params.harvestId,
      },
    });
  } catch {
    return NextResponse.json(
      { message: `Harvest with ID ${params.harvestId} not found` },
      { status: 404 }
    );
  }

  try {
    const { id: userId } = await prisma.user.findUniqueOrThrow({
      where: {
        email: session.user?.email || '',
      },
      select: {
        id: true,
      },
    });

    if (userId === harvestData.hostUserId) {
      throw new Error('You cannot join your own harvest');
    }

    if (harvestData.dateTime.toDateString() > new Date().toDateString()) {
      throw new Error('Cannot join a harvest that is already over');
    }

    // Add participation to database
    await prisma.userHarvestParticipations.create({
      data: {
        id: randomUUID(),
        harvestId: params.harvestId,
        userId: userId,
        status: 'PENDING',
      },
    });
  } catch (err) {
    return NextResponse.json({ message: `Error → ${err}` }, { status: 500 });
  }

  return NextResponse.json({ message: 'Participation added' }, { status: 200 });
}

//* Removing a user from the list of participants
export async function DELETE(
  req: NextRequest,
  { params }: { params: { harvestId: string } }
) {
  const session = await getServerSession(nextAuthConfig);

  if (!session) {
    return NextResponse.json(
      { message: 'You must be logged in' },
      { status: 401 }
    );
  }

  // Validating harvest ID
  try {
    HarvestIdSchema.parse(params.harvestId);
  } catch {
    return NextResponse.json(
      { message: 'Invalid harvest ID' },
      { status: 400 }
    );
  }

  // Checking if harvest exists
  let harvestData;
  try {
    harvestData = await prisma.harvest.findUniqueOrThrow({
      where: {
        id: params.harvestId,
      },
    });
  } catch {
    return NextResponse.json(
      { message: `Harvest with ID ${params.harvestId} not found` },
      { status: 404 }
    );
  }

  // Get user ID from database
  let userId;
  try {
    const { id } = await prisma.user.findUniqueOrThrow({
      where: {
        email: session.user?.email || '',
      },
      select: {
        id: true,
      },
    });

    userId = id;
  } catch {
    return NextResponse.json(
      { message: 'Error while getting user ID' },
      { status: 500 }
    );
  }

  // Remove participation from database
  try {
    let participationId;

    // Get ID of participation (check if user participates)
    try {
      const { id } = await prisma.userHarvestParticipations.findFirstOrThrow({
        where: {
          userId,
          harvestId: params.harvestId,
        },
      });
      participationId = id;
    } catch {
      return NextResponse.json(
        { message: 'You are not participating in this harvest' },
        { status: 500 }
      );
    }

    await prisma.userHarvestParticipations.delete({
      where: {
        id: participationId,
      },
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: 'Error while deleting participation',
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: 'Participation removed' },
    { status: 200 }
  );
}

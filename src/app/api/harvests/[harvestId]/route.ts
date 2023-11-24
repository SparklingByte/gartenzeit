import { prisma } from '@/lib/prismaClient';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { nextAuthConfig } from '../../auth/[...nextauth]/route';
import { z } from 'zod';
import { HarvestSchema } from '@/lib/schemas';

//* Responding with data of harvest
export async function GET(
  req: NextRequest,
  { params }: { params: { harvestId: string } }
) {
  const harvestData = await prisma.harvest.findUnique({
    where: {
      id: params.harvestId,
    },
  });

  if (!harvestData)
    return NextResponse.json({ message: 'Harvest not found' }, { status: 404 });

  return NextResponse.json(harvestData);
}

//* Editing the information of a harvest
export async function PUT(
  req: NextRequest,
  { params }: { params: { harvestId: string } }
) {
  const session = await getServerSession(nextAuthConfig);

  // Store sent data by client into variable to later update in database
  const updatedHarvest: z.infer<typeof HarvestSchema> = await req.json();

  // Check if provided data is valid
  try {
    HarvestSchema.parse(updatedHarvest);
  } catch {
    return NextResponse.json(
      { message: 'Invalid data provided' },
      { status: 400 }
    );
  }

  if (!session || !session.user?.email) {
    return NextResponse.json(
      { message: 'You have to be logged in to use this API' },
      { status: 403 }
    );
  }

  let harvest;

  try {
    harvest = await prisma.harvest.findUnique({
      where: {
        id: params.harvestId,
      },
    });
  } catch {
    return NextResponse.json(
      {
        message: 'Error while getting harvest from database',
      },
      { status: 401 }
    );
  }

  // Change id of harvest back to original one in case it was changed (not desired)
  if (updatedHarvest.id !== params.harvestId) {
    updatedHarvest.id = params.harvestId;
  }

  // Get logged in user to check if the user is the owner
  const loggedInUser = await prisma.user.findUnique({
    where: {
      email: session.user?.email,
    },
  });

  if (loggedInUser?.id !== harvest?.hostUserId) {
    return NextResponse.json(
      { message: 'You are not permitted to edit this harvest' },
      { status: 403 }
    );
  }

  // Update data of harvest in database
  await prisma.harvest.update({
    where: {
      id: params.harvestId,
    },
    data: {
      ...updatedHarvest,
    },
  });

  return NextResponse.json(
    { message: 'The harvest was successfully edited' },
    { status: 204 }
  );
}

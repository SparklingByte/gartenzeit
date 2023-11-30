import { z } from 'zod';
import { prisma } from '@/lib/prismaClient';
import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { HarvestCreationSchema, HarvestSchema } from '@/lib/schemas';
import { getServerSession } from 'next-auth';
import { nextAuthConfig } from '../auth/[...nextauth]/route';

//* Get all harvests
// TODO Needs performance optimization as it returns ALL harvests of database
export async function GET() {
  const harvests = await prisma.harvest.findMany();
  return Response.json(harvests);
}

//* Creating a new harvest
export async function POST(req: NextRequest) {
  const session = await getServerSession(nextAuthConfig);

  if (!session || !session.user?.email) {
    return NextResponse.json(
      { message: 'Must be logged in to create a harvest' },
      { status: 401 }
    );
  }
  let userId;

  try {
    const { id } = await prisma.user.findUniqueOrThrow({
      where: {
        email: session.user.email,
      },
      select: {
        id: true,
      },
    });
    userId = id;
  } catch {
    return NextResponse.json(
      { message: 'Error while getting user information' },
      { status: 500 }
    );
  }

  const harvestDataFromClient: z.infer<typeof HarvestCreationSchema> =
    await req.json();

  // Change datTime string to Date
  harvestDataFromClient.dateTime = new Date(harvestDataFromClient.dateTime);

  // Validate provided data
  try {
    HarvestCreationSchema.parse(harvestDataFromClient);
  } catch (err) {
    return NextResponse.json(
      {
        message:
          'Invalid data provided to API ' + harvestDataFromClient.dateTime,
      },
      { status: 400 }
    );
  }

  const completeHarvestData: z.infer<typeof HarvestSchema> = {
    ...harvestDataFromClient,
    id: randomUUID(),
    hostUserId: userId,
  };

  // Store harvest into database
  try {
    await prisma.harvest.create({
      data: {
        ...completeHarvestData,
      },
    });
  } catch {
    return NextResponse.json(
      { message: 'Error while writing data to database' },
      { status: 400 }
    );
  }

  // If created successfully, send response to client
  return NextResponse.json(
    {
      message: 'The harvest was successfully created',
      harvestId: completeHarvestData.id,
    },
    { status: 201 }
  );
}

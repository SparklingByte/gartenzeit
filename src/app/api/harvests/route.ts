import { prisma } from '@/lib/prismaClient';
import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { HarvestSchema } from '@/lib/schemas';
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

  const harvestData = await req.json();

  // Validate provided data
  try {
    HarvestSchema.parse(harvestData);
  } catch {
    return NextResponse.json(
      { message: 'Invalid data provided to API' },
      { status: 400 }
    );
  }

  // Check if harvest ID already exists to replace
  // with new random UUID in case
  const existingHarvestWithId = await prisma.harvest.findUnique({
    where: {
      id: harvestData.id,
    },
  });

  if (existingHarvestWithId) {
    harvestData.id = randomUUID();
  }

  // Store harvest into database
  try {
    await prisma.harvest.create({
      data: {
        ...harvestData,
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
      harvestId: harvestData.id,
    },
    { status: 201 }
  );
}

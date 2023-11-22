import { prisma } from '@/lib/prismaClient';
import { NextRequest, NextResponse } from 'next/server';
import { Harvest } from '@prisma/client';
import { randomUUID } from 'crypto';
import { HarvestSchema } from '@/lib/schemas';

export async function GET() {
  const harvests = await prisma.harvest.findMany();
  return Response.json(harvests);
}

export async function POST(req: NextRequest) {
  // Get data for new harvest from front end
  let harvestData: Harvest;

  try {
    harvestData = await req.json();
  } catch {
    return NextResponse.json(
      { message: 'Invalid JSON provided to API' },
      { status: 400 }
    );
  }

  // Validate incoming request data
  try {
    HarvestSchema.parse(harvestData);
  } catch {
    return NextResponse.json(
      { message: 'Invalid provided data to API' },
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
    { message: 'The harvest was created' },
    { status: 201 }
  );
}

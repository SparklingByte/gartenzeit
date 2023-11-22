import { prisma } from '@/lib/prismaClient';
import { NextRequest, NextResponse } from 'next/server';
import { Harvest } from '@prisma/client';
import { z } from 'zod';
import { randomUUID } from 'crypto';
import { HarvestCreateInputObjectSchema } from '../../../../prisma/generated/schemas';

export async function GET() {
  const harvests = await prisma.harvest.findMany();
  return Response.json(harvests);
}

export async function POST(req: NextRequest) {
  // Get data for new harvest from front end
  const harvestData: Harvest = await req.json();

  harvestData.id = randomUUID();

  const parsedData = HarvestCreateInputObjectSchema.safeParse(harvestData);
  if (!parsedData.success) {
    console.log(parsedData.error.format());
  }

  //   prisma.harvest.create({
  //     data: {
  //       ...harvestData,
  //     },
  //   });

  return NextResponse.json({ message: 'Moin' }, { status: 301 });
}

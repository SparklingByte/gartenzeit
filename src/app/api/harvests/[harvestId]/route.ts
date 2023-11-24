import { prisma } from '@/lib/prismaClient';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { nextAuthConfig } from '../../auth/[...nextauth]/route';
import { z } from 'zod';
import { HarvestSchema } from '@/lib/schemas';

export async function GET({ params }: { params: { harvestId: string } }) {
  const harvestData = await prisma.harvest.findUnique({
    where: {
      id: params.harvestId,
    },
  });

  if (!harvestData)
    return NextResponse.json({ message: 'Harvest not found' }, { status: 404 });

  return NextResponse.json(harvestData);
}

export async function PUT(
  req: NextApiRequest,
  res: NextApiResponse,
  { params }: { params: { harvestId: string } }
) {
  const session = await getServerSession(req, res, nextAuthConfig);

    // const updatedHarvest: z.infer<typeof HarvestSchema> = req.body.

  if (!session || !session.user?.email) {
    res.json({ message: 'You have to log in.' });
    res.status(401);
    return;
  }

  try {
    const harvest = await prisma.harvest.findUnique({
      where: {
        id: params.harvestId,
      },
    });
  } catch {
    res.json({ message: 'Error while getting harvest from database' });
    res.status(401);
    return;
  }

  const loggedInUser = await prisma.user.findUnique({
    where: {
      email: session.user?.email,
    },
  });
}

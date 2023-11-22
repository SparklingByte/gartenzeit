import { prisma } from '@/lib/prismaClient';
import { NextResponse } from 'next/server';

export async function GET(request: Request, {params} : {params: { harvestId: string}}) {
    const harvestData = await prisma.harvest.findUnique({
        where: {
            id: params.harvestId
        }
    })

    if (!harvestData) return NextResponse.json({message: 'Harvest not found'})
    
    return NextResponse.json(harvestData);
}
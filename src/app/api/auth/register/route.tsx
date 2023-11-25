import { prisma } from '@/lib/prismaClient';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { UserRegistrationDataSchema } from '@/lib/schemas';
import { randomUUID } from 'crypto';

export async function POST(req: NextRequest) {
  const submittedUserData: z.infer<typeof UserRegistrationDataSchema> =
    await req.json();

  // Validate submitted data
  try {
    UserRegistrationDataSchema.parse(submittedUserData);
  } catch {
    return NextResponse.json(
      { user: null, message: 'Invalid data provided to API' },
      { status: 400 }
    );
  }

  const existingEmailaddress = await prisma.user.findUnique({
    where: {
      email: submittedUserData.email,
    },
  });

  if (existingEmailaddress) {
    return NextResponse.json({
      user: null,
      message: 'This email is already in use.',
    });
  }

  const existingUsername = await prisma.user.findUnique({
    where: {
      username: submittedUserData.username,
    },
  });

  if (existingUsername) {
    return NextResponse.json({
      user: null,
      message: 'This username is already in use.',
    });
  }

  // Hash password and store user data into data base and repond with user data
  const hashedPassword = await bcrypt.hash(submittedUserData.password, 10);
  await prisma.user.create({
    data: {
      id: randomUUID(),
      username: submittedUserData.username,
      email: submittedUserData.email,
      location: submittedUserData.location,
      encrypted_password: hashedPassword,
    },
  });

  const responseUserObject = {
    username: submittedUserData.username,
    email: submittedUserData.email,
  };

  console.log('[🌿 GARTENZEIT] New user signed up');
  return NextResponse.json({
    responseUserObject,
    message: 'User successfully created',
  });
}

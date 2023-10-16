import { prisma } from '@/lib/prismaClient';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import bcrypt from 'bcrypt';

export const userDataSchema = z
  .object({
    email: z.string().email('Invalid email provided'),
    username: z
      .string()
      .min(3, 'The username needs at least 3 characters')
      .max(10, 'The username can have a maximum of 10 characters.'),
    password: z.string().min(8, 'The passwords needs at least 8 characters'),
    passwordConfirmation: z
      .string()
      .min(8, 'The passwords needs at least 8 characters'),
  })
  .refine((data) => {
    return data.password === data.passwordConfirmation;
  }, 'The passwords do not match');

export async function POST(req: NextRequest) {
  const userData = await req.json();
  const parsedUserData = userDataSchema.safeParse(userData);

  if (parsedUserData.success === false) {
    const validationErrors = parsedUserData.error.errors;
    return NextResponse.json({ user: null, message: validationErrors });
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      username: parsedUserData.data.username,
    },
  });

  if (existingUser) {
    return NextResponse.json({
      user: null,
      message: `The username ${parsedUserData.data.username} is already taken`,
    });
  }

  const existingEmail = await prisma.user.findUnique({
    where: {
      email: parsedUserData.data.email,
    },
  });

  if (existingEmail) {
    return NextResponse.json({
      user: null,
      message: `There is already an account that uses the email ${parsedUserData.data.email}`,
    });
  }

  // Hash password and store user data into data base and repond with user data
  const hashedPassword = await bcrypt.hash(parsedUserData.data.password, 10);
  await prisma.user.create({
    data: {
      username: parsedUserData.data.username,
      email: parsedUserData.data.email,
      encrypted_password: hashedPassword,
    },
  });

  const user = {
    username: parsedUserData.data.username,
    email: parsedUserData.data.email,
  };
  console.log('[GARTENZEIT] New user signed up');
  return NextResponse.json({ user, message: 'User successfully created' });
}

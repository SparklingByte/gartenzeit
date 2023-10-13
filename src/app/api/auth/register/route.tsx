import { prisma } from '@/lib/prismaClient';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  const userData = await req.json();

  const userDataSchema = z.object({
    email: z.string().email(),
    username: z.string(),
    password: z.string().min(8, {
      message: 'Your password has to be at least 8 characters long',
    }),
    confirmPassword: z.string(),
  });

  const parsedUserData = userDataSchema.parse(userData);

  if (parsedUserData.password !== parsedUserData.confirmPassword) {
    return NextResponse.json({
      user: null,
      message: 'The passwords have to match.',
    });
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      username: userData.username,
    },
  });

  if (existingUser) {
    return NextResponse.json({
      user: null,
      message: 'The username is already taken :(',
    });
  }

  const existingEmail = await prisma.user.findUnique({
    where: {
      email: parsedUserData.email,
    },
  });

  if (existingEmail) {
    return NextResponse.json({
      user: null,
      message: 'There is already an account that uses this email.',
    });
  }

  // Hash password and store user data into data base and repond with user data
  bcrypt.hash(userData.password, 10, (err, hashedPassword) => {
    if (err) {
      return NextResponse.json({
        user: null,
        message: 'Error while creating user profile',
      });
    }

    prisma.user.create({
      data: {
        username: parsedUserData.username,
        email: parsedUserData.email,
        encrypted_password: hashedPassword,
      },
    });

    const user = {
      username: parsedUserData.username,
      email: parsedUserData.email,
    };

    return NextResponse.json({ user, message: 'User has been created.' });
  });
}

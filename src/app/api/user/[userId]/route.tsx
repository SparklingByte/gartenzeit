import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prismaClient';
import {
  PublicUserDataSchema,
  UserDescription,
  UserEmail,
} from '@/lib/schemas';
import { getServerSession } from 'next-auth';
import { z } from 'zod';

type UserIdParams = {
  params: {
    userId: string;
  };
};

async function getUserByEmail(userEmail: string) {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email: userEmail,
      },
    });

    return user;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest, { params }: UserIdParams) {
  const { userId } = params;

  let user;
  try {
    user = await prisma.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
    });
  } catch {
    return Response.json(
      { user: null, message: 'User not found' },
      { status: 404 }
    );
  }

  const filteredUserData: z.infer<typeof PublicUserDataSchema> = {
    username: user.username,
    description: user.description || undefined,
    image: user.image || undefined,
    location: user.location || undefined,
  };

  return Response.json(
    { user: filteredUserData, message: 'User sucessfully fetched.' },
    { status: 200 }
  );
}

async function changeEmail(userId: string, newEmail: string) {
  const parsedEmail = UserEmail.safeParse(newEmail);

  // Parse new Email
  if (parsedEmail.success === false) {
    throw new Error('Invalid email');
  }

  // Check if email is already in use
  const userWithEmail = await prisma.user.findUnique({
    where: {
      email: newEmail,
    },
  });

  if (userWithEmail) {
    throw new Error('Email already in use');
  }

  // Save new email to database
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      email: newEmail,
    },
  });

  return true;
}

async function updateDescription(userId: string, newDescription: string) {
  const parsedDescription = UserDescription.safeParse(newDescription);

  if (parsedDescription.success === false) {
    throw new Error('Invalid description');
  }

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        description: newDescription,
      },
    });
  } catch {
    throw new Error('Error while updating description');
  }
}

export async function PATCH(req: NextRequest, { params }: UserIdParams) {
  const { userId } = params;
  const session = await getServerSession();
  const reqBody = await req.json();
  const { newEmail, newDescription } = reqBody;

  if (!session) {
    return Response.json(
      {
        message: 'User not authenticated',
      },
      { status: 401 }
    );
  }

  const user = await getUserByEmail(session.user?.email || '');

  if (!user) {
    return Response.json({ message: 'User not found' }, { status: 404 });
  }

  // Check if logged in user is the same as the user being updated
  if (user.id !== userId) {
    return Response.json(
      {
        message: 'User not authorized',
      },
      { status: 401 }
    );
  }

  // If request body contains newEmail, try to update the email
  if (newEmail) {
    try {
      await changeEmail(user.id, newEmail);
    } catch (err) {
      return Response.json({ message: err }, { status: 500 });
    }

    return Response.json(
      { message: 'Email successfully changed.' },
      { status: 200 }
    );
  }

  // If request body contains newDescription, try to update the description
  if (newDescription) {
    try {
      await updateDescription(user.id, newDescription);
    } catch (err) {
      return Response.json({ message: err }, { status: 500 });
    }

    return Response.json(
      { message: 'The description was successfully updated.' },
      { status: 200 }
    );
  }

  // If no valid request body is provided, return error
  return Response.json(
    { message: 'No valid request body provided to update user data' },
    { status: 400 }
  );
}

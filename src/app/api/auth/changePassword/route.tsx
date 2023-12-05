import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prismaClient';
import { UserPassword } from '@/lib/schemas';
import bcrypt from 'bcrypt';
import chalk from 'chalk';
import { z } from 'zod';
import { getServerSession } from 'next-auth';

type UserIdParams = {
  params: {
    userId: string;
  };
};

async function getUser(userEmail: string) {
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

async function changePassword(
  userEmail: string,
  oldPassword: z.infer<typeof UserPassword>,
  newPassword: z.infer<typeof UserPassword>
) {
  const user = await getUser(userEmail);
  if (!user) {
    return Response.json(
      {
        message: 'User not found',
      },
      { status: 404 }
    );
  }

  // Check if old password is correct
  const oldPasswordIsValid = await bcrypt.compare(
    oldPassword,
    user.encrypted_password || ''
  );

  if (oldPasswordIsValid === false) {
    return Response.json(
      { message: 'Provided old password is incorrect' },
      { status: 400 }
    );
  }

  // Parse new user password
  const parsedPassword = UserPassword.safeParse(newPassword);

  if (parsedPassword.success === false) {
    return Response.json(
      { message: 'Provided new password failed validation' },
      { status: 400 }
    );
  }

  // Encrypt new password
  const newEncryptedPassword = await bcrypt.hash(newPassword, 10);

  // Store new encrypted password into database
  try {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        encrypted_password: newEncryptedPassword,
      },
    });
  } catch (err) {
    console.log(chalk.bgRed(err));
    return Response.json(
      { message: 'Error while updating the password' },
      { status: 500 }
    );
  }

  return Response.json(
    { message: 'Password successfully updated' },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  const requestBody = await req.json();
  const { oldPassword, newPassword } = requestBody;

  const session = await getServerSession();

  if (!session) {
    return Response.json(
      { message: 'User not authenticated' },
      { status: 401 }
    );
  }

  // Change password -> returns a response
  const res = await changePassword(
    session?.user?.email || '',
    oldPassword,
    newPassword
  );

  return res;
}

import { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { supabase } from '@/lib/supabaseClient';
import { prisma } from '@/lib/prismaClient';
import chalk from 'chalk';

async function getLoggedInUser() {
  const session = await getServerSession();

  if (!session || !session.user || !session.user.email) {
    return null;
  }

  let user;

  try {
    user = await prisma.user.findUniqueOrThrow({
      where: {
        email: session.user.email,
      },
    });

    return user;
  } catch {
    return null;
  }
}

async function uploadImage(file: File, userId: string) {
  const { data, error } = await supabase.storage
    .from('user_avatars')
    .upload(userId + new Date().toISOString(), file);

  if (error) {
    throw error;
  }
  return data;
}

async function deleteImage(path: string) {
  const { data, error } = await supabase.storage
    .from('user_avatars')
    .remove([path]);

  if (error) {
    throw error;
  }

  return data;
}

function validateImageFile(file: File) {
  const MAX_IMAGE_SIZE = 5000000;
  const ALLOWED_IMAGE_FORMATS = ['image/jpeg', 'image/jpg', 'image/png'];

  if (file.size > MAX_IMAGE_SIZE) {
    throw new Error('Image File size must not exceed 5MB');
  }

  if (ALLOWED_IMAGE_FORMATS.indexOf(file.type) === -1) {
    throw new Error(
      'The allowed image file formats are: ' + ALLOWED_IMAGE_FORMATS
    );
  }

  return true;
}

export async function POST(req: NextRequest) {
  const user = await getLoggedInUser();

  if (!user) {
    return Response.json({ message: 'You are not logged in' }, { status: 401 });
  }

  // Get image file from request body
  const reqBody = await req.formData();
  const image: File = reqBody.get('image') as File;

  // Validate image file
  try {
    validateImageFile(image);
  } catch (err) {
    return Response.json({ message: err }, { status: 400 });
  }

  // Connect to storage bucket and store image
  let imagePath: string;
  try {
    const data = await uploadImage(image, user.id);
    imagePath = data.path;
  } catch (err) {
    console.log(err);
    return Response.json(
      {
        message:
          'An error happended on our side while saving your profile image.',
      },
      { status: 500 }
    );
  }

  // Get path from old user image to delete after adding new image
  const oldPath = user.image;

  // Store new image path into user in database
  await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      image: imagePath,
    },
  });

  // Delete old (previous) image from bucket if one exists
  if (oldPath) {
    try {
      await deleteImage(oldPath);
    } catch (err) {
      console.log(chalk.bgRed(err));
    }
  }

  // Send response to client if success or not
  return Response.json(
    { message: 'Your profile image was successfully saved.' },
    { status: 200 }
  );
}

export async function DELETE() {
  const user = await getLoggedInUser();

  if (!user) {
    return Response.json({ message: 'You are not logged in' }, { status: 401 });
  }

  if (user.image) {
    try {
      // Set image in user database to null
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          image: null,
        },
      });

      // Delete image from storage bucket
      await deleteImage(user.image);
    } catch (err) {
      return Response.json(
        { message: 'Error while removing your profile image.' },
        { status: 500 }
      );
    }
  }

  // If user has no image return error
  return Response.json(
    { message: 'You have no image to remove.' },
    { status: 404 }
  );
}

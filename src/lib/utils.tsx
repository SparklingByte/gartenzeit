import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

async function redirectLoggedInUser(route: string) {
  if (!route) return;

  const userSession = await getServerSession();

  if (userSession) {
    redirect(route);
  }
}

export { redirectLoggedInUser };

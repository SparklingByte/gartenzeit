import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prismaClient';
import bcrypt from 'bcrypt';

async function checkCredentials(
  providedEmail: string | undefined,
  providedPassword: string | undefined
) {
  if (!providedEmail || !providedPassword) return null;

  // Try to get user from database
  const user = await prisma.user.findUnique({
    where: {
      email: providedEmail,
    },
  });

  if (!user) {
    return null;
  }

  // Check if the provided password from the user matches the password in database
  const passwordsMatch = await bcrypt.compare(
    providedPassword,
    user.encrypted_password || ''
  );

  if (passwordsMatch) {
    return {
      id: user?.id,
      username: user.username,
      email: user.email,
    };
  }
  return null;
}

export const nextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: 'Username and Password',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Frank283' },
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Susi123@mail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await checkCredentials(
          credentials?.email,
          credentials?.password
        );
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(nextAuthConfig);

export { handler as GET, handler as POST };

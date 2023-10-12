import NextAuth from "next-auth"
import { PrismaClient } from ".prisma/client";
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from '../../../../lib/prismaClient';

async function checkCredentials(providedEmail: string | undefined, providedPassword: string | undefined) {
  if (!providedEmail || !providedPassword) return null;

  const user = await prisma.user.findUnique({
    where: {
      email: providedEmail,
    },
  });

  if (user?.encrypted_password === providedPassword) {
    return {
      id: user?.id,
      username: user.username, 
      email: user.email,
    }
  }
  return null;
}

const nextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: 'Username and Password',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Frank283' },
        email: { label: 'Email', type: 'email', placeholder: 'Susi123@mail.com' },
        password: { label: 'Password', type: 'password' },
      },
      // TODO Implement logic for checking user in database
      async authorize(credentials, req) {
        const user = await checkCredentials(credentials?.email, credentials?.password);
        return user;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  }
}

const handler = NextAuth(nextAuthConfig);

export { handler as GET, handler as POST }
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: 'Username and Password',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Susi123@mail.com' },
        password: { label: 'Password', type: 'password' },
        username: { label: 'Username', type: 'text', placeholder: 'Frank283' },
      },
      // TODO Implement logic for checking user in database
      async authorize(credentials, req) {
        const mockUser = { id: '1', name: 'Jonny', email: 'hello@mail.com' }
        return mockUser;
      }
    })
  ],
  secret: process.env.NEXT_AUTH_SECRET,
}



const handler = NextAuth(nextAuthConfig);

export { handler as GET, handler as POST }
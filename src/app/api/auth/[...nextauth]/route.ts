import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: 'Username and Password',
      credentials: {
        username: {label: 'Username', type: 'text', placeholder: 'Susi123'},
        password: {label: 'Password', type: 'password'},
      },
      // TODO Implement logic for checking user in database
      async authorize(credentials, req) {
        const mockUser = {id: '1', name: 'Jonny', email: 'hello@mail.com'}
        return mockUser;
      }
    })
  ]
}



const handler = NextAuth(nextAuthConfig);

export { handler as GET, handler as POST }
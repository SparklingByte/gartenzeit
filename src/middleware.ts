import { withAuth } from 'next-auth/middleware';

export default withAuth;

export const config = {
  matcher: ['/me/:path*', '/', '/harvest/:path*', '/discover'],
};

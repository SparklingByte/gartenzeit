/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fvmubtpjuonfgmaspyzn.supabase.co',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
};

module.exports = nextConfig;

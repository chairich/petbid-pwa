const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'petbid-pwa.vercel.app', // หรือ *.vercel.app ก็ได้
          },
        ],
        destination: 'https://www.petbidthai.com/:path*',
        permanent: true,
      },
    ];
  },
});

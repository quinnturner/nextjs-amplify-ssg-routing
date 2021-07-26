/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  future: {
    webpack5: false,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

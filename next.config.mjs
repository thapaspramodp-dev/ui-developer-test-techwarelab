/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/ui-developer-test-techwarelab' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

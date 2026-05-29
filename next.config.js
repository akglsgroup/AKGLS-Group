/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Ignore build errors if we have minor type mismatch during migration
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore lint errors during migration build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

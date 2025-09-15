import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'react-icons'],
  },
};

export default bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(
  nextConfig,
);

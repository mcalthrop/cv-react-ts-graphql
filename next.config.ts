import bundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
    incomingRequests: true,
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'react-icons'],
  },
};

export default bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(
  nextConfig,
);

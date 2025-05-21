import { NextConfig } from 'next';
import withPWA from 'next-pwa';

const pwaConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

const config: NextConfig = {
  reactStrictMode: true,
};

export default pwaConfig(config as any);
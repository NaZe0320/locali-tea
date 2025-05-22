/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    // CSS 최적화 설정
    experimental: {
      optimizeCss: false, // CSS 최적화 비활성화로 빌드 오류 방지
    },
    
    // 이미지 최적화 설정
    images: {
      domains: ['localhost'],
      unoptimized: true, // 개발 단계에서는 이미지 최적화 비활성화
    },
    
    // 메타데이터 기본 URL 설정
    env: {
      NEXT_PUBLIC_BASE_URL: process.env.NODE_ENV === 'production' 
        ? 'https://locali-tea.vercel.app' 
        : 'http://localhost:3000'
    },
    
    // PWA 관련 헤더 설정
    async headers() {
      return [
        {
          source: '/manifest.json',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
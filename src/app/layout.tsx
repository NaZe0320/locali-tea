import '../styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locali-Tea: 차 테마 관광 정보 플랫폼',
  description: '전통 차 문화를 뉴트로 트렌드로 재해석한 지역 차 관광 정보 플랫폼',
  manifest: '/manifest.json',
  themeColor: '#68A66F',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="bg-gray-50 text-dark-800 antialiased">
        {children}
      </body>
    </html>
  );
}
// src/app/tea-bti/layout.tsx
export const metadata = {
    title: '차BTI - 나의 차 성향 테스트 | Locali-Tea',
    description: '12가지 질문으로 알아보는 나와 어울리는 차와 여행지. 전통 차 문화를 현대적으로 재해석한 성향 테스트.',
    openGraph: {
      title: '차BTI - 나의 차 성향 테스트',
      description: '나와 어울리는 차는 무엇일까? 차BTI로 알아보세요!',
      images: ['/images/og-teabti.png'],
    },
  };
  
  export default function TeaBtiLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return children;
  }
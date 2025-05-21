'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ResponsiveLayout from '../components/layouts/ResponsiveLayout';
import Button from '../components/ui/Button';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // 모바일 장치 감지 함수
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // 초기 로드 시 장치 확인
    checkIfMobile();
    
    // 화면 크기 변경 시 장치 타입 재확인
    window.addEventListener('resize', checkIfMobile);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <ResponsiveLayout
      header={
        <div className="py-4">
          <h1 className="text-xl font-bold text-primary">Locali-Tea</h1>
        </div>
      }
    >
      <div className="py-4">
        <h2 className="text-heading-2 mb-4">로컬리티: 차 관광 플랫폼</h2>
        <p className="text-gray-600 mb-6">
          전통 차 문화를 뉴트로 트렌드로 재해석한 MZ세대를 위한 지역 차 관광 정보 플랫폼입니다.
        </p>
        
        {/* 장치 유형에 따라 적절한 메시지만 표시 */}
        {isMobile ? (
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
            <p className="text-sm text-gray-700">
              현재 모바일 버전으로 보고 계십니다. PWA 기능이 활성화되어 있어 앱처럼 설치하실 수 있습니다.
            </p>
          </div>
        ) : (
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
            <p className="text-sm text-gray-700">
              현재 데스크탑 버전으로 보고 계십니다. 반응형 디자인이 적용되어 모든 화면 크기에 최적화되어 있습니다.
            </p>
          </div>
        )}
        
        {/* 페이지 이동 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/design-system" className="w-full sm:w-auto">
            <Button variant="primary" fullWidth>
              디자인 시스템 보기
            </Button>
          </Link>
          
          <Link href="/main" className="w-full sm:w-auto">
            <Button variant="secondary" fullWidth>
              메인 페이지로 이동
            </Button>
          </Link>
        </div>
      </div>
    </ResponsiveLayout>
  );
}
'use client';

import React from 'react';
import BottomNavigation from '../../components/shared/BottomNavigation';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* 메인 콘텐츠 영역 - 스크롤 가능 */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      
      {/* 하단 네비게이션 - 고정 위치 */}
      <div className="flex-shrink-0">
        <BottomNavigation />
      </div>
    </div>
  );
} 
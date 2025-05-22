'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ResponsiveLayout from '../components/layouts/ResponsiveLayout';

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
      <div className="py-4 px-4 sm:px-0">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">로컬리티: 차 관광 플랫폼</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          전통 차 문화를 뉴트로 트렌드로 재해석한 MZ세대를 위한 지역 차 관광 정보 플랫폼입니다.
        </p>
        
        {/* 장치 유형에 따라 적절한 메시지만 표시 */}
        {isMobile ? (
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="flex items-start space-x-3">
              <div>
                <h3 className="font-medium text-gray-900 mb-1">모바일 최적화</h3>
                <p className="text-sm text-gray-700">
                  현재 모바일 버전으로 보고 계십니다. PWA 기능이 활성화되어 있어 앱처럼 설치하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="flex items-start space-x-3">
              <div>
                <h3 className="font-medium text-gray-900 mb-1">데스크탑 버전</h3>
                <p className="text-sm text-gray-700">
                  현재 데스크탑 버전으로 보고 계십니다. 반응형 디자인이 적용되어 모든 화면 크기에 최적화되어 있습니다.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* 기능 소개 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
            <div className="flex items-center mb-3">
              <h3 className="font-bold text-gray-800">차 관광지 정보</h3>
            </div>
            <p className="text-sm text-gray-600">
              전국의 차 관련 관광지와 체험 프로그램 정보를 한눈에 확인하세요.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-100">

            <p className="text-sm text-gray-600">
              당신의 취향에 맞는 차와 여행 코스를 AI가 추천해드립니다.
            </p>
          </div>
        </div>
        
        {/* 페이지 이동 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/design-system" className="w-full sm:w-auto">
            <button className="w-full bg-brand-primary hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm">
              디자인 시스템 보기
            </button>
          </Link>
          
          <Link href="/main" className="w-full sm:w-auto">
            <button className="w-full bg-brand-secondary hover:bg-red-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm">
              메인 페이지로 이동
            </button>
          </Link>
        </div>
        
        {/* 추가 정보 섹션 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">주요 기능</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-lg">🍵</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">차 정보</h4>
                <p className="text-sm text-gray-600">다양한 차의 효능과 특징</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 text-lg">🗺️</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">지역별 정보</h4>
                <p className="text-sm text-gray-600">전국 차 관광지 위치</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 text-lg">🎯</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">맞춤 추천</h4>
                <p className="text-sm text-gray-600">개인 취향 기반 추천</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  );
}
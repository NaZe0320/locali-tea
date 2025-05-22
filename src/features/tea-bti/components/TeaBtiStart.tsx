// src/features/tea-bti/components/TeaBtiStart.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useTeaBtiStore } from '../store/teaBitStore';

const TeaBtiStart: React.FC = () => {
  const router = useRouter();
  const { initializeTest, loading } = useTeaBtiStore();

  const handleStartTest = async () => {
    try {
      await initializeTest();
      router.push('/tea-bti/test');
    } catch (error) {
      console.error('테스트 시작 실패:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-main flex flex-col">
      {/* 헤더 */}
      <header className="flex items-center justify-between p-4">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-bold text-gray-800">차BTI</h1>
        <div className="w-10 h-10" /> {/* 빈 공간으로 중앙 정렬 */}
      </header>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        {/* 차 아이콘 */}
        <div className="mb-8">
          <div 
            className="w-32 h-32 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #e8f5e9 0%, #ffebee 50%, #fff8e1 100%)'
            }}
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg 
                className="w-12 h-12 text-brand-primary" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M18.5 3H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12.5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM18.5 19H6V5h12.5v14z"/>
                <path d="M8 7h8v2H8z"/>
                <path d="M8 11h8v2H8z"/>
                <path d="M8 15h5v2H8z"/>
              </svg>
              <div className="absolute">
                <svg 
                  className="w-8 h-8 text-brand-secondary -mt-2 ml-4" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M2 17h20v2H2v-2zm1.15-4.05L4 11l.85 1.95L6.8 13l-1.95.85L4 15.8l-.85-1.95L1.2 13l1.95-.85zm6.7-6.7L11 5l.85 1.95L13.8 7l-1.95.85L11 9.8l-.85-1.95L8.2 7l1.95-.85zm6.7 6.7L17 11l.85 1.95L19.8 13l-1.95.85L17 15.8l-.85-1.95L14.2 13l1.95-.85z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 타이틀 */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">나의 차 성향 테스트</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            12가지 질문으로 알아보는<br />
            나와 어울리는 차와 여행지
          </p>
        </div>

        {/* 정보 섹션 */}
        <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-white/20">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">차BTI로 알 수 있는 것</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-tea-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-tea-green-700 text-xs">✓</span>
              </div>
              <span className="text-sm text-gray-700">나와 잘 맞는 유형</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-tea-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-tea-red-700 text-xs">✓</span>
              </div>
              <span className="text-sm text-gray-700">나와 어울리는 차 종류와 맛</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-tea-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-tea-purple-700 text-xs">✓</span>
              </div>
              <span className="text-sm text-gray-700">성향에 맞는 추천 관광지</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-tea-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-tea-yellow-700 text-xs">✓</span>
              </div>
              <span className="text-sm text-gray-700">맞춤형 차 여행 코스</span>
            </div>
          </div>
        </div>

        {/* 시작 버튼 */}
        <button
          onClick={handleStartTest}
          disabled={loading}
          className="w-full max-w-sm bg-brand-primary hover:bg-brand-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              <span>준비 중...</span>
            </div>
          ) : (
            '차BTI 시작하기'
          )}
        </button>

        {/* 안내 문구 */}
        <p className="text-center text-gray-500 text-xs mt-4 leading-relaxed">
          약 3분 정도 소요됩니다.<br />
          정확한 결과를 위해 솔직하게 답변해 주세요.
        </p>
      </div>
    </div>
  );
};

export default TeaBtiStart;
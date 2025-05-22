// src/features/tea-bti/components/TeaBtiResult.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useTeaBtiStore } from '../store/teaBitStore';

const TeaBtiResult: React.FC = () => {
  const router = useRouter();
  const { session, shareResult, resetTest } = useTeaBtiStore();

  // 결과가 없는 경우 시작 화면으로 리다이렉트
  React.useEffect(() => {
    if (!session?.result) {
      router.replace('/tea-bti');
    }
  }, [session, router]);

  if (!session?.result) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">결과를 불러오고 있습니다...</p>
        </div>
      </div>
    );
  }

  const result = session.result;

  const handleShare = (platform: 'instagram' | 'twitter' | 'facebook' | 'kakao') => {
    shareResult(platform);
  };

  const handleRetakeTest = () => {
    resetTest();
    router.push('/tea-bti');
  };

  const handleViewCourse = () => {
    // 추천 여행 코스 페이지로 이동
    router.push('/courses?teaType=' + result.mainType.id);
  };

  return (
    <div className="min-h-screen bg-gradient-main">
      {/* 헤더 */}
      <header className="flex items-center justify-between p-4">
        <button 
          onClick={() => router.push('/main')}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-bold text-gray-800">나의 차BTI 결과</h1>
        <div className="w-10 h-10" />
      </header>

      {/* 메인 콘텐츠 */}
      <div className="px-6 pb-6">
        <div className="max-w-lg mx-auto">
          {/* 결과 카드 */}
          <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
            {/* 차 아이콘 */}
            <div className="flex justify-center mb-6">
              <div 
                className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: result.mainType.gradient }}
              >
                <span className="text-4xl">{result.mainType.icon}</span>
              </div>
            </div>

            {/* 결과 타이틀 */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                당신은 {result.mainType.name}
              </h2>
              <p className="text-lg text-brand-primary font-semibold mb-2">
                {result.mainType.nickname}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {result.mainType.description}
              </p>
            </div>

            {/* 성격 특성 */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">당신은 이런 사람이에요</h3>
              <div className="space-y-2">
                {result.mainType.characteristics.map((trait: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-4 h-4 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-brand-primary rounded-full" />
                    </div>
                    <span className="text-sm text-gray-700">{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 추천 여행지 */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">당신에게 어울리는 차 여행지</h3>
              <div className="grid grid-cols-3 gap-3">
                {result.recommendedDestinations.slice(0, 3).map((destination) => (
                  <div key={destination.id} className="text-center">
                    <div className="w-full aspect-square bg-gray-100 rounded-lg mb-2 flex items-center justify-center">
                      <span className="text-2xl">🏞️</span>
                    </div>
                    <p className="text-xs font-medium text-gray-800">{destination.name}</p>
                    <p className="text-xs text-gray-500">{destination.region}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 액션 버튼들 */}
          <div className="space-y-3">
            {/* 여행 코스 보기 */}
            <button
              onClick={handleViewCourse}
              className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-4 px-6 rounded-xl transition-colors shadow-lg"
            >
              추천 여행 코스 보기
            </button>

            {/* 결과 공유하기 */}
            <button
              onClick={() => handleShare('kakao')}
              className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-4 px-6 rounded-xl border border-gray-200 transition-colors"
            >
              결과 공유하기
            </button>

            {/* 다시 테스트하기 */}
            <button
              onClick={handleRetakeTest}
              className="w-full bg-tea-yellow-300 hover:bg-tea-yellow-400 text-gray-800 font-semibold py-4 px-6 rounded-xl transition-colors"
            >
              다시 테스트하기
            </button>
          </div>

          {/* 공유 옵션 (간단한 버전) */}
          <div className="mt-6 p-4 bg-white/50 rounded-xl">
            <p className="text-center text-sm text-gray-600 mb-3">다른 방법으로 공유하기</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleShare('instagram')}
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
                title="인스타그램"
              >
                <span className="text-xl">📷</span>
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
                title="트위터"
              >
                <span className="text-xl">🐦</span>
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
                title="페이스북"
              >
                <span className="text-xl">📘</span>
              </button>
            </div>
          </div>

          {/* 추가 정보 */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              🍵 나만의 차 여행을 시작해보세요!<br />
              더 많은 차 정보와 여행지를 둘러보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaBtiResult;
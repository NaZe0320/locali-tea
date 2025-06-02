'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { TouristSpot } from '../../types/tourist-spot';
import { createTouristSpotUseCases } from '../../usecases/tourist-spots';
import TouristSpotCard from '../../components/cards/TouristSpotCard';
import ResponsiveLayout from '../../components/layouts/ResponsiveLayout';
import MainBottomNavigation from '../../components/layouts/MainBottomNavigation';

export default function Main() {
  const [popularSpots, setPopularSpots] = useState<TouristSpot[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // UseCase 인스턴스를 메모이제이션하여 매번 새로 생성되지 않도록 함
  const useCases = useMemo(() => createTouristSpotUseCases(), []);

  // 인기 관광지 데이터 로드
  useEffect(() => {
    const loadPopularSpots = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const spots = await useCases.getPopularTouristSpotsUseCase.execute(6);
        setPopularSpots(spots);
      } catch (err) {
        setError(err instanceof Error ? err.message : '데이터를 불러오는데 실패했습니다.');
        console.error('Failed to load popular spots:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularSpots();
  }, [useCases.getPopularTouristSpotsUseCase]);

  return (
    <ResponsiveLayout
      header={
        <div className="py-4">
          <h1 className="text-xl font-bold text-primary">Locali-Tea</h1>
        </div>
      }
      footer={<MainBottomNavigation />}
    >
      <div className="px-4 py-6">
        {/* 차BTI 테스트 배너 */}
        <Link href="/tea-bti">
          <div className="mb-6 rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow" style={{
            background: 'linear-gradient(to right, #e8f5e9, #ffebee)'
          }}>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">나에게 맞는 차는?</h2>
              <p className="text-sm mb-4">차BTI 테스트로 알아보는 나의 차 유형</p>
              <button className="bg-white text-brand-primary px-4 py-2 rounded-full font-medium text-sm shadow-sm hover:bg-gray-50 transition-colors">
                테스트 시작하기
              </button>
            </div>
          </div>
        </Link>

        {/* 시즌별 인기 차 관광지 */}
        <section className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">시즌별 인기 차 관광지</h2>
            <Link href="/main/spots" className="text-brand-primary text-sm hover:text-brand-primary/80 transition-colors">
              더보기
            </Link>
          </div>
          
          {/* 로딩 상태 */}
          {loading && (
            <div className="flex items-center justify-center py-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-brand-primary rounded-full animate-pulse"></div>
                <span className="text-gray-600">관광지 정보를 불러오는 중...</span>
              </div>
            </div>
          )}
          
          {/* 에러 상태 */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <div className="flex items-center">
                <div className="text-red-500 mr-2">⚠️</div>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
              <button 
                onClick={() => window.location.reload()}
                className="mt-2 text-red-600 text-xs underline hover:no-underline"
              >
                다시 시도
              </button>
            </div>
          )}
          
          {/* 관광지 카드 리스트 */}
          {!loading && !error && popularSpots.length > 0 && (
            <div className="flex overflow-x-auto pb-2 -mx-4 px-4 space-x-4">
              {popularSpots.map((spot) => (
                <TouristSpotCard 
                  key={spot.id} 
                  spot={spot}
                />
              ))}
            </div>
          )}
          
          {/* 데이터가 없을 때 */}
          {!loading && !error && popularSpots.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>관광지 정보가 없습니다.</p>
            </div>
          )}
        </section>
        
        {/* 지역별 특색 콘텐츠 */}
        <section className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">지역별 특색 차 콘텐츠</h2>
            <button className="text-brand-primary text-sm hover:text-brand-primary/80 transition-colors">더보기</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {/* 지역 카드 */}
            {["전라도", "경상도", "강원도", "제주도"].map((region) => (
              <div key={region} className="p-4 rounded-lg cursor-pointer hover:shadow-tea-card transition-shadow" style={{
                background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                <h3 className="font-bold text-sm">{region}</h3>
                <p className="text-xs text-gray-600 mt-1">녹차의 고장</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* 추천 차 정보 섹션 */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">이 달의 추천 차</h2>
            <button className="text-brand-primary text-sm hover:text-brand-primary/80 transition-colors">더보기</button>
          </div>
          <div className="space-y-3">
            {["녹차", "홍차", "우롱차"].map((tea) => (
              <div key={tea} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm mb-1">{tea}</h3>
                    <p className="text-xs text-gray-600">건강한 항산화 성분이 풍부</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">🍵</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ResponsiveLayout>
  );
}
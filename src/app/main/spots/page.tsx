'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TouristSpot } from '../../../types/tourist-spot';
import { createTouristSpotUseCases } from '../../../usecases/tourist-spots';
import TouristSpotCard from '../../../components/cards/TouristSpotCard';

export default function TouristSpotsListPage() {
  const router = useRouter();
  const [spots, setSpots] = useState<TouristSpot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // UseCase 인스턴스 생성
  const { getTouristSpotsUseCase } = createTouristSpotUseCases();

  // 관광지 목록 로드
  useEffect(() => {
    const loadSpots = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const spotsData = await getTouristSpotsUseCase.execute();
        // 모든 spot의 이미지를 빈 배열로 설정하여 hasImage가 false가 되도록 함
        const spotsWithoutImages = spotsData.map(spot => ({
          ...spot,
          images: []
        }));
        setSpots(spotsWithoutImages);
      } catch (err) {
        setError(err instanceof Error ? err.message : '관광지 목록을 불러오는데 실패했습니다.');
        console.error('Failed to load spots:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSpots();
  }, [getTouristSpotsUseCase]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 z-10">
        <div className="flex items-center">
          <button 
            onClick={() => router.back()}
            className="mr-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-brand-dark">차 관광지</h1>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="p-4">
        {/* 로딩 상태 */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-brand-primary rounded-full animate-pulse"></div>
              <span className="text-gray-600">관광지 목록을 불러오는 중...</span>
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
        
        {/* 관광지 목록 */}
        {!loading && !error && spots.length > 0 && (
          <>
            <div className="mb-4">
              <p className="text-gray-600 text-sm">
                총 <span className="font-medium text-brand-primary">{spots.length}개</span>의 관광지가 있습니다.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {spots.map((spot) => (
                <div key={spot.id} className="w-full">
                  <TouristSpotCard 
                    spot={spot}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </>
        )}
        
        {/* 데이터가 없을 때 */}
        {!loading && !error && spots.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🍵</div>
            <p className="text-gray-500 mb-2">관광지 정보가 없습니다.</p>
            <p className="text-gray-400 text-sm">곧 새로운 관광지가 추가될 예정이에요!</p>
          </div>
        )}
      </div>
    </div>
  );
}
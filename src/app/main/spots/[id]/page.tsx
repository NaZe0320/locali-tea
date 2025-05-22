'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { TouristSpot, TeaType } from '../../../../types/tourist-spot';
import { createTouristSpotUseCases } from '../../../../usecases/tourist-spots';

// 차 종류별 색상 및 이름 유틸리티
const getTeaTypeStyle = (teaType: TeaType) => {
  const styles = {
    green: 'bg-tea-green-50 text-tea-green-800 border-tea-green-100',
    black: 'bg-tea-red-50 text-tea-red-700 border-tea-red-100',
    flower: 'bg-tea-purple-50 text-tea-purple-700 border-tea-purple-100',
    fermented: 'bg-tea-yellow-50 text-tea-yellow-700 border-tea-yellow-100',
    herbal: 'bg-blue-50 text-blue-700 border-blue-100'
  };
  return styles[teaType] || styles.green;
};

const getTeaTypeName = (teaType: TeaType) => {
  const names = {
    green: '녹차',
    black: '홍차', 
    flower: '꽃차',
    fermented: '발효차',
    herbal: '약재차'
  };
  return names[teaType] || '차';
};

export default function TouristSpotDetailPage() {
  const params = useParams();
  const router = useRouter();
  const spotId = params.id as string;
  
  const [spot, setSpot] = useState<TouristSpot | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // UseCase 인스턴스 생성
  const { getTouristSpotByIdUseCase } = createTouristSpotUseCases();

  // 관광지 상세 정보 로드
  useEffect(() => {
    const loadSpotDetail = async () => {
      if (!spotId) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const spotData = await getTouristSpotByIdUseCase.execute(spotId);
        // 이미지를 빈 배열로 설정하여 이미지가 없도록 함
        spotData.images = [];
        setSpot(spotData);
      } catch (err) {
        setError(err instanceof Error ? err.message : '관광지 정보를 불러오는데 실패했습니다.');
        console.error('Failed to load spot detail:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSpotDetail();
  }, [spotId]);

  // 로딩 상태
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* 헤더 스켈레톤 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-200 rounded animate-pulse mr-3"></div>
            <div className="w-32 h-5 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
        
        {/* 콘텐츠 스켈레톤 */}
        <div className="p-4">
          <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
          <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="space-y-2">
            <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-4/5 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  // 에러 상태
  if (error || !spot) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center">
            <button 
              onClick={() => router.back()}
              className="mr-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold">오류</h1>
          </div>
        </div>
        
        {/* 에러 메시지 */}
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <div className="text-4xl mb-4">😕</div>
            <p className="text-gray-600 mb-4">{error || '관광지를 찾을 수 없습니다.'}</p>
            <button 
              onClick={() => router.back()}
              className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              돌아가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 이미지 존재 여부 확인
  const hasImage = spot.images && spot.images.length > 0;

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
          <h1 className="text-lg font-semibold text-brand-dark">{spot.name}</h1>
        </div>
      </div>

      {/* 메인 이미지 */}
      <div className="relative h-64 bg-gray-100">
        {hasImage ? (
          <img 
            src={spot.images[0]} 
            alt={spot.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-gray-400 text-6xl mb-2">🍵</div>
            <h3 className="font-medium text-gray-600 text-center">
              {spot.name}
            </h3>
          </div>
        )}
        
        {/* 평점 배지 */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 text-sm font-medium">
          ⭐ {spot.rating} ({spot.reviewCount.toLocaleString()})
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="p-4">
        {/* 기본 정보 */}
        <div className="bg-white rounded-lg p-4 shadow-tea-card mb-4">
          {/* 태그들 */}
          <div className="mb-3 flex flex-wrap gap-2">
            <span className={`px-3 py-1 text-sm rounded-full border ${getTeaTypeStyle(spot.teaType)}`}>
              {getTeaTypeName(spot.teaType)}
            </span>
            {spot.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-100">
                {tag}
              </span>
            ))}
          </div>

          {/* 관광지 이름 */}
          <h2 className="text-xl font-bold text-brand-dark mb-2">{spot.name}</h2>
          
          {/* 위치 정보 */}
          <div className="flex items-center mb-3 text-gray-600">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">{spot.location.address}</span>
          </div>

          {/* 설명 */}
          <p className="text-gray-700 leading-relaxed mb-4">{spot.description}</p>

          {/* 가격 정보 */}
          {spot.priceRange && (
            <div className="flex items-center justify-between border-t border-gray-100 pt-3">
              <span className="text-gray-600">체험 가격</span>
              <span className="font-semibold text-brand-primary">
                {spot.priceRange.min.toLocaleString()}원 ~ {spot.priceRange.max.toLocaleString()}원
              </span>
            </div>
          )}
        </div>

        {/* 운영 정보 */}
        {spot.operatingHours && (
          <div className="bg-white rounded-lg p-4 shadow-tea-card mb-4">
            <h3 className="font-bold text-brand-dark mb-3">운영 정보</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">운영시간</span>
                <span>{spot.operatingHours.open} - {spot.operatingHours.close}</span>
              </div>
              {spot.operatingHours.closedDays && (
                <div className="flex justify-between">
                  <span className="text-gray-600">휴무일</span>
                  <span>{spot.operatingHours.closedDays.join(', ')}</span>
                </div>
              )}
              {spot.contact?.phone && (
                <div className="flex justify-between">
                  <span className="text-gray-600">전화번호</span>
                  <a href={`tel:${spot.contact.phone}`} className="text-brand-primary hover:underline">
                    {spot.contact.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 시설 정보 */}
        {spot.features.length > 0 && (
          <div className="bg-white rounded-lg p-4 shadow-tea-card mb-4">
            <h3 className="font-bold text-brand-dark mb-3">시설 정보</h3>
            <div className="grid grid-cols-2 gap-3">
              {spot.features.map((feature) => (
                <div key={feature.id} className="flex items-center">
                  <span className="text-lg mr-2">{feature.icon}</span>
                  <span className="text-sm text-gray-700">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 체험 프로그램 */}
        {spot.activities.length > 0 && (
          <div className="bg-white rounded-lg p-4 shadow-tea-card mb-4">
            <h3 className="font-bold text-brand-dark mb-3">체험 프로그램</h3>
            <div className="space-y-3">
              {spot.activities.map((activity) => (
                <div key={activity.id} className="border border-gray-100 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-brand-dark">{activity.name}</h4>
                    {activity.price && (
                      <span className="text-brand-primary font-medium">
                        {activity.price.toLocaleString()}원
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                  <span className="text-xs text-gray-500">소요시간: {activity.duration}분</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 하단 액션 버튼들 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-3 z-10">
        <button className="flex-1 bg-brand-primary text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
          예약하기
        </button>
        <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </button>
      </div>

      {/* 하단 여백 추가 */}
      <div className="h-24"></div>
    </div>
  );
}
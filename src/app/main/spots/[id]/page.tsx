'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { TouristSpot, TeaType } from '../../../../types/tourist-spot';
import { createTouristSpotUseCases } from '../../../../usecases/tourist-spots';
import Image from 'next/image';

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
  const [activeTab, setActiveTab] = useState('정보');
  const [isLiked, setIsLiked] = useState(false);

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
        setSpot(spotData);
      } catch (err) {
        setError(err instanceof Error ? err.message : '관광지 정보를 불러오는데 실패했습니다.');
        console.error('Failed to load spot detail:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSpotDetail();
  }, [spotId, getTouristSpotByIdUseCase]);

  // 로딩 상태
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
        <div className="p-4">
          <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-full h-20 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 에러 상태
  if (error || !spot) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
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
    );
  }

  // 이미지 존재 여부 확인
  const hasImage = spot.images && spot.images.length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 이미지 및 네비게이션 */}
      <div className="relative h-64 bg-gray-200">
        {hasImage ? (
          <Image 
            src={spot.images[0]} 
            alt={spot.name}
            className="w-full h-full object-cover"
            width={1000}
            height={500}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-gray-400 text-6xl mb-2">🍵</div>
            <h3 className="font-medium text-gray-600 text-center">
              {spot.name}
            </h3>
          </div>
        )}
        {/* 상단 네비게이션 오버레이 */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex space-x-2">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <svg className={`w-6 h-6 ${isLiked ? 'text-red-500' : 'text-white'}`} fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          </div>
        </div>

        {/* 제목 및 위치 오버레이 */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-start space-x-2 mb-2">
            <span className={`inline-block px-2 py-1 text-xs rounded-full border ${getTeaTypeStyle(spot.teaType)}`}>
              {getTeaTypeName(spot.teaType)}
            </span>
            <span className="inline-block px-2 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border border-gray-100">
              무장애
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">{spot.name}</h1>
          <div className="flex items-center text-white text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{spot.location.province} {spot.location.city}</span>
          </div>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex">
          {['정보', '리뷰', '주변'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === tab 
                ? 'text-brand-primary border-b-2 border-brand-primary' 
                : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="p-4 space-y-6">
        {/* 무장애 정보 */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-bold text-lg mb-4">무장애 정보</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 text-xs font-bold">0</span>
              </div>
              <div>
                <h4 className="font-medium">휠체어 접근성</h4>
                <p className="text-sm text-gray-600">주요 관람로 휠체어 접근 가능, 경사로 설치</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 text-xs font-bold">0</span>
              </div>
              <div>
                <h4 className="font-medium">장애인 화장실</h4>
                <p className="text-sm text-gray-600">방문자 센터와 주차장 근처에 위치</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 text-xs font-bold">0</span>
              </div>
              <div>
                <h4 className="font-medium">장애인 주차구역</h4>
                <p className="text-sm text-gray-600">주차장 내 장애인 전용 주차구역 5면 확보</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 text-xs font-bold">0</span>
              </div>
              <div>
                <h4 className="font-medium">보조 서비스</h4>
                <p className="text-sm text-gray-600">휠체어 대여 가능, 안내원 동반 출입 가능</p>
              </div>
            </div>
          </div>
        </div>

        {/* 획득 가능 배지 */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-bold text-lg mb-4">획득 가능 배지</h3>
          <div className="flex justify-around">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl">🍵</span>
              </div>
              <p className="text-sm font-medium">보성 녹차</p>
              <p className="text-xs text-gray-500">2/3 완료</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl">🌿</span>
              </div>
              <p className="text-sm font-medium">녹차 탐방대</p>
              <p className="text-xs text-gray-500">1/3 완료</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl">♿</span>
              </div>
              <p className="text-sm font-medium">무장애 티투어</p>
              <p className="text-xs text-gray-500">전체증</p>
            </div>
          </div>
        </div>

        {/* 찾아오는 길 */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-bold text-lg mb-4">찾아오는 길</h3>
          
          {/* 지도 영역 */}
          <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-500">지도 영역</span>
          </div>
          
          <div className="space-y-2">
            <p className="font-medium">{spot.location.address}</p>
            <p className="text-sm text-gray-600">대중교통 이용 시</p>
            <p className="text-xs text-gray-500">
              보성시외버스터미널에서 군내버스 이용 (약 15분 소요)
            </p>
          </div>
          
          {/* 무료 관람 안내 */}
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-1">무료 관람 안내</h4>
            <p className="text-sm text-blue-700">
              월화수 힘들 가능 무료베자 운영 (하루 3회, 09:00, 13:00, 16:00)
            </p>
            <p className="text-sm text-blue-700">
              월화수 이용 가능 홈페이지 예약: 061-850-5200
            </p>
          </div>
        </div>

        {/* 상세 정보 */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-bold text-lg mb-4">상세 정보</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">운영시간</span>
              <span className="text-right">
                {spot.operatingHours?.open} - {spot.operatingHours?.close}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">입장료</span>
              <span className="text-right">무료</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">주차장</span>
              <span className="text-right">무료 (승용차 200대)</span>
            </div>

            {spot.contact?.phone && (
              <div className="flex justify-between">
                <span className="text-gray-600">문의전화</span>
                <a 
                  href={`tel:${spot.contact.phone}`} 
                  className="text-brand-primary hover:underline"
                >
                  {spot.contact.phone}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <button className="w-full bg-brand-primary text-white py-4 rounded-lg font-medium text-lg hover:bg-green-600 transition-colors">
          방문 인증하고 배지 획득하기
        </button>
      </div>
    </div>
  );
}
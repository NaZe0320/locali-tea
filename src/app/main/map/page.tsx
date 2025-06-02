'use client';

import React from 'react';

export default function MapPage() {
  return (
    <div className="h-full">
      {/* 헤더 */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <h1 className="text-lg font-bold text-gray-800">차 관광지 지도</h1>
      </div>

      {/* 지도 영역 */}
      <div className="relative h-[calc(100vh-140px)]">
        {/* 임시 지도 표시 */}
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">🗺️</div>
            <p className="text-gray-600 mb-2">지도가 로드 중입니다</p>
            <p className="text-sm text-gray-500">곧 차 관광지들을 지도에서 확인하실 수 있습니다</p>
          </div>
        </div>

        {/* 검색 바 오버레이 */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <div className="bg-white rounded-lg shadow-md">
            <input
              type="text"
              placeholder="장소 검색"
              className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
        </div>

        {/* 현재 위치 버튼 */}
        <button className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 transition-colors">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {/* 필터 버튼들 */}
        <div className="absolute top-20 left-4 right-4 z-10">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['전체', '녹차', '홍차', '전통차', '체험'].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === '전체'
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 정보 패널 (숨겨진 상태) */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-lg transform translate-y-full transition-transform duration-300">
        <div className="p-4">
          <div className="w-8 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 className="font-bold text-lg mb-2">선택된 장소</h3>
          <p className="text-gray-600 text-sm">지도에서 관광지를 선택해주세요</p>
        </div>
      </div>
    </div>
  );
} 
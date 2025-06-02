'use client';

import React from 'react';

export default function ExplorePage() {
  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">탐색</h1>
        <p className="text-gray-600">새로운 차 관광지를 발견해보세요</p>
      </div>
      
      {/* 검색 바 */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="관광지, 차 종류로 검색"
            className="w-full px-4 py-3 pl-12 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
          />
          <svg 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      {/* 카테고리 */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-3">카테고리</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: '녹차 명소', icon: '🍵', count: 24 },
            { name: '홍차 체험', icon: '🌿', count: 12 },
            { name: '전통 찻집', icon: '🏮', count: 18 },
            { name: '차밭 관광', icon: '🌱', count: 32 }
          ].map((category) => (
            <div 
              key={category.name}
              className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <h3 className="font-medium text-gray-800">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count}개 장소</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* 인기 검색어 */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-3">인기 검색어</h2>
        <div className="flex flex-wrap gap-2">
          {['보성 녹차밭', '하동 차문화', '제주 오설록', '경주 불국사'].map((keyword) => (
            <span 
              key={keyword}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
      
      {/* 최근 본 장소 */}
      <div>
        <h2 className="text-lg font-bold mb-3">최근 본 장소</h2>
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <p className="text-gray-500 text-center py-8">최근 본 장소가 없습니다</p>
        </div>
      </div>
    </div>
  );
} 
import React from 'react';
import Link from 'next/link';
import { TouristSpot, TeaType } from '../../types/tourist-spot';
import Image from 'next/image';

interface TouristSpotCardProps {
  spot: TouristSpot;
  className?: string;
}

// 차 종류별 태그 색상 매핑
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

// 차 종류 한글 이름 매핑
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

export const TouristSpotCard: React.FC<TouristSpotCardProps> = ({ 
  spot, 
  className = '' 
}) => {
  const hasImage = false; // 항상 이미지가 없는 상태로 설정

  return (
    <Link href={`/main/spots/${spot.id}`}>
      <div className={`flex-shrink-0 w-64 rounded-lg shadow-tea-card overflow-hidden border border-gray-100 hover:shadow-tea-card-hover transition-all duration-200 cursor-pointer ${className}`}>
        {/* 이미지 영역 */}
        <div className="h-32 bg-gray-100 relative overflow-hidden">
          {hasImage ? (
            <>
              <img 
                src={spot.images[0]} 
                alt={spot.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* 평점 배지 */}
              <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full px-2 py-1 text-xs font-medium">
                ⭐ {spot.rating}
              </div>
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-2">
              <div className="text-gray-400 text-3xl mb-1">🍵</div>
              <h3 className="font-medium text-sm text-gray-600 text-center">
                {spot.name}
              </h3>
            </div>
          )}
        </div>
        
        {/* 콘텐츠 영역 */}
        <div className="p-3">
          {/* 태그들 */}
          <div className="mb-2 flex flex-wrap gap-1">
            <span className={`inline-block px-2 py-1 text-xs rounded-full border ${getTeaTypeStyle(spot.teaType)}`}>
              {getTeaTypeName(spot.teaType)}
            </span>
            {spot.tags[0] && (
              <span className="inline-block px-2 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border border-gray-100">
                {spot.tags[0]}
              </span>
            )}
          </div>
          
          {/* 관광지 이름 */}
          <h3 className="font-bold text-brand-dark mb-1 line-clamp-1">
            {spot.name}
          </h3>
          
          {/* 위치 정보 */}
          <p className="text-xs text-gray-500 mb-2">
            {spot.location.province} {spot.location.city}
          </p>
          
          {/* 설명 */}
          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
            {spot.description}
          </p>
          
          {/* 하단 정보 */}
          <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
            <span>리뷰 {spot.reviewCount.toLocaleString()}개</span>
            {spot.priceRange && (
              <span className="font-medium text-brand-primary">
                {spot.priceRange.min.toLocaleString()}원~
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TouristSpotCard;
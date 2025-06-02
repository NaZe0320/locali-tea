'use client';

import React from 'react';

export default function ProfilePage() {
  const userStats = {
    visitedSpots: 12,
    completedChallenges: 3,
    earnedBadges: 8,
    totalPoints: 1250
  };

  const recentBadges = [
    { id: 1, name: '녹차 마스터', icon: '🍵', earnedDate: '2024-03-20', description: '녹차 명소 5곳 방문' },
    { id: 2, name: '첫 여행자', icon: '👋', earnedDate: '2024-03-15', description: '첫 차 관광지 방문' },
    { id: 3, name: '보성 탐험가', icon: '🌱', earnedDate: '2024-03-10', description: '보성 차밭 완주' },
    { id: 4, name: '사진 작가', icon: '📸', earnedDate: '2024-03-08', description: '관광지 사진 10장 업로드' }
  ];

  const recentVisits = [
    { id: 1, name: '보성 녹차밭', location: '전라남도 보성군', visitDate: '2024-03-20', rating: 5 },
    { id: 2, name: '하동 차문화센터', location: '경상남도 하동군', visitDate: '2024-03-18', rating: 4 },
    { id: 3, name: '제주 오설록 티뮤지엄', location: '제주특별자치도', visitDate: '2024-03-15', rating: 5 }
  ];

  const menuItems = [
    { icon: '👤', name: '내 정보 수정', description: '프로필 정보 변경' },
    { icon: '🏆', name: '내 배지 모음', description: '획득한 모든 배지 보기' },
    { icon: '❤️', name: '즐겨찾기', description: '저장한 관광지 보기' },
    { icon: '📋', name: '내 리뷰', description: '작성한 리뷰 관리' },
    { icon: '🔔', name: '알림 설정', description: '푸시 알림 및 이메일 설정' },
    { icon: '❓', name: '도움말', description: '앱 사용법 및 FAQ' },
    { icon: 'ℹ️', name: '앱 정보', description: '버전 정보 및 이용약관' }
  ];

  return (
    <div className="px-4 py-6">
      {/* 프로필 헤더 */}
      <div className="bg-gradient-to-br from-brand-primary to-green-600 rounded-xl p-6 mb-6 text-white">
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm">
            <span className="text-white text-2xl font-bold">차</span>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold mb-1">차 여행자님</h1>
            <p className="text-white/80 text-sm mb-2">차를 사랑하는 여행자</p>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">Lv. 5</span>
              <div className="flex-1 bg-white/20 rounded-full h-2 mr-2 max-w-24">
                <div className="bg-white h-2 rounded-full w-3/4"></div>
              </div>
              <span className="text-xs">75%</span>
            </div>
          </div>
        </div>
        
        {/* 통계 */}
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-xl font-bold">{userStats.visitedSpots}</div>
            <div className="text-xs text-white/80">방문한 곳</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold">{userStats.completedChallenges}</div>
            <div className="text-xs text-white/80">완료 챌린지</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold">{userStats.earnedBadges}</div>
            <div className="text-xs text-white/80">획득 배지</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold">{userStats.totalPoints}</div>
            <div className="text-xs text-white/80">포인트</div>
          </div>
        </div>
      </div>

      {/* 최근 획득 배지 */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">최근 획득 배지</h2>
          <button className="text-brand-primary text-sm font-medium hover:underline">
            전체보기
          </button>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="grid grid-cols-4 gap-3">
            {recentBadges.slice(0, 4).map((badge) => (
              <div key={badge.id} className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-2 mx-auto shadow-sm">
                  <span className="text-2xl">{badge.icon}</span>
                </div>
                <h3 className="text-xs font-medium text-gray-800 mb-1 truncate">{badge.name}</h3>
                <p className="text-xs text-gray-500">{badge.earnedDate.slice(5)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 최근 방문 장소 */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">최근 방문 장소</h2>
          <button className="text-brand-primary text-sm font-medium hover:underline">
            전체보기
          </button>
        </div>
        <div className="space-y-3">
          {recentVisits.map((visit) => (
            <div key={visit.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <h3 className="font-medium text-gray-800 mr-2">{visit.name}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${
                            index < visit.rating ? 'text-yellow-400' : 'text-gray-200'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{visit.location}</p>
                  <p className="text-xs text-gray-500">방문일: {visit.visitDate}</p>
                </div>
                <div className="text-brand-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 메뉴 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">설정 및 정보</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={item.name}
              className={`w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </section>

      {/* 로그아웃 버튼 */}
      <div className="mt-6">
        <button className="w-full py-3 text-center text-gray-500 hover:text-gray-700 transition-colors">
          로그아웃
        </button>
      </div>
    </div>
  );
} 
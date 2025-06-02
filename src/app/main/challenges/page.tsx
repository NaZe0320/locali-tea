'use client';

import React from 'react';

export default function ChallengesPage() {
  const activeChallenges = [
    {
      id: 1,
      title: '보성 녹차밭 완주하기',
      description: '보성의 대표 녹차밭 3곳을 모두 방문해보세요',
      progress: 2,
      total: 3,
      reward: '녹차 마스터 배지',
      daysLeft: 12
    },
    {
      id: 2,
      title: '전라도 차 여행',
      description: '전라도 지역의 차 관련 명소 5곳 탐방',
      progress: 1,
      total: 5,
      reward: '전라도 차 탐험가 배지',
      daysLeft: 28
    }
  ];

  const completedChallenges = [
    {
      id: 3,
      title: '첫 차 여행',
      description: '첫 번째 차 관광지 방문 완료',
      completedDate: '2024-03-15',
      reward: '신입 차 여행자 배지'
    }
  ];

  const availableChallenges = [
    {
      id: 4,
      title: '제주 오설록 마스터',
      description: '제주도 오설록 관련 장소 3곳 방문',
      difficulty: '쉬움',
      estimatedDays: 7,
      reward: '제주 차 마스터 배지'
    },
    {
      id: 5,
      title: '전통 찻집 탐방가',
      description: '전국 전통 찻집 10곳 방문',
      difficulty: '어려움',
      estimatedDays: 90,
      reward: '전통 찻집 마스터 배지'
    }
  ];

  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">챌린지</h1>
        <p className="text-gray-600">차 여행 챌린지에 도전해보세요!</p>
      </div>

      {/* 진행 중인 챌린지 */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">진행 중인 챌린지</h2>
        <div className="space-y-4">
          {activeChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-1">{challenge.title}</h3>
                  <p className="text-sm text-gray-600">{challenge.description}</p>
                </div>
                <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                  {challenge.daysLeft}일 남음
                </span>
              </div>
              
              <div className="mb-3">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-600">진행도</span>
                  <span className="font-medium">{challenge.progress}/{challenge.total}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-brand-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-1">🏆</span>
                  <span>{challenge.reward}</span>
                </div>
                <button className="text-brand-primary text-sm font-medium hover:underline">
                  상세보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 완료된 챌린지 */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">완료된 챌린지</h2>
        <div className="space-y-3">
          {completedChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-green-50 rounded-lg p-4 border border-green-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-1">{challenge.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{challenge.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">완료: {challenge.completedDate}</span>
                    <span className="text-green-600">🏆 {challenge.reward}</span>
                  </div>
                </div>
                <div className="text-green-500 text-2xl">✅</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 참여 가능한 챌린지 */}
      <section>
        <h2 className="text-lg font-bold mb-4">새로운 챌린지</h2>
        <div className="space-y-4">
          {availableChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-1">{challenge.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{challenge.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className={`px-2 py-1 rounded-full ${
                      challenge.difficulty === '쉬움' 
                        ? 'bg-green-100 text-green-600'
                        : challenge.difficulty === '보통'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {challenge.difficulty}
                    </span>
                    <span>예상 소요: {challenge.estimatedDays}일</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-1">🏆</span>
                  <span>{challenge.reward}</span>
                </div>
                <button className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-primary/90 transition-colors">
                  시작하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 
'use client';

import React from 'react';
import ResponsiveLayout from '../../../components/layouts/ResponsiveLayout';
import MainBottomNavigation from '../../../components/layouts/MainBottomNavigation';

export default function ChallengesPage() {
  return (
    <ResponsiveLayout
      header={
        <div className="py-4">
          <h1 className="text-xl font-bold text-primary">챌린지</h1>
        </div>
      }
      footer={<MainBottomNavigation />}
    >
      <div className="px-4 py-6">
        <div className="text-center py-20">
          <div className="text-6xl mb-4">⭐</div>
          <h2 className="text-xl font-bold mb-2 text-gray-800">챌린지 페이지</h2>
          <p className="text-gray-600">
            다양한 차 관련 챌린지와 미션을 수행할 수 있는 페이지입니다.
          </p>
        </div>
      </div>
    </ResponsiveLayout>
  );
} 
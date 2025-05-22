'use client';

import React, { useState } from 'react';

export default function DesignSystemPage() {
  const [activeTab, setActiveTab] = useState('colors');

  const tabs = [
    { id: 'colors', name: '색상 시스템' },
    { id: 'typography', name: '타이포그래피' },
    { id: 'components', name: '컴포넌트' },
    { id: 'examples', name: '사용 예시' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 font-pretendard">
      <div className="max-w-tea-container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-brand-dark">
            로컬리티(Locali-Tea) 디자인 시스템
          </h1>
          <p className="text-gray-600">
            Locali-Tea 프로젝트에서 사용되는 모든 디자인 요소들의 가이드라인입니다.
          </p>
        </div>

        {/* 탭 네비게이션 */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-brand-primary shadow-tea-card'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* 탭 콘텐츠 */}
        {activeTab === 'colors' && <ColorSystem />}
        {activeTab === 'typography' && <Typography />}
        {activeTab === 'components' && <Components />}
        {activeTab === 'examples' && <Examples />}
      </div>
    </div>
  );
}

// 색상 시스템 섹션
function ColorSystem() {
  return (
    <div className="space-y-12">
      {/* 브랜드 색상 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-brand-dark pb-2 border-b border-gray-200">
          브랜드 색상
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <ColorCard color="bg-brand-primary" name="프라이머리" code="#68A66F" desc="녹차 그린" />
          <ColorCard color="bg-brand-secondary" name="세컨더리" code="#E57373" desc="홍차 레드" />
          <ColorCard color="bg-brand-accent" name="액센트" code="#BA68C8" desc="꽃차 퍼플" />
          <ColorCard color="bg-brand-highlight" name="하이라이트" code="#FFD54F" desc="발효차 옐로우" />
          <ColorCard color="bg-brand-dark" name="다크" code="#1F2937" desc="텍스트 컬러" />
        </div>
      </section>

      {/* 차 카테고리 색상 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-brand-dark pb-2 border-b border-gray-200">
          차 카테고리 색상
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TeaCategoryCard
            name="녹차"
            colors={['bg-tea-green-50', 'bg-tea-green-100', 'bg-tea-green-200', 'bg-tea-green-300', 'bg-tea-green-600']}
            range="#ECFDF5 → #68A66F"
          />
          <TeaCategoryCard
            name="홍차"
            colors={['bg-tea-red-50', 'bg-tea-red-100', 'bg-tea-red-200', 'bg-tea-red-300', 'bg-tea-red-400']}
            range="#FEF2F2 → #E57373"
          />
          <TeaCategoryCard
            name="꽃차"
            colors={['bg-tea-purple-50', 'bg-tea-purple-100', 'bg-tea-purple-200', 'bg-tea-purple-300', 'bg-tea-purple-400']}
            range="#F5F3FF → #BA68C8"
          />
          <TeaCategoryCard
            name="발효차"
            colors={['bg-tea-yellow-50', 'bg-tea-yellow-100', 'bg-tea-yellow-200', 'bg-tea-yellow-300', 'bg-tea-yellow-400']}
            range="#FFFBEB → #FFD54F"
          />
        </div>
      </section>

      {/* 그라데이션 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-brand-dark pb-2 border-b border-gray-200">
          그라데이션 색상
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GradientCard
            name="메인 그라데이션"
            desc="헤더, 배너, 주요 섹션에 사용"
            css="bg-gradient-main"
            className="bg-gradient-main"
          />
          <GradientCard
            name="액션 그라데이션"
            desc="버튼, 프로그레스 바에 사용"
            css="bg-gradient-action"
            className="bg-gradient-action"
          />
          <GradientCard
            name="서브 그라데이션"
            desc="카드 배경, 리스트 아이템에 사용"
            css="bg-gradient-sub"
            className="bg-gradient-sub"
          />
        </div>
      </section>

      {/* 차 카테고리 그라데이션 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-brand-dark pb-2 border-b border-gray-200">
          차 카테고리 그라데이션
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GradientCard
            name="녹차 그라데이션"
            desc="녹차 관련 카드 및 필터"
            css="bg-gradient-tea-green"
            className="bg-gradient-tea-green"
          />
          <GradientCard
            name="홍차 그라데이션"
            desc="홍차 관련 카드 및 필터"
            css="bg-gradient-tea-red"
            className="bg-gradient-tea-red"
          />
          <GradientCard
            name="꽃차 그라데이션"
            desc="꽃차 관련 카드 및 필터"
            css="bg-gradient-tea-purple"
            className="bg-gradient-tea-purple"
          />
          <GradientCard
            name="발효차 그라데이션"
            desc="발효차 관련 카드 및 필터"
            css="bg-gradient-tea-yellow"
            className="bg-gradient-tea-yellow"
          />
        </div>
      </section>

      {/* 기능 색상 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-brand-dark pb-2 border-b border-gray-200">
          기능 색상
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorCard color="bg-green-500" name="성공" code="#4CAF50" desc="성공 상태" />
          <ColorCard color="bg-red-500" name="오류" code="#F44336" desc="오류 상태" />
          <ColorCard color="bg-yellow-500" name="경고" code="#FFC107" desc="경고 상태" />
          <ColorCard color="bg-blue-500" name="정보" code="#2196F3" desc="정보 상태" />
        </div>
      </section>
    </div>
  );
}

// 타이포그래피 섹션
function Typography() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-brand-dark pb-2 border-b border-gray-200">
          폰트 패밀리
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-tea-card border border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-gray-700">Pretendard (메인)</h3>
            <p className="text-2xl mb-2 font-pretendard">가나다라마바사 ABCDEFG 1234567</p>
            <p className="text-sm text-gray-500">헤딩, 본문 텍스트, 버튼, 레이블 등 기본 서체</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-tea-card border border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-gray-700">SF Pro Display (대체)</h3>
            <p className="text-2xl mb-2 font-sf-pro">
              가나다라마바사 ABCDEFG 1234567
            </p>
            <p className="text-sm text-gray-500">Pretendard를 사용할 수 없는 환경에서의 대체 폰트</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-brand-dark pb-2 border-b border-gray-200">
          텍스트 스타일
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-tea-card border border-gray-200 space-y-4">
          <div className="pb-3 border-b border-gray-100">
            <div className="text-3xl font-bold text-brand-dark">헤딩 1 (24px, Bold)</div>
            <p className="text-sm text-gray-500 mt-1">메인 페이지 타이틀, 중요 섹션 헤더</p>
          </div>
          <div className="pb-3 border-b border-gray-100">
            <div className="text-2xl font-bold text-brand-dark">헤딩 2 (20px, Bold)</div>
            <p className="text-sm text-gray-500 mt-1">섹션 타이틀, 카드 헤더</p>
          </div>
          <div className="pb-3 border-b border-gray-100">
            <div className="text-xl font-semibold text-brand-dark">헤딩 3 (18px, Semibold)</div>
            <p className="text-sm text-gray-500 mt-1">서브 섹션 타이틀</p>
          </div>
          <div className="pb-3 border-b border-gray-100">
            <div className="text-lg font-medium text-brand-dark">서브 헤딩 (16px, Medium)</div>
            <p className="text-sm text-gray-500 mt-1">강조 텍스트, 중요 안내</p>
          </div>
          <div className="pb-3 border-b border-gray-100">
            <div className="text-base text-gray-700">본문 텍스트 (16px, Regular)</div>
            <p className="text-sm text-gray-500 mt-1">기본 텍스트, 설명문</p>
          </div>
          <div className="pb-3 border-b border-gray-100">
            <div className="text-sm text-gray-600">작은 텍스트 (14px, Regular)</div>
            <p className="text-sm text-gray-500 mt-1">보조 텍스트, 상세 정보</p>
          </div>
          <div>
            <div className="text-xs text-gray-500">캡션 (12px, Regular)</div>
            <p className="text-sm text-gray-500 mt-1">레이블, 시간 표시, 메타 정보</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// 컴포넌트 섹션
function Components() {
  return (
    <div className="space-y-12">
      {/* 버튼 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-brand-dark pb-2 border-b border-gray-200">
          버튼
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-tea-card border border-gray-200">
            <h3 className="text-lg font-medium mb-4 text-gray-700">단색 버튼</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-brand-primary text-white rounded-lg hover:opacity-90 transition-opacity">
                프라이머리 버튼
              </button>
              <button className="w-full px-4 py-2 bg-brand-secondary text-white rounded-lg hover:opacity-90 transition-opacity">
                세컨더리 버튼
              </button>
              <button className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                아웃라인 버튼
              </button>
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                중립 버튼
              </button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-tea-card border border-gray-200">
            <h3 className="text-lg font-medium mb-4 text-gray-700">그라데이션 버튼</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 rounded-full text-white font-medium bg-gradient-action hover:opacity-90 transition-opacity">
                그라데이션 프라이머리 버튼
              </button>
              <button className="w-full px-4 py-2 rounded-full text-white font-medium bg-gradient-action-secondary hover:opacity-90 transition-opacity">
                그라데이션 세컨더리 버튼
              </button>
              <button className="w-full px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                세컨더리 버튼
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-tea-card border border-gray-200">
          <h3 className="text-lg font-medium mb-4 text-gray-700">버튼 사이즈</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-3 py-1 bg-brand-primary text-white text-xs rounded-lg hover:opacity-90 transition-opacity">
              Small
            </button>
            <button className="px-4 py-2 bg-brand-primary text-white text-sm rounded-lg hover:opacity-90 transition-opacity">
              Medium
            </button>
            <button className="px-6 py-3 bg-brand-primary text-white text-base rounded-lg hover:opacity-90 transition-opacity">
              Large
            </button>
          </div>
        </div>
      </section>

      {/* 태그 & 배지 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-brand-dark pb-2 border-b border-gray-200">
          태그 & 배지
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-tea-card border border-gray-200">
            <h3 className="text-lg font-medium mb-4 text-gray-700">차 종류 태그</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-tea-green-50 text-tea-green-800 text-xs rounded-full border border-tea-green-100">녹차</span>
              <span className="px-3 py-1 bg-tea-red-50 text-tea-red-700 text-xs rounded-full border border-tea-red-100">홍차</span>
              <span className="px-3 py-1 bg-tea-purple-50 text-tea-purple-700 text-xs rounded-full border border-tea-purple-100">꽃차</span>
              <span className="px-3 py-1 bg-tea-yellow-50 text-tea-yellow-700 text-xs rounded-full border border-tea-yellow-100">발효차</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100">얼음차</span>
            </div>
            
            <h4 className="text-md font-medium mb-3 text-gray-700">원형 배지</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-tea-green-50 rounded-full flex items-center justify-center mb-1 border border-tea-green-100">
                  <span className="text-tea-green-700">🍵</span>
                </div>
                <p className="text-xs text-gray-600">녹차</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-tea-red-50 rounded-full flex items-center justify-center mb-1 border border-tea-red-100">
                  <span className="text-tea-red-700">🍂</span>
                </div>
                <p className="text-xs text-gray-600">홍차</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-tea-purple-50 rounded-full flex items-center justify-center mb-1 border border-tea-purple-100">
                  <span className="text-tea-purple-700">🌸</span>
                </div>
                <p className="text-xs text-gray-600">꽃차</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-tea-card border border-gray-200">
            <h3 className="text-lg font-medium mb-4 text-gray-700">상태 표시</h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-green-50 text-green-800 rounded-lg border border-green-100">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-sm">방문 인증이 완료되었습니다.</p>
              </div>
              
              <div className="flex items-center p-3 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-200">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <p className="text-sm">운영 시간이 변경되었습니다.</p>
              </div>
              
              <div className="flex items-center p-3 bg-red-50 text-red-800 rounded-lg border border-red-100">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <p className="text-sm">위치 정보를 확인할 수 없습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 사용 예시 섹션
function Examples() {
  return (
    <div className="space-y-12">
      {/* 카드 예시 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-brand-dark pb-2 border-b border-gray-200">
          카드 컴포넌트
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-700">단색 카드</h3>
            <div className="bg-white rounded-lg shadow-tea-card border border-gray-200 overflow-hidden hover:shadow-tea-card-hover transition-shadow">
              <div className="h-40 bg-gradient-card-green flex items-center justify-center">
                <span className="text-4xl">🍵</span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-tea-green-50 text-tea-green-800 text-xs px-2 py-1 rounded-full border border-tea-green-100">녹차</span>
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full border border-blue-100">힐링</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-1">보성 녹차밭 투어</h4>
                <p className="text-sm text-gray-600 mb-2">전라남도 보성군</p>
                <p className="text-xs text-gray-500">힐링과 전통이 함께하는 보성 녹차밭에서 전통 차 체험을 즐겨보세요.</p>
                <button className="text-brand-primary text-sm font-medium mt-2 hover:text-brand-primary/80 transition-colors">
                  자세히 보기 →
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-700">지역 카드</h3>
            <div className="bg-gradient-tea-green rounded-lg shadow-tea-card overflow-hidden border border-gray-200 hover:shadow-tea-card-hover transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-brand-dark">전라도</h4>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-tea-card">
                    <span className="text-tea-green-700">→</span>
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">녹차의 고장</p>
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center">
                    <span className="text-3xl">🌿</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 입력 폼 예시 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-brand-dark pb-2 border-b border-gray-200">
          입력 폼 컴포넌트
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-tea-card border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이름
              </label>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                메시지
              </label>
              <textarea
                placeholder="메시지를 입력하세요"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="px-6 py-2 text-white rounded-lg bg-gradient-action hover:opacity-90 transition-opacity">
              전송하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// 컬러 카드 컴포넌트
function ColorCard({ color, name, code, desc }: { color: string; name: string; code: string; desc: string }) {
  return (
    <div className="flex flex-col animate-fade-in">
      <div className={`h-16 ${color} rounded-t-lg`}></div>
      <div className="bg-white p-3 rounded-b-lg shadow-tea-card text-sm border border-gray-200 border-t-0">
        <p className="font-medium text-brand-dark">{name}</p>
        <p className="text-gray-500 text-xs">{code}</p>
        <p className="text-gray-400 text-xs">{desc}</p>
      </div>
    </div>
  );
}

// 차 카테고리 카드 컴포넌트
function TeaCategoryCard({ name, colors, range }: { name: string; colors: string[]; range: string }) {
  return (
    <div className="animate-fade-in">
      <h4 className="text-sm font-medium mb-3 text-gray-700">{name}</h4>
      <div className="grid grid-cols-5 gap-1 mb-2">
        {colors.map((color, index) => (
          <div key={index} className={`h-8 ${color} ${index === 0 ? 'rounded-l' : index === colors.length - 1 ? 'rounded-r' : ''}`}></div>
        ))}
      </div>
      <div className="text-xs text-gray-500">{range}</div>
    </div>
  );
}

// 그라데이션 카드 컴포넌트
function GradientCard({ name, desc, css, className }: { name: string; desc: string; css: string; className: string }) {
  return (
    <div className="flex flex-col animate-fade-in">
      <div className={`h-20 rounded-t-lg ${className}`}></div>
      <div className="bg-white p-4 rounded-b-lg shadow-tea-card text-sm border border-gray-200 border-t-0">
        <p className="font-medium text-brand-dark mb-1">{name}</p>
        <p className="text-gray-600 text-xs mb-2">{desc}</p>
        <p className="text-gray-400 text-xs font-mono break-all">{css}</p>
      </div>
    </div>
  );
}
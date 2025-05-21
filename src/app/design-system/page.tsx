'use client'

import React from 'react';
import Link from 'next/link';
import Button from '../../components/ui/Button';

// 아이콘 컴포넌트들을 고정 사이즈로 정의
const HomeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
  </svg>
);

const TeaCupIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M2 8c0-1.1.9-2 2-2h16a2 2 0 012 2v2c0 1.1-.9 2-2 2h-2v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4H2v-2zm2 0h16v2H4V8zm2 4v4a2 2 0 002 2h8a2 2 0 002-2v-4H6z"></path>
    <path d="M18.5 5.5V4a2 2 0 012-2h.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H19a.5.5 0 01-.5-.5z"></path>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function DesignSystem() {
  return (
    <div className="p-6 bg-gray-50 font-sans max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">로컬리티(Locali-Tea) 디자인 시스템</h1>
        <Link href="/">
          <Button variant="outline" size="sm">
            홈으로 돌아가기
          </Button>
        </Link>
      </div>
      
      {/* 색상 팔레트 섹션 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-200">1. 색상 시스템</h2>
        
        {/* 브랜드 색상 */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3 text-gray-700">브랜드 색상</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="flex flex-col">
              <div className="h-16 bg-primary rounded-t-lg"></div>
              <div className="bg-white p-2 rounded-b-lg shadow-sm text-sm border border-gray-200 border-t-0">
                <p className="font-medium">프라이머리</p>
                <p className="text-gray-500">#68A66F</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-16 bg-secondary rounded-t-lg"></div>
              <div className="bg-white p-2 rounded-b-lg shadow-sm text-sm border border-gray-200 border-t-0">
                <p className="font-medium">세컨더리</p>
                <p className="text-gray-500">#E57373</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-16 bg-accent rounded-t-lg"></div>
              <div className="bg-white p-2 rounded-b-lg shadow-sm text-sm border border-gray-200 border-t-0">
                <p className="font-medium">액센트</p>
                <p className="text-gray-500">#BA68C8</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-16 bg-highlight rounded-t-lg"></div>
              <div className="bg-white p-2 rounded-b-lg shadow-sm text-sm border border-gray-200 border-t-0">
                <p className="font-medium">하이라이트</p>
                <p className="text-gray-500">#FFD54F</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-16 bg-dark rounded-t-lg"></div>
              <div className="bg-white p-2 rounded-b-lg shadow-sm text-sm border border-gray-200 border-t-0">
                <p className="font-medium">다크</p>
                <p className="text-gray-500">#1F2937</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 차 카테고리 색상 */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3 text-gray-700">차 카테고리 색상</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-700">녹차</h4>
              <div className="grid grid-cols-5 gap-1 mb-2">
                <div className="h-8 bg-tea-green-light rounded-l"></div>
                <div className="h-8 bg-green-100"></div>
                <div className="h-8 bg-green-200"></div>
                <div className="h-8 bg-green-300"></div>
                <div className="h-8 bg-primary rounded-r"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>#ECFDF5</span>
                <span>#68A66F</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-700">홍차</h4>
              <div className="grid grid-cols-5 gap-1 mb-2">
                <div className="h-8 bg-tea-black-light rounded-l"></div>
                <div className="h-8 bg-red-100"></div>
                <div className="h-8 bg-red-200"></div>
                <div className="h-8 bg-red-300"></div>
                <div className="h-8 bg-secondary rounded-r"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>#FEF2F2</span>
                <span>#E57373</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-700">꽃차</h4>
              <div className="grid grid-cols-5 gap-1 mb-2">
                <div className="h-8 bg-tea-flower-light rounded-l"></div>
                <div className="h-8 bg-purple-100"></div>
                <div className="h-8 bg-purple-200"></div>
                <div className="h-8 bg-purple-300"></div>
                <div className="h-8 bg-accent rounded-r"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>#F5F3FF</span>
                <span>#BA68C8</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-700">발효차</h4>
              <div className="grid grid-cols-5 gap-1 mb-2">
                <div className="h-8 bg-tea-fermented-light rounded-l"></div>
                <div className="h-8 bg-yellow-100"></div>
                <div className="h-8 bg-yellow-200"></div>
                <div className="h-8 bg-yellow-300"></div>
                <div className="h-8 bg-highlight rounded-r"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>#FFFBEB</span>
                <span>#FFD54F</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 그라데이션 색상 */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3 text-gray-700">그라데이션 색상</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <div className="h-20 rounded-t-lg bg-main-gradient"></div>
              <div className="bg-white p-3 rounded-b-lg shadow-sm text-sm border border-gray-200 border-t-0">
                <p className="font-medium">메인 그라데이션</p>
                <p className="text-gray-500">녹차-홍차 블렌드 (헤더, 배너)</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-20 rounded-t-lg bg-action-gradient"></div>
              <div className="bg-white p-3 rounded-b-lg shadow-sm text-sm border border-gray-200 border-t-0">
                <p className="font-medium">액션 그라데이션</p>
                <p className="text-gray-500">버튼, 프로그레스 바</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-20 rounded-t-lg bg-sub-gradient"></div>
              <div className="bg-white p-3 rounded-b-lg shadow-sm text-sm border border-gray-200 border-t-0">
                <p className="font-medium">서브 그라데이션</p>
                <p className="text-gray-500">카드 배경, 리스트 아이템</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 차 종류별 그라데이션 */}
        <div>
          <h3 className="text-lg font-medium mb-3 text-gray-700">차 카테고리 그라데이션</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <div className="h-20 rounded-t-lg bg-green-tea-gradient"></div>
              <div className="bg-white p-3 rounded-b-lg shadow-sm text-sm border border-gray-200 border-t-0">
                <p className="font-medium">녹차 그라데이션</p>
                <p className="text-gray-500">녹차 관련 카드 및 필터</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-20 rounded-t-lg bg-black-tea-gradient"></div>
              <div className="bg-white p-3 rounded-b-lg shadow-sm text-sm border border-gray-200 border-t-0">
                <p className="font-medium">홍차 그라데이션</p>
                <p className="text-gray-500">홍차 관련 카드 및 필터</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-20 rounded-t-lg bg-flower-tea-gradient"></div>
              <div className="bg-white p-3 rounded-b-lg shadow-sm text-sm border border-gray-200 border-t-0">
                <p className="font-medium">꽃차 그라데이션</p>
                <p className="text-gray-500">꽃차 관련 카드 및 필터</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-20 rounded-t-lg bg-fermented-tea-gradient"></div>
              <div className="bg-white p-3 rounded-b-lg shadow-sm text-sm border border-gray-200 border-t-0">
                <p className="font-medium">발효차 그라데이션</p>
                <p className="text-gray-500">발효차 관련 카드 및 필터</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 타이포그래피 섹션 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-200">2. 타이포그래피</h2>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <div className="space-y-4">
            <div className="pb-3 border-b border-gray-100">
              <div className="text-heading-1">헤딩 1 (24px)</div>
              <p className="text-sm text-gray-500 mt-1">메인 페이지 타이틀, 중요 섹션 헤더</p>
            </div>
            <div className="pb-3 border-b border-gray-100">
              <div className="text-heading-2">헤딩 2 (20px)</div>
              <p className="text-sm text-gray-500 mt-1">섹션 타이틀, 카드 헤더</p>
            </div>
            <div className="pb-3 border-b border-gray-100">
              <div className="text-heading-3">헤딩 3 (18px)</div>
              <p className="text-sm text-gray-500 mt-1">서브 섹션 타이틀, 중요 리스트 아이템</p>
            </div>
            <div className="pb-3 border-b border-gray-100">
              <div className="text-sub-heading">서브 헤딩 (16px)</div>
              <p className="text-sm text-gray-500 mt-1">강조 텍스트, 중요 안내 문구</p>
            </div>
            <div className="pb-3 border-b border-gray-100">
              <div className="text-body">본문 텍스트 (16px)</div>
              <p className="text-sm text-gray-500 mt-1">기본 텍스트, 설명문</p>
            </div>
            <div className="pb-3 border-b border-gray-100">
              <div className="text-small">작은 텍스트 (14px)</div>
              <p className="text-sm text-gray-500 mt-1">보조 텍스트, 상세 정보</p>
            </div>
            <div>
              <div className="text-caption">캡션 (12px)</div>
              <p className="text-sm text-gray-500 mt-1">레이블, 시간 표시, 메타 정보</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 버튼 컴포넌트 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-200">3. 버튼</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-gray-700">단색 버튼</h3>
            <div className="space-y-3">
              <Button variant="primary" fullWidth>프라이머리 버튼</Button>
              <Button variant="secondary" fullWidth>세컨더리 버튼</Button>
              <Button variant="outline" fullWidth>아웃라인 버튼</Button>
              <Button variant="neutral" fullWidth>중립 버튼</Button>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-gray-700">그라데이션 버튼</h3>
            <div className="space-y-3">
              <Button variant="gradient" fullWidth>그라데이션 버튼</Button>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
          <h3 className="text-lg font-medium mb-3 text-gray-700">버튼 상태</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">기본</p>
              <Button variant="primary">버튼</Button>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">호버</p>
              <Button variant="primary" className="hover:bg-primary-600">버튼</Button>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">포커스</p>
              <Button variant="primary" className="focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">버튼</Button>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">비활성화</p>
              <Button variant="primary" disabled>버튼</Button>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium mb-3 text-gray-700">아이콘 버튼</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" className="flex items-center gap-2">
              <HomeIcon />
              <span>홈으로</span>
            </Button>
            <Button variant="secondary" className="flex items-center gap-2">
              <TeaCupIcon />
              <span>차 정보</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <CheckIcon />
              <span>선택</span>
            </Button>
            <button className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center shadow-button">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      {/* 태그와 배지 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-200">4. 태그 & 배지</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-gray-700">태그</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tag-green">녹차</span>
              <span className="tag-black">홍차</span>
              <span className="tag-flower">꽃차</span>
              <span className="tag-fermented">발효차</span>
              <span className="tag bg-gray-100 text-gray-700 border border-gray-200">일반</span>
            </div>
            
            <h4 className="text-sm font-medium mt-4 mb-2 text-gray-700">태그 응용</h4>
            <div className="flex flex-wrap gap-2">
              <span className="tag-green flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
                보성 녹차
              </span>
              <span className="tag-black flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
                다즐링 홍차
              </span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-gray-700">배지</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-tea-green-light rounded-full flex items-center justify-center mb-1 border border-green-100">
                  <span className="text-green-700 text-xl">🍵</span>
                </div>
                <p className="text-xs text-gray-600">녹차</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-tea-black-light rounded-full flex items-center justify-center mb-1 border border-red-100">
                  <span className="text-red-700 text-xl">🍂</span>
                </div>
                <p className="text-xs text-gray-600">홍차</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-tea-flower-light rounded-full flex items-center justify-center mb-1 border border-purple-100">
                  <span className="text-purple-700 text-xl">🌸</span>
                </div>
                <p className="text-xs text-gray-600">꽃차</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-tea-fermented-light rounded-full flex items-center justify-center mb-1 border border-yellow-100">
                  <span className="text-yellow-700 text-xl">🍯</span>
                </div>
                <p className="text-xs text-gray-600">발효차</p>
              </div>
            </div>
            
            <h4 className="text-sm font-medium mt-4 mb-2 text-gray-700">배지 사이즈</h4>
            <div className="flex items-end gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-tea-green-light rounded-full flex items-center justify-center mb-1 border border-green-100">
                  <span className="text-green-700 text-sm">🍵</span>
                </div>
                <p className="text-xs text-gray-600">Small</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-tea-green-light rounded-full flex items-center justify-center mb-1 border border-green-100">
                  <span className="text-green-700 text-xl">🍵</span>
                </div>
                <p className="text-xs text-gray-600">Medium</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-tea-green-light rounded-full flex items-center justify-center mb-1 border border-green-100">
                  <span className="text-green-700 text-2xl">🍵</span>
                </div>
                <p className="text-xs text-gray-600">Large</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 알림 상태 표시 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-200">5. 알림 & 상태</h2>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium mb-3 text-gray-700">알림 배너</h3>
          <div className="space-y-3">
            <div className="alert-success">
              <CheckIcon />
              <p className="ml-2 text-sm">방문 인증이 완료되었습니다.</p>
            </div>
            
            <div className="alert-warning">
              <AlertIcon />
              <p className="ml-2 text-sm">운영 시간이 변경되었습니다.</p>
            </div>
            
            <div className="alert-error">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="ml-2 text-sm">위치 정보를 확인할 수 없습니다.</p>
            </div>
            
            <div className="alert-info">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="ml-2 text-sm">새로운 이벤트가 등록되었습니다.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 카드 컴포넌트 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-200">6. 카드</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-700">정보 카드</h3>
            <div className="card">
              <div className="card-image"></div>
              <div className="card-content">
                <div className="flex items-center gap-2 mb-2">
                  <span className="tag-green">녹차</span>
                  <span className="tag bg-gray-100 text-gray-700 border border-gray-200">힐링</span>
                </div>
                <h4 className="card-title">보성 녹차밭 투어</h4>
                <p className="card-location">전라남도 보성군</p>
                <p className="card-description">힐링과 전통이 함께하는 보성 녹차밭에서 전통 차 체험을 즐겨보세요.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-700">지역 카드</h3>
            <div className="rounded-lg shadow-sm bg-green-tea-gradient p-4 border border-opacity-5 border-black">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-800 text-sm">전라도</h4>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className="text-green-700">→</span>
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-1">녹차의 고장</p>
              <div className="mt-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center">
                  <TeaCupIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 폼 요소 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-200">7. 폼 요소</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-gray-700">입력 필드</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                <input id="name" type="text" className="input" placeholder="이름을 입력하세요" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                <input id="email" type="email" className="input" placeholder="example@email.com" />
              </div>
              
              <div>
                <label htmlFor="disabled" className="block text-sm font-medium text-gray-700 mb-1">비활성화 필드</label>
                <input id="disabled" type="text" className="input" value="비활성화 상태" disabled />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-gray-700">선택 요소</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">체크박스</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="checkbox1" type="checkbox" className="h-4 w-4 text-primary border-gray-300 rounded" />
                    <label htmlFor="checkbox1" className="ml-2 text-sm text-gray-700">녹차</label>
                  </div>
                  <div className="flex items-center">
                    <input id="checkbox2" type="checkbox" className="h-4 w-4 text-primary border-gray-300 rounded" />
                    <label htmlFor="checkbox2" className="ml-2 text-sm text-gray-700">홍차</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">라디오 버튼</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="radio1" name="radio-group" type="radio" className="h-4 w-4 text-primary border-gray-300" />
                    <label htmlFor="radio1" className="ml-2 text-sm text-gray-700">꽃차</label>
                  </div>
                  <div className="flex items-center">
                    <input id="radio2" name="radio-group" type="radio" className="h-4 w-4 text-primary border-gray-300" />
                    <label htmlFor="radio2" className="ml-2 text-sm text-gray-700">발효차</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="select" className="block text-sm font-medium text-gray-700 mb-1">지역 선택</label>
                <select id="select" className="input" defaultValue="">
                  <option value="" disabled>지역을 선택하세요</option>
                  <option value="jeonnam">전라남도</option>
                  <option value="jeju">제주도</option>
                  <option value="gyeongnam">경상남도</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 애니메이션 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-200">8. 애니메이션</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-gray-700">기본 애니메이션</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg text-center">
                <div className="animate-pulse w-12 h-12 bg-primary rounded-full mx-auto"></div>
                <p className="text-sm mt-2">Pulse</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg text-center">
                <div className="animate-bounce w-12 h-12 bg-secondary rounded-full mx-auto flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <p className="text-sm mt-2">Bounce</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg text-center">
                <div className="animate-spin w-12 h-12 rounded-full border-4 border-gray-200 border-t-primary mx-auto"></div>
                <p className="text-sm mt-2">Spin</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg text-center">
                <div className="animate-pulse-slow w-12 h-12 bg-accent rounded-full mx-auto"></div>
                <p className="text-sm mt-2">Pulse Slow</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-gray-700">커스텀 애니메이션</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg text-center">
                <div className="animate-fade-in w-12 h-12 bg-highlight rounded-lg mx-auto"></div>
                <p className="text-sm mt-2">Fade In</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg text-center overflow-hidden">
                <div className="animate-slide-up w-12 h-12 bg-primary rounded-lg mx-auto"></div>
                <p className="text-sm mt-2">Slide Up</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-center my-8">
        <Link href="/">
          <Button variant="primary">홈으로 돌아가기</Button>
        </Link>
      </div>
    </div>
  );
}
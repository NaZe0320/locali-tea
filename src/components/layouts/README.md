# Layout 구조 정리

## 개요
레이아웃 시스템을 단순화하여 불필요한 중복을 제거하고 유지보수성을 개선했습니다.

## 컴포넌트 구조

### 1. AppShell (핵심 컴포넌트)
- **역할**: 모바일과 데스크탑 레이아웃을 모두 처리하는 통합 레이아웃 컴포넌트
- **특징**:
  - `variant` prop으로 모바일/데스크탑 레이아웃 전환
  - 헤더, 푸터, 메인 콘텐츠 영역 관리
  - 키보드 숨김 옵션 지원
- **Props**:
  - `variant?: 'mobile' | 'desktop'` - 레이아웃 타입
  - `header?: React.ReactNode` - 헤더 컨텐츠
  - `footer?: React.ReactNode` - 푸터 컨텐츠
  - `hideOnKeyboard?: boolean` - 키보드 표시 시 푸터 숨김
  - `showMobileHeader?: boolean` - 모바일 헤더 표시 여부

### 2. ResponsiveLayout (래퍼 컴포넌트)
- **역할**: 화면 크기에 따라 자동으로 적절한 레이아웃 선택
- **특징**:
  - `useIsDesktop` 훅을 사용하여 반응형 처리
  - AppShell을 내부적으로 사용
- **Props**:
  - `header?: React.ReactNode`
  - `footer?: React.ReactNode`
  - `hideOnKeyboard?: boolean`

### 3. ResponsiveContainer (유틸리티 컴포넌트)
- **역할**: 화면 크기별 최대 너비와 패딩 제어
- **특징**:
  - 모바일/태블릿/데스크탑 최대 너비 설정
  - 선택적 패딩 적용
- **Props**:
  - `maxWidth?: 'mobile' | 'tablet' | 'desktop' | 'none'`
  - `withPadding?: boolean`

### 4. BottomNavigation (독립 컴포넌트)
- **역할**: 하단 네비게이션 바 (범용)
- **특징**: 다른 레이아웃 컴포넌트와 독립적으로 사용 가능

### 5. MainBottomNavigation (메인 앱 네비게이션)
- **역할**: 메인 앱 전용 하단 네비게이션
- **특징**:
  - 홈, 탐색, 지도, 챌린지, 마이 메뉴 포함
  - 현재 경로에 따른 활성 상태 표시
  - SVG 아이콘 사용으로 깔끔한 디자인
- **메뉴 구성**:
  - 홈: `/main`
  - 탐색: `/main/explore`
  - 지도: `/main/map`
  - 챌린지: `/main/challenges`
  - 마이: `/main/profile`

## 사용 예시

### 기본 사용
```tsx
import ResponsiveLayout from '../components/layouts/ResponsiveLayout';

export default function MyPage() {
  return (
    <ResponsiveLayout
      header={<div>My Header</div>}
      footer={<div>My Footer</div>}
    >
      <div>페이지 콘텐츠</div>
    </ResponsiveLayout>
  );
}
```

### 메인 앱 페이지
```tsx
import ResponsiveLayout from '../components/layouts/ResponsiveLayout';
import MainBottomNavigation from '../components/layouts/MainBottomNavigation';

export default function MainPage() {
  return (
    <ResponsiveLayout
      header={
        <div className="py-4">
          <h1 className="text-xl font-bold text-primary">페이지 제목</h1>
        </div>
      }
      footer={<MainBottomNavigation />}
    >
      <div>메인 앱 콘텐츠</div>
    </ResponsiveLayout>
  );
}
```

### AppShell 직접 사용
```tsx
import AppShell from '../components/layouts/AppShell';

export default function MyPage() {
  return (
    <AppShell
      variant="mobile"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      hideOnKeyboard={true}
    >
      <div>콘텐츠</div>
    </AppShell>
  );
}
```

## 개선점

### 제거된 컴포넌트
- **MobileLayout**: AppShell로 통합
- **DesktopLayout**: AppShell로 통합

### 추가된 컴포넌트
- **MainBottomNavigation**: 메인 앱 전용 하단 네비게이션

### 개선사항
1. **코드 중복 제거**: 모바일/데스크탑 레이아웃 로직을 AppShell로 통합
2. **Props 일관성**: 모든 레이아웃에서 동일한 props 구조 사용
3. **유지보수성 향상**: 단일 컴포넌트에서 모든 레이아웃 로직 관리
4. **반응형 로직 중앙화**: useIsDesktop 훅을 통한 일관된 반응형 처리
5. **네비게이션 표준화**: 메인 앱에서 일관된 하단 네비게이션 제공

## 브레이크포인트
- **모바일**: `max-width: 767px`
- **데스크탑**: `min-width: 1024px`
- **태블릿**: `768px - 1023px` (중간 영역) 
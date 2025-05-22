import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 브랜드 메인 색상
        brand: {
          primary: '#68A66F',      // 녹차 그린
          secondary: '#E57373',    // 홍차 레드  
          accent: '#BA68C8',       // 꽃차 퍼플
          highlight: '#FFD54F',    // 발효차 옐로우
          dark: '#1F2937',         // 다크
        },
        
        // 차 카테고리별 색상 팔레트
        tea: {
          green: {
            50: '#ECFDF5',
            100: '#D1FAE5',
            200: '#A7F3D0',
            300: '#6EE7B7',
            400: '#34D399',
            500: '#10B981',
            600: '#68A66F',  // 브랜드 프라이머리와 연결
            700: '#047857',
            800: '#065F46',
            900: '#064E3B',
          },
          red: {
            50: '#FEF2F2',
            100: '#FEE2E2',
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#E57373',  // 브랜드 세컨더리와 연결
            500: '#EF4444',
            600: '#DC2626',
            700: '#B91C1C',
            800: '#991B1B',
            900: '#7F1D1D',
          },
          purple: {
            50: '#F5F3FF',
            100: '#EDE9FE',
            200: '#DDD6FE',
            300: '#BA68C8',  // 브랜드 액센트와 연결
            400: '#A855F7',
            500: '#8B5CF6',
            600: '#7C3AED',
            700: '#6D28D9',
            800: '#5B21B6',
            900: '#4C1D95',
          },
          yellow: {
            50: '#FFFBEB',
            100: '#FEF3C7',
            200: '#FDE68A',
            300: '#FFD54F',  // 브랜드 하이라이트와 연결
            400: '#FBBF24',
            500: '#F59E0B',
            600: '#D97706',
            700: '#B45309',
            800: '#92400E',
            900: '#78350F',
          },
        },
        
        // 기능별 색상
        success: '#4CAF50',
        error: '#F44336',
        warning: '#FFC107',
        info: '#2196F3',
      },
      
      // 그라데이션 배경 클래스
      backgroundImage: {
        // 메인 그라데이션들
        'gradient-main': 'linear-gradient(to right, #e8f5e9, #ffebee)',
        'gradient-action': 'linear-gradient(to right, #9ebd9e, #a9bd9e)',
        'gradient-sub': 'linear-gradient(to bottom, #f8fdf8, #f9f9f9)',
        
        // 차 카테고리별 그라데이션
        'gradient-tea-green': 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
        'gradient-tea-red': 'linear-gradient(135deg, #ffebee 0%, #fce4ec 100%)',
        'gradient-tea-purple': 'linear-gradient(135deg, #f3e5f5 0%, #ede7f6 100%)',
        'gradient-tea-yellow': 'linear-gradient(135deg, #fff8e1 0%, #fffde7 100%)',
        
        // 액션 그라데이션 변형
        'gradient-action-secondary': 'linear-gradient(to right, #e57373, #ef9a9a)',
        
        // 카드용 그라데이션
        'gradient-card-green': 'linear-gradient(to br, #D1FAE5, #A7F3D0)',
      },
      
      // 폰트 패밀리
      fontFamily: {
        pretendard: ['Pretendard', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'sf-pro': ['SF Pro Display', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      
      // 커스텀 박스 그림자
      boxShadow: {
        'tea-card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'tea-card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      
      // 애니메이션
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      
      // 반응형 컨테이너 사이즈
      maxWidth: {
        'tea-container': '1200px',
        'tea-content': '800px',
      },
      
      // 커스텀 간격
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}

export default config
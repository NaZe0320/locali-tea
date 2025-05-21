import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 브랜드 색상
        primary: {
          DEFAULT: '#68A66F', // 녹차 그린
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#68A66F',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        secondary: {
          DEFAULT: '#E57373', // 홍차 레드
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#E57373',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        accent: {
          DEFAULT: '#BA68C8', // 꽃차 퍼플
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#BA68C8',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        highlight: {
          DEFAULT: '#FFD54F', // 발효차 옐로우
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#FFD54F',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        dark: {
          DEFAULT: '#1F2937',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // 차 카테고리 색상
        tea: {
          green: {
            light: '#ECFDF5',
            DEFAULT: '#68A66F',
          },
          black: {
            light: '#FEF2F2',
            DEFAULT: '#E57373',
          },
          flower: {
            light: '#F5F3FF',
            DEFAULT: '#BA68C8',
          },
          fermented: {
            light: '#FFFBEB',
            DEFAULT: '#FFD54F',
          },
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'SF Pro Display', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'heading-2': ['20px', { lineHeight: '28px', fontWeight: '700' }],
        'heading-3': ['18px', { lineHeight: '24px', fontWeight: '600' }],
        'sub-heading': ['16px', { lineHeight: '22px', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'elevated': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(to right, #e8f5e9, #ffebee)',
        'action-gradient': 'linear-gradient(to right, #9ebd9e, #a9bd9e)',
        'sub-gradient': 'linear-gradient(to bottom, #f8fdf8, #f9f9f9)',
        'green-tea-gradient': 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
        'black-tea-gradient': 'linear-gradient(135deg, #ffebee 0%, #fce4ec 100%)',
        'flower-tea-gradient': 'linear-gradient(135deg, #f3e5f5 0%, #ede7f6 100%)',
        'fermented-tea-gradient': 'linear-gradient(135deg, #fff8e1 0%, #fffde7 100%)',
      },
      borderRadius: {
        'card': '12px',
        'tag': '16px',
        'badge': '50%',
        'button': '8px',
        'input': '8px',
      },
      screens: {
        'xs': '360px',     // 작은 모바일
        'sm': '640px',     // 큰 모바일
        'md': '768px',     // 태블릿
        'lg': '1024px',    // 작은 데스크탑
        'xl': '1280px',    // 중간 데스크탑
        '2xl': '1536px',   // 큰 데스크탑
      },
      maxWidth: {
        'mobile': '480px',
        'tablet': '768px',
        'desktop': '1280px',
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      zIndex: {
        'behind': '-1',
        'modal': '50',
        'overlay': '40',
        'dropdown': '30',
        'header': '20',
        'footer': '10',
      },
      gridTemplateColumns: {
        'auto-fill-cards': 'repeat(auto-fill, minmax(280px, 1fr))',
        'auto-fit-cards': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};

export default config;

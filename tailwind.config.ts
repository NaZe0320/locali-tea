import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#68A66F',      // 녹차 그린
          secondary: '#E57373',    // 홍차 레드  
          accent: '#BA68C8',       // 꽃차 퍼플
          highlight: '#FFD54F',    // 발효차 옐로우
          dark: '#1F2937',         // 다크
        },
        tea: {
          green: {
            50: '#ECFDF5',
            600: '#68A66F',
            800: '#065F46',
          },
          red: {
            50: '#FEF2F2',
            400: '#E57373',
            700: '#B91C1C',
          },
          purple: {
            50: '#F5F3FF',
            300: '#BA68C8',
            700: '#6D28D9',
          },
          yellow: {
            50: '#FFFBEB',
            300: '#FFD54F',
            700: '#B45309',
          },
        },
      },
      // 그라데이션 배경 추가
      backgroundImage: {
        'gradient-main': 'linear-gradient(to right, #e8f5e9, #ffebee)',
        'gradient-action': 'linear-gradient(to right, #9ebd9e, #a9bd9e)',
      },
      // 폰트 패밀리 추가
      fontFamily: {
        pretendard: ['Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

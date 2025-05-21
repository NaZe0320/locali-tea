// 디자인 토큰을 중앙에서 관리하는 파일

export const colors = {
    primary: '#68A66F',
    secondary: '#E57373',
    accent: '#BA68C8',
    highlight: '#FFD54F',
    dark: '#1F2937',
    
    teaGreen: {
      light: '#ECFDF5',
      default: '#68A66F',
    },
    teaBlack: {
      light: '#FEF2F2',
      default: '#E57373',
    },
    teaFlower: {
      light: '#F5F3FF',
      default: '#BA68C8',
    },
    teaFermented: {
      light: '#FFFBEB',
      default: '#FFD54F',
    },
  };
  
  export const gradients = {
    main: 'linear-gradient(to right, #e8f5e9, #ffebee)',
    action: 'linear-gradient(to right, #9ebd9e, #a9bd9e)',
    sub: 'linear-gradient(to bottom, #f8fdf8, #f9f9f9)',
    greenTea: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
    blackTea: 'linear-gradient(135deg, #ffebee 0%, #fce4ec 100%)',
    flowerTea: 'linear-gradient(135deg, #f3e5f5 0%, #ede7f6 100%)',
    fermentedTea: 'linear-gradient(135deg, #fff8e1 0%, #fffde7 100%)',
  };
  
  export const typography = {
    fontFamily: 'Pretendard, "SF Pro Display", system-ui, sans-serif',
    
    heading1: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 700,
    },
    heading2: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 700,
    },
    heading3: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 600,
    },
    subHeading: {
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: 500,
    },
    body: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    small: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
    },
    caption: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 400,
    },
  };
  
  export const spacing = {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  };
  
  export const borderRadius = {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  };
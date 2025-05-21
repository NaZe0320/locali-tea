import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      const updateMatches = () => {
        setMatches(media.matches);
      };
      
      // 초기값 설정
      updateMatches();
      
      // 리스너 등록
      media.addEventListener('change', updateMatches);
      
      // 언마운트 시 리스너 제거
      return () => {
        media.removeEventListener('change', updateMatches);
      };
    }
  }, [query]);
  
  return matches;
};

export const useIsMobile = (): boolean => {
  return useMediaQuery('(max-width: 767px)');
};

export const useIsDesktop = (): boolean => {
  return useMediaQuery('(min-width: 1024px)');
};

export default useMediaQuery;
'use client'

import React from 'react';
import { useIsDesktop } from '../../hooks/useMediaQuery';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  children,
  header,
}) => {
  const isDesktop = useIsDesktop();
  
  return (
    <div className={`min-h-screen ${isDesktop ? 'desktop-layout' : 'mobile-layout'}`}>
      {header && (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          {header}
        </header>
      )}
      <main className={`
        ${isDesktop 
          ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' 
          : 'px-4 pb-16'
        }
      `}>
        {children}
      </main>
    </div>
  );
};

export default ResponsiveLayout;
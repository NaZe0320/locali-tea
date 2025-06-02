'use client'

import React from 'react';
import AppShell from './AppShell';
import { useIsDesktop } from '../../hooks/useMediaQuery';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  children,
  header,
  footer,
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
      {footer && (
        <footer className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-t">
          {footer}
        </footer>
      )}
    </div>
  );
};

export default ResponsiveLayout;
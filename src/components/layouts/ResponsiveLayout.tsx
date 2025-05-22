'use client'

import React from 'react';
import MobileLayout from './MobileLayout';
import DesktopLayout from './DesktopLayout';
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
  
  if (isDesktop) {
    return (
      <DesktopLayout  >
        {children}
      </DesktopLayout>
    );
  }
  
  return (
    <MobileLayout header={header}>
      {children}
    </MobileLayout>
  );
};

export default ResponsiveLayout;
'use client'

import React from 'react';
import AppShell from './AppShell';
import { useIsDesktop } from '../../hooks/useMediaQuery';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  hideOnKeyboard?: boolean;
}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  children,
  header,
  footer,
  hideOnKeyboard = true,
}) => {
  const isDesktop = useIsDesktop();
  
  return (
    <AppShell
      header={header}
      footer={footer}
      hideOnKeyboard={hideOnKeyboard}
      variant={isDesktop ? 'desktop' : 'mobile'}
    >
      {children}
    </AppShell>
  );
};

export default ResponsiveLayout;
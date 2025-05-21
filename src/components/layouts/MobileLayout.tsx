import React from 'react';
import AppShell from './AppShell';
import ResponsiveContainer from './ResponsiveContainer';

interface MobileLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({
  children,
  header,
}) => {
  return (
    <AppShell
      header={header}
      hideOnKeyboard={true}
    >
      <ResponsiveContainer maxWidth="mobile">
        {children}
      </ResponsiveContainer>
    </AppShell>
  );
};

export default MobileLayout;
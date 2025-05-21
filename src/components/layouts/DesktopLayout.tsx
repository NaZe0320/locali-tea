import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';

interface DesktopLayoutProps {
  children: React.ReactNode;
}

export const DesktopLayout: React.FC<DesktopLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 메인 콘텐츠 */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
          <div className="lg:hidden">
            <h1 className="text-xl font-bold text-primary">Locali-Tea</h1>
          </div>
        </header>
        
        <main className="flex-1 p-6">
          <ResponsiveContainer maxWidth="desktop">
            {children}
          </ResponsiveContainer>
        </main>
      </div>
    </div>
  );
};

export default DesktopLayout;
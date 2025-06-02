import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';

interface AppShellProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  hideOnKeyboard?: boolean;
  variant?: 'mobile' | 'desktop';
  showMobileHeader?: boolean;
}

export const AppShell: React.FC<AppShellProps> = ({
  children,
  header,
  footer,
  hideOnKeyboard = true,
  variant = 'mobile',
  showMobileHeader = true,
}) => {
  if (variant === 'desktop') {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <div className="flex-1 flex flex-col">
          {/* 데스크탑 헤더 */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
            <ResponsiveContainer withPadding={false}>
              {header || (
                <h1 className="text-xl font-bold text-primary">Locali-Tea</h1>
              )}
            </ResponsiveContainer>
          </header>
          
          {/* 데스크탑 메인 콘텐츠 */}
          <main className="flex-1 p-6">
            <ResponsiveContainer maxWidth="desktop">
              {children}
            </ResponsiveContainer>
          </main>
          
          {/* 데스크탑 푸터 */}
          {footer && (
            <footer className="bg-white border-t border-gray-200">
              <ResponsiveContainer>
                {footer}
              </ResponsiveContainer>
            </footer>
          )}
        </div>
      </div>
    );
  }

  // 모바일 레이아웃
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 모바일 헤더 */}
      {header && showMobileHeader && (
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
          <ResponsiveContainer>
            {header}
          </ResponsiveContainer>
        </header>
      )}
      
      {/* 모바일 메인 콘텐츠 */}
      <main className="flex-1">
        <ResponsiveContainer maxWidth="mobile">
          {children}
        </ResponsiveContainer>
      </main>
      
      {/* 모바일 푸터 - 키보드 표시 시 숨김 옵션 */}
      {footer && (
        <footer className={`sticky bottom-0 z-10 bg-white border-t border-gray-200 ${hideOnKeyboard ? 'footer-hide-on-keyboard' : ''}`}>
          <ResponsiveContainer>
            {footer}
          </ResponsiveContainer>
        </footer>
      )}
    </div>
  );
};

export default AppShell;
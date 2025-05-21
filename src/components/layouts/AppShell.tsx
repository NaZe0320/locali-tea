import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';

interface AppShellProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  hideOnKeyboard?: boolean;
}

export const AppShell: React.FC<AppShellProps> = ({
  children,
  header,
  footer,
  hideOnKeyboard = true,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 영역 */}
      {header && (
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
          <ResponsiveContainer>
            {header}
          </ResponsiveContainer>
        </header>
      )}
      
      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* 푸터 영역 - 키보드 표시 시 숨김 옵션 */}
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
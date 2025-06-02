'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface BottomNavigationProps {
  className?: string;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  className = '' 
}) => {
  const pathname = usePathname();

  const navItems = [
    {
      id: 'home',
      label: '홈',
      href: '/main',
      icon: (isActive: boolean) => (
        <svg 
          className={`w-6 h-6 ${isActive ? 'text-brand-primary' : 'text-gray-500'}`} 
          fill={isActive ? 'currentColor' : 'none'} 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={isActive ? 0 : 2} 
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
          />
        </svg>
      )
    },
    {
      id: 'explore',
      label: '탐색',
      href: '/main/explore',
      icon: (isActive: boolean) => (
        <svg 
          className={`w-6 h-6 ${isActive ? 'text-brand-primary' : 'text-gray-500'}`} 
          fill={isActive ? 'currentColor' : 'none'} 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={isActive ? 0 : 2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      )
    },
    {
      id: 'map',
      label: '지도',
      href: '/main/map',
      icon: (isActive: boolean) => (
        <svg 
          className={`w-6 h-6 ${isActive ? 'text-brand-primary' : 'text-gray-500'}`} 
          fill={isActive ? 'currentColor' : 'none'} 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={isActive ? 0 : 2} 
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={isActive ? 0 : 2} 
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
          />
        </svg>
      )
    },
    {
      id: 'challenges',
      label: '챌린지',
      href: '/main/challenges',
      icon: (isActive: boolean) => (
        <svg 
          className={`w-6 h-6 ${isActive ? 'text-brand-primary' : 'text-gray-500'}`} 
          fill={isActive ? 'currentColor' : 'none'} 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={isActive ? 0 : 2} 
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" 
          />
        </svg>
      )
    },
    {
      id: 'profile',
      label: '프로필',
      href: '/main/profile',
      icon: (isActive: boolean) => (
        <svg 
          className={`w-6 h-6 ${isActive ? 'text-brand-primary' : 'text-gray-500'}`} 
          fill={isActive ? 'currentColor' : 'none'} 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={isActive ? 0 : 2} 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
          />
        </svg>
      )
    }
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/main') {
      return pathname === '/main';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`bg-white border-t border-gray-200 ${className}`}>
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = isActiveRoute(item.href);
          
          return (
            <Link 
              key={item.id} 
              href={item.href}
              replace
              className="flex flex-col items-center justify-center py-2 px-1 min-w-0 flex-1 transition-colors"
            >
              <div className="mb-1">
                {item.icon(isActive)}
              </div>
              <span 
                className={`text-xs font-medium truncate ${
                  isActive ? 'text-brand-primary' : 'text-gray-500'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation; 
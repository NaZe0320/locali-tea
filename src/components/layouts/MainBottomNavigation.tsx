import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

// 아이콘 컴포넌트들
const HomeIcon = ({ isActive }: { isActive: boolean }) => (
  <svg 
    className={`w-6 h-6 ${isActive ? 'fill-current' : 'fill-none'}`} 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    strokeWidth={isActive ? 1 : 2}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
    />
  </svg>
);

const ExploreIcon = ({ isActive }: { isActive: boolean }) => (
  <svg 
    className={`w-6 h-6 ${isActive ? 'fill-current' : 'fill-none'}`} 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    strokeWidth={isActive ? 1 : 2}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
    />
  </svg>
);

const MapIcon = ({ isActive }: { isActive: boolean }) => (
  <svg 
    className={`w-6 h-6 ${isActive ? 'fill-current' : 'fill-none'}`} 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    strokeWidth={isActive ? 1 : 2}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" 
    />
  </svg>
);

const ChallengeIcon = ({ isActive }: { isActive: boolean }) => (
  <svg 
    className={`w-6 h-6 ${isActive ? 'fill-current' : 'fill-none'}`} 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    strokeWidth={isActive ? 1 : 2}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
    />
  </svg>
);

const ProfileIcon = ({ isActive }: { isActive: boolean }) => (
  <svg 
    className={`w-6 h-6 ${isActive ? 'fill-current' : 'fill-none'}`} 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    strokeWidth={isActive ? 1 : 2}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
    />
  </svg>
);

interface NavItem {
  label: string;
  path: string;
  icon: (props: { isActive: boolean }) => React.ReactNode;
}

const navItems: NavItem[] = [
  {
    label: '홈',
    path: '/main',
    icon: HomeIcon,
  },
  {
    label: '탐색',
    path: '/main/explore',
    icon: ExploreIcon,
  },
  {
    label: '지도',
    path: '/main/map',
    icon: MapIcon,
  },
  {
    label: '챌린지',
    path: '/main/challenges',
    icon: ChallengeIcon,
  },
  {
    label: '마이',
    path: '/main/profile',
    icon: ProfileIcon,
  },
];

interface MainBottomNavigationProps {
  className?: string;
}

export const MainBottomNavigation: React.FC<MainBottomNavigationProps> = ({
  className,
}) => {
  const pathname = usePathname();
  
  return (
    <nav className={twMerge(
      'flex items-center justify-around py-2 bg-white border-t border-gray-200',
      className
    )}>
      {navItems.map((item) => {
        const isActive = pathname === item.path || 
          (item.path !== '/main' && pathname.startsWith(item.path));
        
        return (
          <Link
            key={item.path}
            href={item.path}
            className={twMerge(
              'flex flex-col items-center justify-center w-full py-2 transition-colors duration-200',
              isActive ? 'text-brand-primary' : 'text-gray-500 hover:text-gray-700'
            )}
          >
            <div className="mb-1">
              {item.icon({ isActive })}
            </div>
            <span className={twMerge(
              'text-xs font-medium',
              isActive ? 'text-brand-primary' : 'text-gray-500'
            )}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MainBottomNavigation; 
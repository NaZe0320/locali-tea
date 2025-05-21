import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface BottomNavigationProps {
  items: NavItem[];
  className?: string;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  items,
  className,
}) => {
  const pathname = usePathname();
  
  return (
    <nav className={twMerge('flex items-center justify-around py-2', className)}>
      {items.map((item, index) => {
        const isActive = pathname === item.path;
        
        return (
          <Link
            key={index}
            href={item.path}
            className={twMerge(
              'flex flex-col items-center justify-center w-full py-1',
              isActive ? 'text-primary' : 'text-gray-500'
            )}
          >
            <div className="h-6 w-6">{item.icon}</div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
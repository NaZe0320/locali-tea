import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'mobile' | 'tablet' | 'desktop' | 'none';
  withPadding?: boolean;
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className,
  maxWidth = 'mobile',
  withPadding = true,
}) => {
  const maxWidthClasses = {
    mobile: 'max-w-mobile',
    tablet: 'max-w-tablet',
    desktop: 'max-w-desktop',
    none: '',
  };
  
  const classes = twMerge(
    'w-full mx-auto',
    maxWidthClasses[maxWidth],
    withPadding ? 'px-4 sm:px-6 md:px-8' : '',
    className
  );
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
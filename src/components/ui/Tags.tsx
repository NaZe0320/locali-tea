import React from 'react';
import { twMerge } from 'tailwind-merge';

type TagVariant = 'green' | 'black' | 'flower' | 'fermented' | 'neutral';

interface TagProps {
  children: React.ReactNode;
  variant: TagVariant;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant,
  className,
}) => {
  const baseClasses = 'px-3 py-1 text-xs rounded-full inline-flex items-center';
  
  const variantClasses = {
    green: 'bg-tea-green-light text-primary-700 border border-primary-100',
    black: 'bg-tea-black-light text-secondary-700 border border-secondary-100',
    flower: 'bg-tea-flower-light text-accent-700 border border-accent-100',
    fermented: 'bg-tea-fermented-light text-highlight-700 border border-highlight-100',
    neutral: 'bg-gray-100 text-gray-700 border border-gray-200',
  };
  
  const classes = twMerge(
    baseClasses,
    variantClasses[variant],
    className
  );
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Tag;
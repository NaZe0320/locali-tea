import React from 'react';
import { twMerge } from 'tailwind-merge';

type BadgeVariant = 'green' | 'black' | 'flower' | 'fermented';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  icon: React.ReactNode;
  variant: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  label?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  icon,
  variant,
  size = 'md',
  className,
  label,
}) => {
  const baseClasses = 'rounded-full flex items-center justify-center';
  
  const variantClasses = {
    green: 'bg-tea-green-light border border-primary-100 text-primary-700',
    black: 'bg-tea-black-light border border-secondary-100 text-secondary-700',
    flower: 'bg-tea-flower-light border border-accent-100 text-accent-700',
    fermented: 'bg-tea-fermented-light border border-highlight-100 text-highlight-700',
  };
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
  };
  
  const classes = twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );
  
  return (
    <div className="flex flex-col items-center">
      <div className={classes}>
        {icon}
      </div>
      {label && <p className="text-xs text-gray-600 mt-1">{label}</p>}
    </div>
  );
};

export default Badge;
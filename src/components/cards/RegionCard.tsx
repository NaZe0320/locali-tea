import React from 'react';
import { twMerge } from 'tailwind-merge';

type RegionVariant = 'green' | 'black' | 'flower' | 'fermented';

interface RegionCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  variant: RegionVariant;
  className?: string;
  onClick?: () => void;
}

export const RegionCard: React.FC<RegionCardProps> = ({
  title,
  subtitle,
  icon,
  variant,
  className,
  onClick,
}) => {
  const baseClasses = 'rounded-lg shadow-sm p-4';
  
  const variantClasses = {
    green: 'bg-green-tea-gradient',
    black: 'bg-black-tea-gradient',
    flower: 'bg-flower-tea-gradient',
    fermented: 'bg-fermented-tea-gradient',
  };
  
  const classes = twMerge(
    baseClasses,
    variantClasses[variant],
    'border border-opacity-5 border-black',
    onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : '',
    className
  );
  
  return (
    <div className={classes} onClick={onClick}>
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
          <span className="text-green-700">→</span>
        </span>
      </div>
      <p className="text-xs text-gray-600 mt-1">{subtitle}</p>
      <div className="mt-4 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default RegionCard;
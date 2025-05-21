import React from 'react';
import { Tag } from '@/components/ui/Tags';
import { twMerge } from 'tailwind-merge';

interface TeaCardProps {
  image?: string;
  title: string;
  location: string;
  description: string;
  tags: Array<{
    label: string;
    variant: 'green' | 'black' | 'flower' | 'fermented' | 'neutral';
  }>;
  className?: string;
  onClick?: () => void;
}

export const TeaCard: React.FC<TeaCardProps> = ({
  image,
  title,
  location,
  description,
  tags,
  className,
  onClick,
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-card border border-gray-200 overflow-hidden';
  
  const classes = twMerge(
    baseClasses,
    onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : '',
    className
  );
  
  return (
    <div className={classes} onClick={onClick}>
      <div className="h-40 bg-gray-100">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          {tags.map((tag, index) => (
            <Tag key={index} variant={tag.variant}>
              {tag.label}
            </Tag>
          ))}
        </div>
        <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 mb-2">{location}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default TeaCard;
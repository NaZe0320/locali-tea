import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'neutral' | 'gradient';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  className,
  type = 'button',
}) => {
  const baseClasses = 'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-600 focus:ring-primary-500',
    secondary: 'bg-secondary text-white hover:bg-secondary-600 focus:ring-secondary-500',
    outline: 'bg-white text-dark-800 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
    neutral: 'bg-gray-100 text-dark-700 hover:bg-gray-200 focus:ring-gray-400',
    gradient: 'bg-action-gradient text-white rounded-full hover:opacity-90 focus:ring-primary-500',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-lg',
  };
  
  // 그라데이션 버튼은 항상 rounded-full 사용
  const roundedClass = variant === 'gradient' ? 'rounded-full' : '';
  
  const classes = twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    roundedClass,
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-50 cursor-not-allowed' : '',
    className
  );
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
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
  // 기본 버튼 스타일
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // 변형별 스타일
  const variantClasses = {
    primary: 'bg-brand-primary text-white hover:opacity-90 focus:ring-brand-primary',
    secondary: 'bg-brand-secondary text-white hover:opacity-90 focus:ring-brand-secondary',
    outline: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 focus:ring-gray-300',
    neutral: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300',
    gradient: 'bg-gradient-action text-white hover:opacity-90 focus:ring-brand-primary rounded-full',
  };
  
  // 크기별 스타일
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  const classes = twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
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
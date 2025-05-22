import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind CSS 클래스명을 조건부로 결합하고 충돌을 해결하는 유틸리티
 * 
 * @example
 * cn("px-2 py-1", condition && "bg-blue-500", "text-white")
 * cn("btn-primary", { "opacity-50": disabled })
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 차 카테고리에 따른 색상 클래스 반환
 */
export function getTeaColorClasses(category: string) {
  const colorMap = {
    green: {
      bg: "bg-tea-green-50",
      text: "text-tea-green-800", 
      border: "border-tea-green-100",
      gradient: "bg-gradient-green"
    },
    red: {
      bg: "bg-tea-red-50",
      text: "text-tea-red-700",
      border: "border-tea-red-100", 
      gradient: "bg-gradient-red"
    },
    purple: {
      bg: "bg-tea-purple-50",
      text: "text-tea-purple-700",
      border: "border-tea-purple-100",
      gradient: "bg-gradient-purple"
    },
    yellow: {
      bg: "bg-tea-yellow-50", 
      text: "text-tea-yellow-700",
      border: "border-tea-yellow-100",
      gradient: "bg-gradient-yellow"
    }
  };

  return colorMap[category as keyof typeof colorMap] || colorMap.green;
}

/**
 * 버튼 변형에 따른 클래스 반환
 */
export function getButtonVariantClasses(variant: 'primary' | 'secondary' | 'outline' | 'gradient') {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary", 
    outline: "btn-outline",
    gradient: "btn-gradient"
  };

  return variants[variant] || variants.primary;
}
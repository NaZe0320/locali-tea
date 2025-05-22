// src/types/teabti.ts

export interface TeaBtiQuestion {
  id: string;
  text: string;
  category: 'personality' | 'taste' | 'health' | 'travel' | 'lifestyle';
  options: TeaBtiOption[];
}

export interface TeaBtiOption {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
  scores: Record<string, number>; // 차 유형별 점수 매핑
}

export interface TeaBtiAnswer {
  questionId: string;
  optionId: 'A' | 'B' | 'C' | 'D' | 'E';
}

export interface TeaType {
  id: string;
  name: string;
  nickname: string;
  category: 'green' | 'red' | 'flower' | 'fruit' | 'root' | 'grain' | 'herbal' | 'blended';
  description: string;
  characteristics: string[];
  taste: string;
  aroma: string;
  caffeine: 'high' | 'medium' | 'low' | 'none';
  benefits: string[];
  bestTime: string;
  color: string;
  gradient: string;
  icon: string;
  image?: string;
}

export interface TravelDestination {
  id: string;
  name: string;
  region: string;
  description: string;
  image?: string;
  teaTypes: string[]; // 연관된 차 유형 ID들
  features: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface TeaBtiSession {
  id: string;
  currentQuestionIndex: number;
  answers: TeaBtiAnswer[];
  startedAt: Date;
  completedAt?: Date;
  result?: TeaBtiResult;
}

export interface TeaBtiResult {
  mainType: TeaType;
  subTypes: TeaType[];
  score: number;
  compatibleTypes: TeaType[];
  incompatibleTypes: TeaType[];
  recommendedDestinations: TravelDestination[];
  personalityAnalysis: {
    traits: string[];
    values: string[];
    lifestyle: string[];
    travelStyle: string;
  };
  healthTips: string[];
}

export interface TeaBtiStore {
  // State
  session: TeaBtiSession | null;
  questions: TeaBtiQuestion[];
  teaTypes: TeaType[];
  destinations: TravelDestination[];
  loading: boolean;
  error: string | null;
  
  // Actions
  initializeTest: () => Promise<void>;
  answerQuestion: (questionId: string, optionId: 'A' | 'B' | 'C' | 'D' | 'E') => void;
  goToPreviousQuestion: () => void;
  goToNextQuestion: () => void;
  calculateResult: () => TeaBtiResult;
  resetTest: () => void;
  shareResult: (platform: 'instagram' | 'twitter' | 'facebook' | 'kakao') => void;
}

export interface ScoreMatrix {
  [questionId: string]: {
    [optionId: string]: {
      [teaTypeId: string]: number;
    };
  };
}
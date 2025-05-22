// src/features/tea-bti/components/TeaBtiTest.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  useTeaBtiStore, 
  useCurrentQuestion, 
  useProgress, 
  useCanGoBack, 
  useCanGoNext, 
  useIsLastQuestion,
  useCurrentAnswer
} from '../store/teaBitStore';

const TeaBtiTest: React.FC = () => {
  const router = useRouter();
  const { 
    answerQuestion, 
    goToPreviousQuestion, 
    goToNextQuestion, 
    calculateResult,
    session 
  } = useTeaBtiStore();
  
  const currentQuestion = useCurrentQuestion();
  const progress = useProgress();
  const canGoBack = useCanGoBack();
  const canGoNext = useCanGoNext();
  const isLastQuestion = useIsLastQuestion();
  const currentAnswer = useCurrentAnswer();

  // 질문이 없는 경우 시작 화면으로 리다이렉트
  React.useEffect(() => {
    if (!currentQuestion && !session) {
      router.replace('/tea-bti');
    }
  }, [currentQuestion, session, router]);

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">질문을 불러오고 있습니다...</p>
        </div>
      </div>
    );
  }

  const handleOptionSelect = (optionId: 'A' | 'B' | 'C' | 'D' | 'E') => {
    answerQuestion(currentQuestion.id, optionId);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // 마지막 질문인 경우 결과 계산 후 결과 페이지로 이동
      try {
        calculateResult();
        router.push('/tea-bti/result');
      } catch (error) {
        console.error('결과 계산 실패:', error);
        alert('결과 계산에 실패했습니다. 다시 시도해주세요.');
      }
    } else {
      goToNextQuestion();
    }
  };

  const handlePrevious = () => {
    goToPreviousQuestion();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="text-center">
            <span className="text-lg font-bold text-gray-800">
              {progress.current} / {progress.total}
            </span>
          </div>
          
          <div className="w-10 h-10" />
        </div>
        
        {/* 프로그레스 바 */}
        <div className="mt-3">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-brand-primary h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 flex flex-col">
        {/* 질문 영역 */}
        <div className="flex-1 px-6 py-8">
          <div className="max-w-2xl mx-auto">
            {/* 질문 텍스트 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 leading-relaxed mb-4">
                Q{progress.current}. {currentQuestion.text}
              </h2>
            </div>

            {/* 선택지 */}
            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = currentAnswer?.optionId === option.id;
                
                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                      isSelected
                        ? 'border-brand-primary bg-brand-primary/5 shadow-md'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isSelected 
                          ? 'border-brand-primary bg-brand-primary' 
                          : 'border-gray-300'
                      }`}>
                        {isSelected && (
                          <div className="w-3 h-3 bg-white rounded-full" />
                        )}
                      </div>
                      <span className={`text-sm leading-relaxed ${
                        isSelected ? 'text-gray-800 font-medium' : 'text-gray-700'
                      }`}>
                        {option.text}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 하단 네비게이션 */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="max-w-2xl mx-auto flex gap-3">
            <button
              onClick={handlePrevious}
              disabled={!canGoBack}
              className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed text-gray-700 font-medium rounded-xl transition-colors"
            >
              이전
            </button>
            
            <button
              onClick={handleNext}
              disabled={!currentAnswer}
              className="flex-1 py-3 px-4 bg-brand-primary hover:bg-brand-primary/90 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors"
            >
              {isLastQuestion ? '결과 보기' : '다음'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeaBtiTest;
// src/features/tea-bti/store/teaBtiStore.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TeaBtiStore, TeaBtiSession, TeaBtiQuestion, TeaType, TravelDestination, TeaBtiAnswer, TeaBtiResult } from '../../../types/teabti';
import { TeaBtiService } from '../../../services/teaBtiService';

const teaBtiService = new TeaBtiService();

export const useTeaBtiStore = create<TeaBtiStore>()(
  persist(
    (set, get) => ({
      // State
      session: null,
      questions: [],
      teaTypes: [],
      destinations: [],
      loading: false,
      error: null,

      // Actions
      initializeTest: async () => {
        set({ loading: true, error: null });
        
        try {
          const [questions, teaTypes, destinations] = await Promise.all([
            teaBtiService.getQuestions(),
            teaBtiService.getTeaTypes(),
            teaBtiService.getDestinations()
          ]);

          const newSession: TeaBtiSession = {
            id: `session-${Date.now()}`,
            currentQuestionIndex: 0,
            answers: [],
            startedAt: new Date()
          };

          set({
            session: newSession,
            questions,
            teaTypes,
            destinations,
            loading: false
          });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : '테스트 초기화에 실패했습니다.',
            loading: false
          });
        }
      },

      answerQuestion: (questionId: string, optionId: 'A' | 'B' | 'C' | 'D' | 'E') => {
        const { session, questions } = get();
        if (!session) return;

        const updatedAnswers = [
          ...session.answers.filter(a => a.questionId !== questionId),
          { questionId, optionId }
        ];

        const updatedSession: TeaBtiSession = {
          ...session,
          answers: updatedAnswers
        };

        // 마지막 질문인 경우 결과 계산
        if (session.currentQuestionIndex === questions.length - 1) {
          const result = teaBtiService.calculateResult(updatedAnswers);
          updatedSession.result = result;
          updatedSession.completedAt = new Date();
        }

        set({ session: updatedSession });
      },

      goToPreviousQuestion: () => {
        const { session } = get();
        if (!session || session.currentQuestionIndex <= 0) return;

        set({
          session: {
            ...session,
            currentQuestionIndex: session.currentQuestionIndex - 1
          }
        });
      },

      goToNextQuestion: () => {
        const { session, questions } = get();
        if (!session || session.currentQuestionIndex >= questions.length - 1) return;

        set({
          session: {
            ...session,
            currentQuestionIndex: session.currentQuestionIndex + 1
          }
        });
      },

      calculateResult: () => {
        const { session } = get();
        if (!session || session.answers.length === 0) {
          throw new Error('답변이 없습니다.');
        }

        const result = teaBtiService.calculateResult(session.answers);
        
        const updatedSession: TeaBtiSession = {
          ...session,
          result,
          completedAt: new Date()
        };

        set({ session: updatedSession });
        return result;
      },

      resetTest: () => {
        set({
          session: null,
          questions: [],
          teaTypes: [],
          destinations: [],
          error: null
        });
      },

      shareResult: async (platform: 'instagram' | 'twitter' | 'facebook' | 'kakao') => {
        const { session } = get();
        if (!session?.result) return;

        const shareData = teaBtiService.generateShareText(session.result);
        
        try {
          switch (platform) {
            case 'instagram':
              // Instagram은 직접 공유 API가 제한적이므로 클립보드 복사
              await navigator.clipboard.writeText(
                `${shareData.title}\n${shareData.description}\n\n#${shareData.hashtags.join(' #')}`
              );
              alert('Instagram용 텍스트가 복사되었습니다!');
              break;
              
            case 'twitter':
              const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `${shareData.title}\n${shareData.description}\n\n${shareData.hashtags.map(tag => `#${tag}`).join(' ')}\n\nhttps://locali-tea.com`
              )}`;
              window.open(twitterUrl, '_blank');
              break;
              
            case 'facebook':
              const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://locali-tea.com')}`;
              window.open(facebookUrl, '_blank');
              break;
              
            case 'kakao':
              // Kakao 공유는 실제 구현 시 Kakao SDK 필요
              if (typeof window !== 'undefined' && (window as any).Kakao) {
                (window as any).Kakao.Share.sendDefault({
                  objectType: 'feed',
                  content: {
                    title: shareData.title,
                    description: shareData.description,
                    imageUrl: 'https://locali-tea.com/images/og-image.png',
                    link: {
                      mobileWebUrl: 'https://locali-tea.com',
                      webUrl: 'https://locali-tea.com'
                    }
                  },
                  buttons: [{
                    title: '나도 테스트하기',
                    link: {
                      mobileWebUrl: 'https://locali-tea.com/tea-bti',
                      webUrl: 'https://locali-tea.com/tea-bti'
                    }
                  }]
                });
              } else {
                alert('카카오 공유 기능을 사용할 수 없습니다.');
              }
              break;
          }
        } catch (error) {
          console.error('공유 실패:', error);
          alert('공유에 실패했습니다. 다시 시도해주세요.');
        }
      }
    }),
    {
      name: 'tea-bti-store',
      partialize: (state) => ({
        session: state.session,
        // questions, teaTypes, destinations는 제외 (매번 새로 로드)
      })
    }
  )
);

// 편의성을 위한 선택자 훅들
export const useCurrentQuestion = () => {
  const { session, questions } = useTeaBtiStore();
  if (!session || !questions.length) return null;
  return questions[session.currentQuestionIndex];
};

export const useProgress = () => {
  const { session, questions } = useTeaBtiStore();
  if (!session || !questions.length) return { current: 0, total: 0, percentage: 0 };
  
  const current = session.currentQuestionIndex + 1;
  const total = questions.length;
  const percentage = (current / total) * 100;
  
  return { current, total, percentage };
};

export const useCanGoBack = () => {
  const { session } = useTeaBtiStore();
  return session ? session.currentQuestionIndex > 0 : false;
};

export const useCanGoNext = () => {
  const { session, questions } = useTeaBtiStore();
  if (!session || !questions.length) return false;
  
  const currentQuestion = questions[session.currentQuestionIndex];
  const hasAnswer = session.answers.some(a => a.questionId === currentQuestion?.id);
  
  return hasAnswer && session.currentQuestionIndex < questions.length - 1;
};

export const useIsLastQuestion = () => {
  const { session, questions } = useTeaBtiStore();
  if (!session || !questions.length) return false;
  return session.currentQuestionIndex === questions.length - 1;
};

export const useCurrentAnswer = () => {
  const { session, questions } = useTeaBtiStore();
  if (!session || !questions.length) return null;
  
  const currentQuestion = questions[session.currentQuestionIndex];
  return session.answers.find(a => a.questionId === currentQuestion?.id);
};
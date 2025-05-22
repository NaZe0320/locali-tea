// src/services/teaBtiService.ts

import { TeaBtiQuestion, TeaType, TravelDestination, TeaBtiAnswer, TeaBtiResult } from '../types/teabti';
import { mockQuestions, mockTeaTypes, mockDestinations, getRandomQuestions } from './mock/teabti';

export class TeaBtiService {
  private questions: TeaBtiQuestion[] = mockQuestions;
  private teaTypes: TeaType[] = mockTeaTypes;
  private destinations: TravelDestination[] = mockDestinations;

  async getQuestions(): Promise<TeaBtiQuestion[]> {
    // Mock API 호출 시뮬레이션
    await this.delay(500);
    return getRandomQuestions(12);
  }

  async getTeaTypes(): Promise<TeaType[]> {
    await this.delay(200);
    return this.teaTypes;
  }

  async getDestinations(): Promise<TravelDestination[]> {
    await this.delay(200);
    return this.destinations;
  }

  calculateResult(answers: TeaBtiAnswer[]): TeaBtiResult {
    // 각 차 유형별 점수 계산
    const scores: Record<string, number> = {};
    
    // 모든 차 유형 초기화
    this.teaTypes.forEach(type => {
      scores[type.id] = 0;
    });

    // 답변을 기반으로 점수 계산
    answers.forEach(answer => {
      const question = this.questions.find(q => q.id === answer.questionId);
      if (question) {
        const option = question.options.find(o => o.id === answer.optionId);
        if (option) {
          Object.entries(option.scores).forEach(([teaTypeId, score]) => {
            if (scores[teaTypeId] !== undefined) {
              scores[teaTypeId] += score;
            }
          });
        }
      }
    });

    // 점수 순으로 정렬
    const sortedResults = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .map(([id, score]) => ({ id, score }));

    // 주 유형과 부 유형 결정
    const mainTypeId = sortedResults[0].id;
    const mainType = this.teaTypes.find(t => t.id === mainTypeId)!;
    const subTypes = sortedResults.slice(1, 3)
      .map(({ id }) => this.teaTypes.find(t => t.id === id)!)
      .filter(Boolean);

    // 궁합 분석 (간단한 로직)
    const compatibleTypes = this.getCompatibleTypes(mainType);
    const incompatibleTypes = this.getIncompatibleTypes(mainType);

    // 추천 여행지
    const recommendedDestinations = this.getRecommendedDestinations(mainType);

    // 성격 분석
    const personalityAnalysis = this.analyzePersonality(answers, mainType);

    // 건강 팁
    const healthTips = this.getHealthTips(mainType);

    return {
      mainType,
      subTypes,
      score: sortedResults[0].score,
      compatibleTypes,
      incompatibleTypes,
      recommendedDestinations,
      personalityAnalysis,
      healthTips
    };
  }

  private getCompatibleTypes(mainType: TeaType): TeaType[] {
    // 같은 카테고리나 보완 관계의 차 유형들
    const compatible = this.teaTypes.filter(type => 
      type.id !== mainType.id && (
        type.category === mainType.category || 
        this.isCompatibleCategory(mainType.category, type.category)
      )
    );
    return compatible.slice(0, 2);
  }

  private getIncompatibleTypes(mainType: TeaType): TeaType[] {
    // 대비되는 특성의 차 유형들
    const incompatible = this.teaTypes.filter(type => 
      type.id !== mainType.id && 
      !this.isCompatibleCategory(mainType.category, type.category)
    );
    return incompatible.slice(0, 2);
  }

  private isCompatibleCategory(cat1: string, cat2: string): boolean {
    const compatibilityMap: Record<string, string[]> = {
      'green': ['herbal', 'flower'],
      'flower': ['green', 'fruit'],
      'fruit': ['flower', 'herbal'],
      'herbal': ['green', 'fruit']
    };
    return compatibilityMap[cat1]?.includes(cat2) || false;
  }

  private getRecommendedDestinations(mainType: TeaType): TravelDestination[] {
    return this.destinations.filter(dest => 
      dest.teaTypes.includes(mainType.id)
    ).slice(0, 3);
  }

  private analyzePersonality(answers: TeaBtiAnswer[], mainType: TeaType): {
    traits: string[];
    values: string[];
    lifestyle: string[];
    travelStyle: string;
  } {
    // 답변 패턴을 분석하여 성격 특성 도출
    const personalityAnswers = answers.filter(answer => {
      const question = this.questions.find(q => q.id === answer.questionId);
      return question?.category === 'personality';
    });

    const travelAnswers = answers.filter(answer => {
      const question = this.questions.find(q => q.id === answer.questionId);
      return question?.category === 'travel';
    });

    return {
      traits: mainType.characteristics,
      values: ['자연 친화적', '전통 문화 존중', '건강한 라이프스타일'],
      lifestyle: ['차분한 일상', '여유로운 시간', '깊이 있는 경험'],
      travelStyle: this.analyzeTravelStyle(travelAnswers)
    };
  }

  private analyzeTravelStyle(travelAnswers: TeaBtiAnswer[]): string {
    // 여행 관련 답변을 분석하여 여행 스타일 결정
    const styles = ['전통문화형', '자연체험형', '트렌드세터형', '차문화형', '힐링형'];
    return styles[Math.floor(Math.random() * styles.length)];
  }

  private getHealthTips(mainType: TeaType): string[] {
    const baseTips = [
      `${mainType.bestTime}에 마시는 것이 가장 좋습니다`,
      `카페인 함량이 ${mainType.caffeine === 'high' ? '높으니' : mainType.caffeine === 'medium' ? '적당하니' : '낮으니'} 시간을 고려해서 드세요`,
      `${mainType.benefits.join(', ')} 효과가 있습니다`
    ];

    // 차 유형별 특별한 팁
    const specialTips: Record<string, string[]> = {
      'boseong-sejak': ['공복에 마시면 위에 부담을 줄 수 있으니 식후에 드세요'],
      'jeju-green': ['운동 전후에 마시면 신진대사에 도움이 됩니다'],
      'plum-flower': ['임산부나 어린이도 안심하고 드실 수 있습니다'],
      'chrysanthemum': ['눈이 피로할 때 따뜻하게 우려 드세요'],
      'azalea': ['스트레스가 많을 때 향을 맡는 것만으로도 도움이 됩니다']
    };

    return [...baseTips, ...(specialTips[mainType.id] || [])];
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // 소셜 공유를 위한 결과 텍스트 생성
  generateShareText(result: TeaBtiResult): {
    title: string;
    description: string;
    hashtags: string[];
  } {
    return {
      title: `나는 ${result.mainType.name} - ${result.mainType.nickname}`,
      description: result.mainType.description,
      hashtags: ['차BTI', 'Locali-Tea', '차여행', result.mainType.name.replace(/\s/g, '')]
    };
  }
}
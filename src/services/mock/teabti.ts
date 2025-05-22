// src/services/mock/teaBtiMockData.ts

import { TeaBtiQuestion, TeaType, TravelDestination } from '../../types/teabti';

export const mockTeaTypes: TeaType[] = [
  {
    id: 'boseong-sejak',
    name: '보성 세작',
    nickname: '고요한 사색가',
    category: 'green',
    description: '포근하고 섬세한 감정의 소유자',
    characteristics: [
      '섬세하고 따뜻한 마음을 가진 사람',
      '조용하고 평화를 원하는 문학가 기질',
      '소수의 입맛을 중시하며 생각해요',
      '깊이 있는 대화와 관계를 추구해요'
    ],
    taste: '은은하고 깔끔한 맛',
    aroma: '풀잎 향과 단맛이 조화로운 향',
    caffeine: 'medium',
    benefits: ['항산화', '집중력 향상', '스트레스 완화'],
    bestTime: '오전 10시-12시',
    color: '#68A66F',
    gradient: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
    icon: '🍵',
    image: '/images/tea/boseong-sejak.jpg'
  },
  {
    id: 'jeju-green',
    name: '제주 유기농 녹차',
    nickname: '자연주의 탐험가',
    category: 'green',
    description: '순수하고 건강한 라이프스타일을 추구하는 자유로운 영혼',
    characteristics: [
      '자연을 사랑하고 환경을 생각하는 사람',
      '건강한 라이프스타일을 지향해요',
      '새로운 경험과 모험을 좋아해요',
      '진정성 있는 관계를 중요하게 여겨요'
    ],
    taste: '신선하고 상쾌한 맛',
    aroma: '바다 내음과 풀향이 어우러진 청량한 향',
    caffeine: 'medium',
    benefits: ['디톡스', '면역력 강화', '신진대사 촉진'],
    bestTime: '아침 일찍 또는 운동 후',
    color: '#4CAF50',
    gradient: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
    icon: '🌿',
    image: '/images/tea/jeju-green.jpg'
  },
  {
    id: 'plum-flower',
    name: '매화차',
    nickname: '우아한 선구자',
    category: 'flower',
    description: '고전적 아름다움과 현대적 감각을 겸비한 세련된 취향',
    characteristics: [
      '우아하고 품격 있는 라이프스타일',
      '전통과 현대의 조화를 추구해요',
      '예술적 감각과 미적 안목이 뛰어나요',
      '리더십과 독립적인 성향을 보여요'
    ],
    taste: '달콤하고 은은한 꽃향이 나는 맛',
    aroma: '매화꽃의 은은하고 고귀한 향',
    caffeine: 'none',
    benefits: ['피로회복', '피부미용', '스트레스 해소'],
    bestTime: '오후 2시-5시',
    color: '#E91E63',
    gradient: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)',
    icon: '🌸',
    image: '/images/tea/plum-flower.jpg'
  },
  {
    id: 'chrysanthemum',
    name: '국화차',
    nickname: '지혜로운 고전주의자',
    category: 'flower',
    description: '깊은 사색과 전통적 가치를 중시하는 현명한 성격',
    characteristics: [
      '전통적 가치와 지혜를 중시해요',
      '차분하고 사려 깊은 성격이에요',
      '오랜 시간 깊이 생각하는 것을 좋아해요',
      '안정적이고 신뢰할 수 있는 사람이에요'
    ],
    taste: '쌉쌀하면서도 달콤한 뒷맛',
    aroma: '국화꽃의 은은하고 깔끔한 향',
    caffeine: 'none',
    benefits: ['눈 건강', '해독작용', '혈압조절'],
    bestTime: '저녁 식후',
    color: '#FFC107',
    gradient: 'linear-gradient(135deg, #fff8e1 0%, #fffde7 100%)',
    icon: '🌼',
    image: '/images/tea/chrysanthemum.jpg'
  },
  {
    id: 'azalea',
    name: '진달래차',
    nickname: '낭만적인 감성가',
    category: 'flower',
    description: '감성적이고 로맨틱한 마음을 가진 순수한 영혼',
    characteristics: [
      '감성적이고 로맨틱한 성격이에요',
      '아름다운 것들에 대한 감각이 뛰어나요',
      '따뜻한 마음으로 사람들을 배려해요',
      '창의적이고 예술적인 취향을 가져요'
    ],
    taste: '달콤하고 상큼한 봄의 맛',
    aroma: '진달래꽃의 달콤하고 화사한 향',
    caffeine: 'none',
    benefits: ['기분전환', '여성건강', '항염작용'],
    bestTime: '오후 티타임',
    color: '#E91E63',
    gradient: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)',
    icon: '🌺',
    image: '/images/tea/azalea.jpg'
  }
];

export const mockDestinations: TravelDestination[] = [
  {
    id: 'boseong-tea-field',
    name: '보성 녹차밭',
    region: '전라남도 보성군',
    description: '푸른 녹차밭이 펼쳐진 대한민국 대표 차 관광지',
    features: ['녹차체험', '차밭산책', '차박물관', '전통찻집'],
    teaTypes: ['boseong-sejak', 'jeju-green'],
    image: '/images/destinations/boseong.jpg',
    coordinates: { lat: 34.7712, lng: 127.0822 }
  },
  {
    id: 'hadong-tea-field',
    name: '하동 차밭',
    region: '경상남도 하동군',
    description: '지리산 자락의 청정 차밭과 전통 차문화 체험지',
    features: ['야생차체험', '차문화관', '전통제차', '차밭트레킹'],
    teaTypes: ['boseong-sejak', 'jeju-green'],
    image: '/images/destinations/hadong.jpg',
    coordinates: { lat: 35.0675, lng: 127.7514 }
  },
  {
    id: 'jeju-tea-museum',
    name: '제주 차박물관',
    region: '제주특별자치도',
    description: '제주의 독특한 차문화와 자연을 만날 수 있는 곳',
    features: ['차박물관', '유기농차밭', '제주전통차', '차카페'],
    teaTypes: ['jeju-green', 'plum-flower'],
    image: '/images/destinations/jeju-tea.jpg',
    coordinates: { lat: 33.3997, lng: 126.5312 }
  }
];

export const mockQuestions: TeaBtiQuestion[] = [
  {
    id: 'q1',
    text: '카페에 방문했을 때, 어떤 분위기를 선호하나요?',
    category: 'personality',
    options: [
      {
        id: 'A',
        text: '자연 속에서 여유롭게 즐기는 녹음이 우거진 테라스',
        scores: {
          'boseong-sejak': 3,
          'jeju-green': 2,
          'plum-flower': 1,
          'chrysanthemum': 2,
          'azalea': 1
        }
      },
      {
        id: 'B',
        text: '모던하고 세련된 인테리어의 도시적인 공간',
        scores: {
          'boseong-sejak': 1,
          'jeju-green': 1,
          'plum-flower': 3,
          'chrysanthemum': 1,
          'azalea': 2
        }
      },
      {
        id: 'C',
        text: '아늑하고 따뜻한 분위기의 전통적인 찻집',
        scores: {
          'boseong-sejak': 2,
          'jeju-green': 1,
          'plum-flower': 2,
          'chrysanthemum': 3,
          'azalea': 2
        }
      },
      {
        id: 'D',
        text: '화사하고 밝은 분위기의 꽃과 식물이 가득한 공간',
        scores: {
          'boseong-sejak': 1,
          'jeju-green': 2,
          'plum-flower': 2,
          'chrysanthemum': 1,
          'azalea': 3
        }
      },
      {
        id: 'E',
        text: '조용하고 개인적인 공간에서 혼자만의 시간',
        scores: {
          'boseong-sejak': 3,
          'jeju-green': 2,
          'plum-flower': 1,
          'chrysanthemum': 2,
          'azalea': 1
        }
      }
    ]
  },
  {
    id: 'q2',
    text: '스트레스를 받았을 때 당신이 선호하는 해소 방법은?',
    category: 'personality',
    options: [
      {
        id: 'A',
        text: '활발한 운동이나 신체 활동으로 에너지 발산하기',
        scores: {
          'boseong-sejak': 1,
          'jeju-green': 3,
          'plum-flower': 1,
          'chrysanthemum': 1,
          'azalea': 2
        }
      },
      {
        id: 'B',
        text: '조용한 장소에서 명상하거나 혼자만의 시간 갖기',
        scores: {
          'boseong-sejak': 3,
          'jeju-green': 2,
          'plum-flower': 2,
          'chrysanthemum': 3,
          'azalea': 1
        }
      },
      {
        id: 'C',
        text: '친한 사람들과 만나 대화하며 시간 보내기',
        scores: {
          'boseong-sejak': 2,
          'jeju-green': 2,
          'plum-flower': 2,
          'chrysanthemum': 2,
          'azalea': 3
        }
      },
      {
        id: 'D',
        text: '좋아하는 음악을 들으며 감성에 젖기',
        scores: {
          'boseong-sejak': 2,
          'jeju-green': 1,
          'plum-flower': 3,
          'chrysanthemum': 2,
          'azalea': 3
        }
      },
      {
        id: 'E',
        text: '새로운 취미나 활동에 도전하기',
        scores: {
          'boseong-sejak': 1,
          'jeju-green': 3,
          'plum-flower': 2,
          'chrysanthemum': 1,
          'azalea': 2
        }
      }
    ]
  },
  {
    id: 'q3',
    text: '다음 중 가장 선호하는 맛은?',
    category: 'taste',
    options: [
      {
        id: 'A',
        text: '달콤한 맛',
        scores: {
          'boseong-sejak': 1,
          'jeju-green': 1,
          'plum-flower': 3,
          'chrysanthemum': 2,
          'azalea': 3
        }
      },
      {
        id: 'B',
        text: '쌉싸름한 맛',
        scores: {
          'boseong-sejak': 2,
          'jeju-green': 3,
          'plum-flower': 1,
          'chrysanthemum': 3,
          'azalea': 1
        }
      },
      {
        id: 'C',
        text: '감칠맛(우마미)',
        scores: {
          'boseong-sejak': 3,
          'jeju-green': 2,
          'plum-flower': 1,
          'chrysanthemum': 2,
          'azalea': 1
        }
      },
      {
        id: 'D',
        text: '상큼한 맛',
        scores: {
          'boseong-sejak': 1,
          'jeju-green': 2,
          'plum-flower': 2,
          'chrysanthemum': 1,
          'azalea': 3
        }
      },
      {
        id: 'E',
        text: '깔끔하고 담백한 맛',
        scores: {
          'boseong-sejak': 3,
          'jeju-green': 3,
          'plum-flower': 1,
          'chrysanthemum': 2,
          'azalea': 1
        }
      }
    ]
  },
  {
    id: 'q4',
    text: '카페인에 대한 당신의 반응은?',
    category: 'health',
    options: [
      {
        id: 'A',
        text: '카페인에 매우 민감하여 저녁에 마시면 잠을 못 잔다',
        scores: {
          'boseong-sejak': 1,
          'jeju-green': 1,
          'plum-flower': 3,
          'chrysanthemum': 3,
          'azalea': 3
        }
      },
      {
        id: 'B',
        text: '적당히 민감하여 오후 이후에는 피한다',
        scores: {
          'boseong-sejak': 2,
          'jeju-green': 2,
          'plum-flower': 2,
          'chrysanthemum': 2,
          'azalea': 2
        }
      },
      {
        id: 'C',
        text: '보통 수준으로 큰 영향은 없지만 늦은 밤에는 피한다',
        scores: {
          'boseong-sejak': 3,
          'jeju-green': 3,
          'plum-flower': 1,
          'chrysanthemum': 1,
          'azalea': 1
        }
      },
      {
        id: 'D',
        text: '카페인에 둔감하여 커피를 마셔도 잠에 영향이 거의 없다',
        scores: {
          'boseong-sejak': 2,
          'jeju-green': 3,
          'plum-flower': 0,
          'chrysanthemum': 0,
          'azalea': 0
        }
      },
      {
        id: 'E',
        text: '카페인에 거의 반응하지 않아 취침 직전에도 마실 수 있다',
        scores: {
          'boseong-sejak': 1,
          'jeju-green': 2,
          'plum-flower': 0,
          'chrysanthemum': 0,
          'azalea': 0
        }
      }
    ]
  },
  {
    id: 'q5',
    text: '국내여행에서 가장 가보고 싶은 지역은?',
    category: 'travel',
    options: [
      {
        id: 'A',
        text: '전통 문화가 살아있는 경주, 안동 같은 역사도시',
        scores: {
          'boseong-sejak': 2,
          'jeju-green': 1,
          'plum-flower': 3,
          'chrysanthemum': 3,
          'azalea': 2
        }
      },
      {
        id: 'B',
        text: '제주도나 남해처럼 바다와 자연을 즐길 수 있는 곳',
        scores: {
          'boseong-sejak': 2,
          'jeju-green': 3,
          'plum-flower': 1,
          'chrysanthemum': 1,
          'azalea': 2
        }
      },
      {
        id: 'C',
        text: '강릉, 전주처럼 트렌디한 먹거리와 볼거리가 많은 도시',
        scores: {
          'boseong-sejak': 1,
          'jeju-green': 2,
          'plum-flower': 3,
          'chrysanthemum': 1,
          'azalea': 3
        }
      },
      {
        id: 'D',
        text: '보성, 하동처럼 차 문화를 체험할 수 있는 지역',
        scores: {
          'boseong-sejak': 3,
          'jeju-green': 2,
          'plum-flower': 2,
          'chrysanthemum': 3,
          'azalea': 2
        }
      },
      {
        id: 'E',
        text: '지리산, 설악산 같은 산과 숲이 있는 자연 휴양지',
        scores: {
          'boseong-sejak': 3,
          'jeju-green': 3,
          'plum-flower': 1,
          'chrysanthemum': 2,
          'azalea': 1
        }
      }
    ]
  },
  {
    id: 'q6',
    text: '주말 아침에 당신이 가장 하고 싶은 것은?',
    category: 'lifestyle',
    options: [
      {
        id: 'A',
        text: '일찍 일어나 운동이나 산책으로 하루 시작하기',
        scores: {
          'boseong-sejak': 2,
          'jeju-green': 3,
          'plum-flower': 1,
          'chrysanthemum': 2,
          'azalea': 1
        }
      },
      {
        id: 'B',
        text: '늦잠 자고 느긋하게 침대에서 휴식 취하기',
        scores: {
          'boseong-sejak': 2,
          'jeju-green': 1,
          'plum-flower': 2,
          'chrysanthemum': 1,
          'azalea': 3
        }
      },
      {
        id: 'C',
        text: '카페에 가서 아침 음료와 함께 여유로운 시간 보내기',
        scores: {
          'boseong-sejak': 3,
          'jeju-green': 2,
          'plum-flower': 3,
          'chrysanthemum': 2,
          'azalea': 2
        }
      },
      {
        id: 'D',
        text: '집에서 직접 요리해 브런치 즐기기',
        scores: {
          'boseong-sejak': 2,
          'jeju-green': 2,
          'plum-flower': 2,
          'chrysanthemum': 3,
          'azalea': 2
        }
      },
      {
        id: 'E',
        text: '일정을 계획하고 하루를 효율적으로 보낼 준비하기',
        scores: {
          'boseong-sejak': 1,
          'jeju-green': 2,
          'plum-flower': 3,
          'chrysanthemum': 2,
          'azalea': 1
        }
      }
    ]
  }
];

// 더 많은 질문들을 위한 확장 가능한 구조
export const getRandomQuestions = (count: number = 12): TeaBtiQuestion[] => {
  // 실제로는 20개 질문 중에서 랜덤하게 선택하거나 순서대로 제공
  return mockQuestions.slice(0, Math.min(count, mockQuestions.length));
};
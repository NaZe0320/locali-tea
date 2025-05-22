// src/services/mock/teabti.ts - 완전한 차BTI Mock 데이터

import { TeaBtiQuestion, TeaType, TravelDestination } from '../../types/teabti';

// 18가지 한국 차 유형 (프롬프트 기반)
export const mockTeaTypes: TeaType[] = [
  // 녹차 계열
  {
    id: 'boseong-sejak',
    name: '보성 세작',
    nickname: '고요한 사색가',
    category: 'green',
    description: '포근하고 섬세한 감정의 소유자입니다. 조용하고 평화로운 환경을 선호하며, 깊이 있는 관계를 추구합니다.',
    characteristics: [
      '섬세하고 따뜻한 마음을 가진 사람',
      '조용하고 평화를 원하는 문학가 기질',
      '소수의 깊은 관계를 중시하며 생각해요',
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
    description: '순수하고 건강한 라이프스타일을 추구하는 자유로운 영혼입니다. 자연을 사랑하고 환경을 생각하는 사람입니다.',
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

  // 꽃차 계열
  {
    id: 'plum-flower',
    name: '매화차',
    nickname: '우아한 선구자',
    category: 'flower',
    description: '고전적 아름다움과 현대적 감각을 겸비한 세련된 취향의 소유자입니다. 우아하고 품격 있는 라이프스타일을 추구합니다.',
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
    description: '깊은 사색과 전통적 가치를 중시하는 현명한 성격입니다. 차분하고 사려 깊은 성격으로 안정적이고 신뢰할 수 있는 사람입니다.',
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
    description: '감성적이고 로맨틱한 마음을 가진 순수한 영혼입니다. 아름다운 것들에 대한 감각이 뛰어나고 따뜻한 마음으로 사람들을 배려합니다.',
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
  },

  // 열매차 계열
  {
    id: 'omija',
    name: '오미자차',
    nickname: '다채로운 균형가',
    category: 'fruit',
    description: '복잡하고 다양한 면을 가진 균형감각이 뛰어난 사람입니다. 다섯 가지 맛처럼 인생의 여러 면을 즐길 줄 아는 유연함을 가졌습니다.',
    characteristics: [
      '다양한 상황에 유연하게 적응해요',
      '복잡한 감정을 잘 이해하고 받아들여요',
      '균형감각이 뛰어나고 조화를 추구해요',
      '새로운 경험에 열려있는 마음을 가져요'
    ],
    taste: '신맛, 단맛, 쓴맛, 매운맛, 짠맛이 조화된 복합적인 맛',
    aroma: '상큼하면서도 깊이 있는 오묘한 향',
    caffeine: 'none',
    benefits: ['간 건강', '피로회복', '면역력 강화'],
    bestTime: '오후 3시-6시',
    color: '#8E24AA',
    gradient: 'linear-gradient(135deg, #f3e5f5 0%, #ede7f6 100%)',
    icon: '🍇',
    image: '/images/tea/omija.jpg'
  },
  {
    id: 'yuja',
    name: '유자차',
    nickname: '상쾌한 활력가',
    category: 'fruit',
    description: '밝고 활기찬 에너지로 주변을 환하게 만드는 사람입니다. 긍정적이고 상쾌한 매력으로 사람들에게 힘을 주는 비타민 같은 존재입니다.',
    characteristics: [
      '밝고 긍정적인 에너지를 가져요',
      '주변 사람들에게 활력을 주는 존재에요',
      '스트레스를 긍정적으로 해소해요',
      '건강하고 활동적인 라이프스타일을 좋아해요'
    ],
    taste: '달콤하고 상큼한 감귤의 맛',
    aroma: '상쾌하고 달콤한 유자의 향',
    caffeine: 'none',
    benefits: ['비타민C 보충', '감기예방', '피로회복'],
    bestTime: '아침 또는 오후 간식시간',
    color: '#FFA726',
    gradient: 'linear-gradient(135deg, #fff8e1 0%, #fffde7 100%)',
    icon: '🍊',
    image: '/images/tea/yuja.jpg'
  },
  {
    id: 'jujube',
    name: '대추차',
    nickname: '따뜻한 포용가',
    category: 'fruit',
    description: '따뜻하고 포근한 마음으로 사람들을 감싸주는 어머니 같은 존재입니다. 안정적이고 든든한 힘으로 주변 사람들에게 위안을 줍니다.',
    characteristics: [
      '따뜻하고 포근한 마음씨를 가져요',
      '주변 사람들을 보살피는 것을 좋아해요',
      '안정적이고 신뢰할 수 있는 성격이에요',
      '전통적인 가치와 가족을 중시해요'
    ],
    taste: '달콤하고 고소한 은근한 단맛',
    aroma: '구수하고 달콤한 대추의 향',
    caffeine: 'none',
    benefits: ['혈액순환', '불면증 완화', '면역력 강화'],
    bestTime: '저녁 시간',
    color: '#8D6E63',
    gradient: 'linear-gradient(135deg, #efebe9 0%, #d7ccc8 100%)',
    icon: '🌰',
    image: '/images/tea/jujube.jpg'
  },

  // 뿌리차 계열
  {
    id: 'ginger',
    name: '생강차',
    nickname: '열정적인 도전가',
    category: 'root',
    description: '뜨거운 열정과 도전정신으로 가득한 사람입니다. 어떤 어려움도 이겨낼 수 있는 강인한 의지와 추진력을 가지고 있습니다.',
    characteristics: [
      '강인한 의지력과 추진력을 가져요',
      '어려움을 이겨내는 도전정신이 있어요',
      '열정적이고 에너지가 넘쳐요',
      '목표를 향해 끈기있게 나아가요'
    ],
    taste: '매콤하고 따뜻한 자극적인 맛',
    aroma: '톡 쏘는 매콤하고 따뜻한 향',
    caffeine: 'none',
    benefits: ['몸을 따뜻하게', '소화촉진', '감기예방'],
    bestTime: '아침 또는 찬 날씨',
    color: '#FF7043',
    gradient: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
    icon: '🔥',
    image: '/images/tea/ginger.jpg'
  },
  {
    id: 'bellflower',
    name: '도라지차',
    nickname: '은은한 헬스케어러',
    description: '건강과 웰빙을 중시하는 차분하고 지혜로운 사람입니다. 은은하고 깊이 있는 매력으로 주변 사람들에게 안정감을 줍니다.',
    category: 'root',
    characteristics: [
      '건강과 웰빙을 중시하는 라이프스타일',
      '차분하고 안정적인 성격이에요',
      '은은하고 깊이 있는 매력을 가져요',
      '꾸준함과 인내력이 뛰어나요'
    ],
    taste: '은은하고 깔끔한 단맛',
    aroma: '은은하고 깨끗한 자연의 향',
    caffeine: 'none',
    benefits: ['기관지 건강', '면역력 강화', '피로회복'],
    bestTime: '오후 또는 저녁',
    color: '#9C27B0',
    gradient: 'linear-gradient(135deg, #f3e5f5 0%, #ede7f6 100%)',
    icon: '🌿',
    image: '/images/tea/bellflower.jpg'
  },

  // 곡물차 계열
  {
    id: 'barley',
    name: '보리차',
    nickname: '친근한 안정가',
    category: 'grain',
    description: '친근하고 안정적인 매력으로 누구에게나 사랑받는 사람입니다. 편안하고 자연스러운 분위기로 사람들에게 편안함을 줍니다.',
    characteristics: [
      '친근하고 편안한 분위기를 만들어요',
      '누구에게나 사랑받는 매력을 가져요',
      '안정적이고 믿을 수 있는 성격이에요',
      '소박하지만 깊이 있는 가치를 추구해요'
    ],
    taste: '구수하고 담백한 고소한 맛',
    aroma: '구수하고 친근한 곡물의 향',
    caffeine: 'none',
    benefits: ['이뇨작용', '해열작용', '소화촉진'],
    bestTime: '언제든지',
    color: '#8BC34A',
    gradient: 'linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%)',
    icon: '🌾',
    image: '/images/tea/barley.jpg'
  },
  {
    id: 'brown-rice-green',
    name: '현미녹차',
    nickname: '균형 잡힌 융합가',
    category: 'grain',
    description: '전통과 현대, 동양과 서양의 조화를 추구하는 균형감각이 뛰어난 사람입니다. 다양한 것들을 조화롭게 융합하는 능력이 있습니다.',
    characteristics: [
      '전통과 현대의 조화를 추구해요',
      '다양한 문화를 융합하는 감각이 있어요',
      '균형감각이 뛰어나고 객관적이에요',
      '새로운 조합과 실험을 좋아해요'
    ],
    taste: '녹차의 상쾌함과 현미의 고소함이 조화된 맛',
    aroma: '풀향과 고소한 향이 어우러진 복합적인 향',
    caffeine: 'low',
    benefits: ['항산화', '소화촉진', '혈당조절'],
    bestTime: '식후',
    color: '#689F38',
    gradient: 'linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%)',
    icon: '🌾',
    image: '/images/tea/brown-rice-green.jpg'
  },

  // 약재차 계열
  {
    id: 'ssanghwa',
    name: '쌍화차',
    nickname: '지혜로운 치유자',
    category: 'herbal',
    description: '깊은 지혜와 치유의 힘을 가진 사람입니다. 전통의학의 지혜를 현대적으로 해석하여 주변 사람들에게 도움을 주는 현명한 존재입니다.',
    characteristics: [
      '깊은 지혜와 통찰력을 가져요',
      '주변 사람들을 치유하고 도와주려 해요',
      '전통적 가치와 현대적 감각을 모두 가져요',
      '인내심이 강하고 끈기가 있어요'
    ],
    taste: '깊고 진한 한약재의 복합적인 맛',
    aroma: '깊고 농후한 한약재의 향',
    caffeine: 'none',
    benefits: ['기력보강', '면역력 강화', '피로회복'],
    bestTime: '저녁 또는 컨디션이 좋지 않을 때',
    color: '#5D4037',
    gradient: 'linear-gradient(135deg, #efebe9 0%, #d7ccc8 100%)',
    icon: '🌿',
    image: '/images/tea/ssanghwa.jpg'
  },
  {
    id: 'ginseng',
    name: '인삼차',
    nickname: '강인한 리더',
    category: 'herbal',
    description: '강인한 정신력과 리더십을 가진 사람입니다. 어떤 상황에서도 흔들리지 않는 의지력과 다른 사람들을 이끄는 카리스마가 있습니다.',
    characteristics: [
      '강인한 정신력과 의지력을 가져요',
      '타고난 리더십으로 사람들을 이끌어요',
      '어려운 상황에서도 흔들리지 않아요',
      '목표 달성을 위한 추진력이 뛰어나요'
    ],
    taste: '쌉쌀하면서도 단맛이 나는 깊은 맛',
    aroma: '깊고 진한 인삼 특유의 향',
    caffeine: 'none',
    benefits: ['기력보강', '집중력 향상', '면역력 강화'],
    bestTime: '아침 또는 중요한 일이 있을 때',
    color: '#6D4C41',
    gradient: 'linear-gradient(135deg, #efebe9 0%, #d7ccc8 100%)',
    icon: '🌱',
    image: '/images/tea/ginseng.jpg'
  },

  // 블렌디드 & 현대차 계열
  {
    id: 'korean-blend',
    name: '한방 블렌딩 티',
    nickname: '창의적인 혁신가',
    category: 'blended',
    description: '전통과 현대를 창의적으로 융합하는 혁신적인 사람입니다. 새로운 것을 만들어내는 창의력과 실험정신이 뛰어난 트렌드세터입니다.',
    characteristics: [
      '창의적이고 혁신적인 사고를 해요',
      '새로운 것을 시도하는 것을 좋아해요',
      '전통을 현대적으로 재해석하는 능력이 있어요',
      '트렌드를 이끌어가는 선도자 기질이 있어요'
    ],
    taste: '다양한 재료가 조화롭게 어우러진 독특한 맛',
    aroma: '복합적이고 층층이 쌓인 풍부한 향',
    caffeine: 'low',
    benefits: ['스트레스 완화', '기분전환', '컨디션 조절'],
    bestTime: '기분 전환이 필요할 때',
    color: '#E91E63',
    gradient: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)',
    icon: '🎨',
    image: '/images/tea/korean-blend.jpg'
  },
  {
    id: 'gangneung-coffee',
    name: '강릉 커피',
    nickname: '현대적인 소셜라이저',
    category: 'blended',
    description: '현대적이고 사교적인 매력을 가진 사람입니다. 새로운 문화를 빠르게 받아들이고 사람들과의 소통을 즐기는 모던한 감각의 소유자입니다.',
    characteristics: [
      '현대적이고 트렌디한 감각을 가져요',
      '사교적이고 소통을 즐겨해요',
      '새로운 문화를 빠르게 받아들여요',
      '활동적이고 에너지가 넘쳐요'
    ],
    taste: '진하고 향긋한 커피의 깊은 맛',
    aroma: '풍부하고 진한 원두의 향',
    caffeine: 'high',
    benefits: ['각성효과', '집중력 향상', '신진대사 촉진'],
    bestTime: '아침 또는 집중이 필요할 때',
    color: '#5D4037',
    gradient: 'linear-gradient(135deg, #efebe9 0%, #d7ccc8 100%)',
    icon: '☕',
    image: '/images/tea/gangneung-coffee.jpg'
  },
  {
    id: 'jeju-citrus',
    name: '제주 감귤차',
    nickname: '생기 넘치는 비타민러',
    category: 'fruit',
    description: '생기 넘치고 활력 있는 에너지로 주변을 밝게 만드는 사람입니다. 건강하고 자연스러운 매력으로 사람들에게 활력을 주는 비타민 같은 존재입니다.',
    characteristics: [
      '생기 넘치고 활력이 넘쳐요',
      '자연스럽고 건강한 매력을 가져요',
      '주변 사람들에게 에너지를 주는 존재에요',
      '긍정적이고 밝은 성격이에요'
    ],
    taste: '상큼달콤한 감귤의 자연스러운 맛',
    aroma: '싱그럽고 상쾌한 감귤의 향',
    caffeine: 'none',
    benefits: ['비타민C 보충', '피로회복', '면역력 강화'],
    bestTime: '아침 또는 간식시간',
    color: '#FF9800',
    gradient: 'linear-gradient(135deg, #fff8e1 0%, #fffde7 100%)',
    icon: '🍊',
    image: '/images/tea/jeju-citrus.jpg'
  },
  {
    id: 'korean-black',
    name: '한국식 홍차',
    nickname: '고급스러운 미식가',
    category: 'red',
    description: '세련되고 고급스러운 취향을 가진 미식가입니다. 품격 있는 라이프스타일을 추구하며 깊이 있는 문화적 소양을 갖춘 우아한 사람입니다.',
    characteristics: [
      '세련되고 고급스러운 취향을 가져요',
      '품격 있는 라이프스타일을 추구해요',
      '깊이 있는 문화적 소양을 갖춰요',
      '섬세하고 우아한 감성을 가져요'
    ],
    taste: '깊고 진한 홍차의 풍부한 맛',
    aroma: '우아하고 깊이 있는 홍차의 향',
    caffeine: 'medium',
    benefits: ['항산화', '혈관건강', '소화촉진'],
    bestTime: '오후 티타임',
    color: '#D32F2F',
    gradient: 'linear-gradient(135deg, #ffebee 0%, #fce4ec 100%)',
    icon: '🫖',
    image: '/images/tea/korean-black.jpg'
  }
];

// 여행지 데이터 (기존 + 추가)
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
    teaTypes: ['boseong-sejak', 'jeju-green', 'korean-black'],
    image: '/images/destinations/hadong.jpg',
    coordinates: { lat: 35.0675, lng: 127.7514 }
  },
  {
    id: 'jeju-tea-museum',
    name: '제주 차박물관',
    region: '제주특별자치도',
    description: '제주의 독특한 차문화와 자연을 만날 수 있는 곳',
    features: ['차박물관', '유기농차밭', '제주전통차', '차카페'],
    teaTypes: ['jeju-green', 'jeju-citrus'],
    image: '/images/destinations/jeju-tea.jpg',
    coordinates: { lat: 33.3997, lng: 126.5312 }
  },
  {
    id: 'andong-traditional',
    name: '안동 전통차원',
    region: '경상북도 안동시',
    description: '유교문화의 고장에서 만나는 전통 차 문화',
    features: ['전통차체험', '한옥체험', '유교문화', '차예절'],
    teaTypes: ['chrysanthemum', 'ssanghwa', 'ginseng'],
    image: '/images/destinations/andong.jpg',
    coordinates: { lat: 36.5684, lng: 128.7294 }
  },
  {
    id: 'gangneung-coffee',
    name: '강릉 커피거리',
    region: '강원도 강릉시',
    description: '커피도시 강릉의 대표적인 커피문화 체험지',
    features: ['커피체험', '바다뷰카페', '로스팅체험', '커피박물관'],
    teaTypes: ['gangneung-coffee'],
    image: '/images/destinations/gangneung.jpg',
    coordinates: { lat: 37.7519, lng: 128.8761 }
  }
];

// 20개 질문 (프롬프트 기반)
export const mockQuestions: TeaBtiQuestion[] = [
    {
      id: 'q1',
      text: '친구들과의 모임에서 당신은 주로 어떤 역할을 맡나요?',
      category: 'personality',
      options: [
        {
          id: 'A',
          text: '분위기 메이커, 항상 활기찬 대화를 이끌어간다',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 1, 'azalea': 3,
            'omija': 2, 'yuja': 3, 'jujube': 2, 'ginger': 3, 'bellflower': 1,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 1, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'B',
          text: '조용히 경청하며 필요할 때 의견을 제시한다',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 1,
            'omija': 2, 'yuja': 1, 'jujube': 2, 'ginger': 1, 'bellflower': 3,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 1,
            'gangneung-coffee': 1, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'C',
          text: '모임을 계획하고 세부사항을 챙기는 조직자 역할',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 3, 'yuja': 2, 'jujube': 3, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'D',
          text: '갈등이 생기면 중재하고 화합을 이끄는 조정자 역할',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 3, 'yuja': 2, 'jujube': 3, 'ginger': 1, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 3, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'E',
          text: '독특한 아이디어나 새로운 관점을 제시하는 역할',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 3, 'plum-flower': 3, 'chrysanthemum': 1, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 1, 'ginger': 2, 'bellflower': 2,
            'barley': 1, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 2, 'korean-black': 2
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
            'boseong-sejak': 1, 'jeju-green': 3, 'plum-flower': 1, 'chrysanthemum': 1, 'azalea': 2,
            'omija': 2, 'yuja': 3, 'jujube': 1, 'ginger': 3, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 3, 'jeju-citrus': 3, 'korean-black': 1
          }
        },
        {
          id: 'B',
          text: '조용한 장소에서 명상하거나 혼자만의 시간 갖기',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 1, 'jujube': 2, 'ginger': 1, 'bellflower': 3,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 1, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'C',
          text: '친한 사람들과 만나 대화하며 시간 보내기',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 3, 'ginger': 2, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 3, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'D',
          text: '좋아하는 음악을 들으며 감성에 젖기',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 3, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 3, 'yuja': 2, 'jujube': 2, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 1, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 3
          }
        },
        {
          id: 'E',
          text: '새로운 취미나 활동에 도전하기',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 3, 'plum-flower': 2, 'chrysanthemum': 1, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 1, 'ginger': 2, 'bellflower': 1,
            'barley': 1, 'brown-rice-green': 2, 'ssanghwa': 1, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 2, 'korean-black': 2
          }
        }
      ]
    },
    {
      id: 'q3',
      text: '당신의 여행 스타일은 어떤가요?',
      category: 'travel',
      options: [
        {
          id: 'A',
          text: '꼼꼼한 계획을 세워 효율적으로 명소를 다니는 계획형',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 1,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 3
          }
        },
        {
          id: 'B',
          text: '현지인처럼 여유롭게 지역 문화를 체험하는 체험형',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 3, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 3, 'yuja': 2, 'jujube': 3, 'ginger': 2, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'C',
          text: '인스타그램에 올릴 만한 핫플레이스와 포토스팟 중심의 SNS형',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 1, 'azalea': 3,
            'omija': 2, 'yuja': 3, 'jujube': 1, 'ginger': 2, 'bellflower': 1,
            'barley': 1, 'brown-rice-green': 1, 'ssanghwa': 1, 'ginseng': 1, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'D',
          text: '자연 속에서 힐링하고 고요함을 즐기는 힐링형',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 3, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 1, 'jujube': 2, 'ginger': 1, 'bellflower': 3,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 1,
            'gangneung-coffee': 1, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'E',
          text: '박물관, 역사 유적지 등 문화적 경험을 중시하는 문화형',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 1, 'jujube': 2, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 1, 'korean-black': 3
          }
        }
      ]
    },
    {
      id: 'q4',
      text: '다음 중 당신이 가장 가치 있게 생각하는 것은?',
      category: 'personality',
      options: [
        {
          id: 'A',
          text: '전통과 역사의 보존',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 1, 'jujube': 3, 'ginger': 1, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'B',
          text: '환경 보호와 지속 가능성',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 3, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 3,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'C',
          text: '혁신과 창의적인 변화',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 1, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 1, 'ginger': 3, 'bellflower': 1,
            'barley': 1, 'brown-rice-green': 2, 'ssanghwa': 1, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'D',
          text: '개인의 건강과 웰빙',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 3, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 3, 'yuja': 3, 'jujube': 3, 'ginger': 3, 'bellflower': 3,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'E',
          text: '사회적 연결과 관계성',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 3, 'ginger': 2, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 3, 'jeju-citrus': 2, 'korean-black': 2
          }
        }
      ]
    },
    {
      id: 'q5',
      text: '당신이 가장 끌리는 공간의 분위기는?',
      category: 'personality',
      options: [
        {
          id: 'A',
          text: '현대적이고 세련된 미니멀한 공간',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 1, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 1, 'ginger': 2, 'bellflower': 2,
            'barley': 1, 'brown-rice-green': 2, 'ssanghwa': 1, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 2, 'korean-black': 3
          }
        },
        {
          id: 'B',
          text: '따뜻하고 아늑한 빈티지 감성의 공간',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 3, 'ginger': 2, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'C',
          text: '자연과 어우러진 개방적인 공간',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 3, 'plum-flower': 1, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 2, 'yuja': 3, 'jujube': 2, 'ginger': 2, 'bellflower': 3,
            'barley': 3, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 3, 'korean-black': 1
          }
        },
        {
          id: 'D',
          text: '역사와 문화가 느껴지는 전통적인 공간',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 1, 'jujube': 3, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 3, 'korean-blend': 1,
            'gangneung-coffee': 1, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'E',
          text: '활기차고 생동감 넘치는 다채로운 공간',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 1, 'azalea': 3,
            'omija': 3, 'yuja': 3, 'jujube': 2, 'ginger': 3, 'bellflower': 1,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 1, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 3, 'korean-black': 2
          }
        }
      ]
    },
    {
      id: 'q6',
      text: '다음 중 가장 선호하는 맛은?',
      category: 'taste',
      options: [
        {
          id: 'A',
          text: '달콤한 맛',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 1, 'plum-flower': 3, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 2, 'yuja': 3, 'jujube': 3, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 1, 'ssanghwa': 2, 'ginseng': 1, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'B',
          text: '쌉싸름한 맛',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 3, 'plum-flower': 1, 'chrysanthemum': 3, 'azalea': 1,
            'omija': 3, 'yuja': 1, 'jujube': 1, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 3, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'C',
          text: '감칠맛(우마미)',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 1, 'chrysanthemum': 2, 'azalea': 1,
            'omija': 2, 'yuja': 1, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 3, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 1, 'korean-black': 2
          }
        },
        {
          id: 'D',
          text: '상큼한 맛',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 1, 'azalea': 3,
            'omija': 3, 'yuja': 3, 'jujube': 1, 'ginger': 1, 'bellflower': 1,
            'barley': 1, 'brown-rice-green': 1, 'ssanghwa': 1, 'ginseng': 1, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 3, 'korean-black': 1
          }
        },
        {
          id: 'E',
          text: '깔끔하고 담백한 맛',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 3, 'plum-flower': 1, 'chrysanthemum': 2, 'azalea': 1,
            'omija': 1, 'yuja': 2, 'jujube': 2, 'ginger': 1, 'bellflower': 3,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 1,
            'gangneung-coffee': 1, 'jeju-citrus': 2, 'korean-black': 2
          }
        }
      ]
    },
    {
      id: 'q7',
      text: '당신이 선호하는 향의 특성은?',
      category: 'taste',
      options: [
        {
          id: 'A',
          text: '꽃향기처럼 화사하고 달콤한 향',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 1, 'plum-flower': 3, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 1, 'bellflower': 2,
            'barley': 1, 'brown-rice-green': 1, 'ssanghwa': 1, 'ginseng': 1, 'korean-blend': 3,
            'gangneung-coffee': 1, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'B',
          text: '풀잎이나 나무처럼 자연적이고 청량한 향',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 3, 'plum-flower': 1, 'chrysanthemum': 2, 'azalea': 1,
            'omija': 2, 'yuja': 2, 'jujube': 1, 'ginger': 2, 'bellflower': 3,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'C',
          text: '과일처럼 상큼하고 달콤한 향',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 1, 'azalea': 2,
            'omija': 3, 'yuja': 3, 'jujube': 2, 'ginger': 1, 'bellflower': 1,
            'barley': 1, 'brown-rice-green': 1, 'ssanghwa': 1, 'ginseng': 1, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 3, 'korean-black': 1
          }
        },
        {
          id: 'D',
          text: '한약재처럼 깊고 진한 향',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 1,
            'omija': 2, 'yuja': 1, 'jujube': 2, 'ginger': 3, 'bellflower': 2,
            'barley': 1, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'E',
          text: '구수하고 고소한 곡물의 향',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 1, 'chrysanthemum': 2, 'azalea': 1,
            'omija': 1, 'yuja': 1, 'jujube': 3, 'ginger': 2, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 3, 'jeju-citrus': 1, 'korean-black': 2
          }
        }
      ]
    },
    {
      id: 'q8',
      text: '음료에서 가장 중요하게 생각하는 요소는?',
      category: 'taste',
      options: [
        {
          id: 'A',
          text: '맛의 복합성과 깊이',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 3, 'yuja': 1, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 3, 'ginseng': 3, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'B',
          text: '향의 풍부함',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 1, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 2, 'korean-black': 3
          }
        },
        {
          id: 'C',
          text: '시각적인 아름다움',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 1, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 1, 'ginger': 1, 'bellflower': 1,
            'barley': 1, 'brown-rice-green': 1, 'ssanghwa': 1, 'ginseng': 1, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'D',
          text: '건강 기능성',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 3, 'plum-flower': 1, 'chrysanthemum': 3, 'azalea': 1,
            'omija': 3, 'yuja': 3, 'jujube': 3, 'ginger': 3, 'bellflower': 3,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'E',
          text: '마시는 의식과 경험',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 1, 'jujube': 2, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 1, 'korean-black': 3
          }
        }
      ]
    },
    {
      id: 'q9',
      text: '카페에 갔을 때 주로 선택하는 음료는?',
      category: 'taste',
      options: [
        {
          id: 'A',
          text: '진한 에스프레소나 아메리카노',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 1,
            'omija': 2, 'yuja': 1, 'jujube': 1, 'ginger': 3, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 3, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'B',
          text: '달콤한 라떼나 플레이버 음료',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 1, 'plum-flower': 2, 'chrysanthemum': 1, 'azalea': 3,
            'omija': 2, 'yuja': 3, 'jujube': 2, 'ginger': 1, 'bellflower': 1,
            'barley': 2, 'brown-rice-green': 1, 'ssanghwa': 1, 'ginseng': 1, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'C',
          text: '과일 에이드나 스무디',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 1, 'chrysanthemum': 1, 'azalea': 2,
            'omija': 3, 'yuja': 3, 'jujube': 1, 'ginger': 1, 'bellflower': 1,
            'barley': 1, 'brown-rice-green': 1, 'ssanghwa': 1, 'ginseng': 1, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 3, 'korean-black': 1
          }
        },
        {
          id: 'D',
          text: '차(녹차, 홍차, 허브티 등)',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 3, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 3,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 1, 'jeju-citrus': 2, 'korean-black': 3
          }
        },
        {
          id: 'E',
          text: '전통 음료(식혜, 수정과 등)',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 3, 'ginger': 2, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 2, 'korean-black': 2
          }
        }
      ]
    },
    {
      id: 'q10',
      text: '카페인에 대한 당신의 반응은?',
      category: 'health',
      options: [
        {
          id: 'A',
          text: '카페인에 매우 민감하여 저녁에 마시면 잠을 못 잔다',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 1, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 3,
            'omija': 3, 'yuja': 3, 'jujube': 3, 'ginger': 3, 'bellflower': 3,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 0, 'jeju-citrus': 3, 'korean-black': 1
          }
        },
        {
          id: 'B',
          text: '적당히 민감하여 오후 이후에는 피한다',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'C',
          text: '보통 수준으로 큰 영향은 없지만 늦은 밤에는 피한다',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 3, 'plum-flower': 1, 'chrysanthemum': 1, 'azalea': 1,
            'omija': 1, 'yuja': 1, 'jujube': 1, 'ginger': 1, 'bellflower': 1,
            'barley': 1, 'brown-rice-green': 2, 'ssanghwa': 1, 'ginseng': 1, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'D',
          text: '카페인에 둔감하여 커피를 마셔도 잠에 영향이 거의 없다',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 3, 'plum-flower': 0, 'chrysanthemum': 0, 'azalea': 0,
            'omija': 0, 'yuja': 0, 'jujube': 0, 'ginger': 0, 'bellflower': 0,
            'barley': 0, 'brown-rice-green': 1, 'ssanghwa': 0, 'ginseng': 2, 'korean-blend': 1,
            'gangneung-coffee': 3, 'jeju-citrus': 0, 'korean-black': 2
          }
        },
        {
          id: 'E',
          text: '카페인에 거의 반응하지 않아 취침 직전에도 마실 수 있다',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 0, 'chrysanthemum': 0, 'azalea': 0,
            'omija': 0, 'yuja': 0, 'jujube': 0, 'ginger': 0, 'bellflower': 0,
            'barley': 0, 'brown-rice-green': 1, 'ssanghwa': 0, 'ginseng': 1, 'korean-blend': 1,
            'gangneung-coffee': 3, 'jeju-citrus': 0, 'korean-black': 1
          }
        }
      ]
    },
    // 계속해서 나머지 10개 질문 추가...
    {
      id: 'q11',
      text: '당신의 체질은 어떤 편인가요?',
      category: 'health',
      options: [
        {
          id: 'A',
          text: '추위를 많이 타고 손발이 차가운 편',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 3, 'ginger': 3, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'B',
          text: '더위를 많이 타고 체온이 높은 편',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 3, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 1, 'ginger': 1, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 1, 'ginseng': 1, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'C',
          text: '계절 변화에 민감하고 환절기에 컨디션이 나빠진다',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 3, 'yuja': 3, 'jujube': 2, 'ginger': 2, 'bellflower': 3,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 1, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'D',
          text: '대체로 균형 잡힌 체질로 큰 문제가 없다',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 3, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'E',
          text: '소화가 잘 안 되고 위장이 예민한 편',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 3, 'ginger': 2, 'bellflower': 3,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 2, 'korean-black': 2
          }
        }
      ]
    },
    {
      id: 'q12',
      text: '하루 중 가장 에너지가 넘치는 시간대는?',
      category: 'health',
      options: [
        {
          id: 'A',
          text: '이른 아침, 해 뜰 때부터 활기차다',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 3, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 1,
            'omija': 2, 'yuja': 3, 'jujube': 2, 'ginger': 3, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 3, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'B',
          text: '오전 중반, 10시에서 12시 사이',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 3
          }
        },
        {
          id: 'C',
          text: '오후, 2시에서 5시 사이',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 3, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 3
          }
        },
        {
          id: 'D',
          text: '저녁, 7시에서 10시 사이',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 1, 'jujube': 3, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 1, 'korean-black': 2
          }
        },
        {
          id: 'E',
          text: '밤, 10시 이후 야행성이다',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 1, 'plum-flower': 2, 'chrysanthemum': 1, 'azalea': 3,
            'omija': 2, 'yuja': 1, 'jujube': 1, 'ginger': 1, 'bellflower': 1,
            'barley': 1, 'brown-rice-green': 1, 'ssanghwa': 1, 'ginseng': 1, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 1, 'korean-black': 2
          }
        }
      ]
    },
    // 나머지 질문들을 계속 추가 (q13-q20)...
    {
      id: 'q13',
      text: '건강을 위해 가장 신경 쓰는 부분은?',
      category: 'health',
      options: [
        {
          id: 'A',
          text: '면역력 강화와 질병 예방',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 3, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 3, 'yuja': 3, 'jujube': 3, 'ginger': 3, 'bellflower': 3,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'B',
          text: '스트레스 관리와 정신 건강',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 3
          }
        },
        {
          id: 'C',
          text: '소화와 장 건강',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 3, 'ginger': 3, 'bellflower': 3,
            'barley': 3, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id:         'D',
          text: '피부 건강과 노화 방지',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 3, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 1, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'E',
          text: '체력과 신체 활동량',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 3, 'plum-flower': 1, 'chrysanthemum': 1, 'azalea': 1,
            'omija': 2, 'yuja': 3, 'jujube': 1, 'ginger': 3, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 3, 'jeju-citrus': 2, 'korean-black': 2
          }
        }
      ]
    },
    {
      id: 'q14',
      text: '국내여행에서 가장 가보고 싶은 지역은?',
      category: 'travel',
      options: [
        {
          id: 'A',
          text: '전통 문화가 살아있는 경주, 안동 같은 역사도시',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 1, 'jujube': 3, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'B',
          text: '제주도나 남해처럼 바다와 자연을 즐길 수 있는 곳',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 3, 'plum-flower': 1, 'chrysanthemum': 1, 'azalea': 2,
            'omija': 2, 'yuja': 3, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 1, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 3, 'korean-black': 1
          }
        },
        {
          id: 'C',
          text: '강릉, 전주처럼 트렌디한 먹거리와 볼거리가 많은 도시',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 1, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 1, 'ginger': 2, 'bellflower': 1,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 1, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'D',
          text: '보성, 하동처럼 차 문화를 체험할 수 있는 지역',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 2, 'korean-black': 3
          }
        },
        {
          id: 'E',
          text: '지리산, 설악산 같은 산과 숲이 있는 자연 휴양지',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 3, 'plum-flower': 1, 'chrysanthemum': 2, 'azalea': 1,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 3,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 1,
            'gangneung-coffee': 1, 'jeju-citrus': 2, 'korean-black': 1
          }
        }
      ]
    },
    {
      id: 'q15',
      text: '여행지에서 가장 하고 싶은 활동은?',
      category: 'travel',
      options: [
        {
          id: 'A',
          text: '현지 음식과 특산품 맛보기',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 3, 'yuja': 3, 'jujube': 3, 'ginger': 2, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'B',
          text: '자연 경관 감상과 야외 활동',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 3, 'plum-flower': 1, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 2, 'yuja': 3, 'jujube': 2, 'ginger': 3, 'bellflower': 3,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 3, 'korean-black': 1
          }
        },
        {
          id: 'C',
          text: '역사 유적지와 박물관 방문',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 1, 'jujube': 2, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'D',
          text: '현지 체험 프로그램 참여',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 3, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 3, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'E',
          text: '카페와 숍에서 여유롭게 시간 보내기',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 1, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 2, 'korean-black': 3
          }
        }
      ]
    },
    {
      id: 'q16',
      text: '박물관에 간다면 어떤 전시를 가장 보고 싶나요?',
      category: 'travel',
      options: [
        {
          id: 'A',
          text: '전통 문화와 생활사 전시',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 1, 'jujube': 3, 'ginger': 1, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'B',
          text: '현대 미술과 디자인 전시',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 1, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 1, 'ginger': 2, 'bellflower': 1,
            'barley': 1, 'brown-rice-green': 2, 'ssanghwa': 1, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'C',
          text: '자연사와 과학 전시',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 3, 'plum-flower': 1, 'chrysanthemum': 2, 'azalea': 1,
            'omija': 2, 'yuja': 2, 'jujube': 1, 'ginger': 2, 'bellflower': 3,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 3, 'korean-black': 1
          }
        },
        {
          id: 'D',
          text: '역사적 유물과 고고학 전시',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 1,
            'omija': 2, 'yuja': 1, 'jujube': 2, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 3, 'korean-blend': 1,
            'gangneung-coffee': 1, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'E',
          text: '식문화와 음식 관련 전시',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 3, 'yuja': 3, 'jujube': 3, 'ginger': 2, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        }
      ]
    },
    {
      id: 'q17',
      text: '주말 아침에 당신이 가장 하고 싶은 것은?',
      category: 'lifestyle',
      options: [
        {
          id: 'A',
          text: '일찍 일어나 운동이나 산책으로 하루 시작하기',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 3, 'plum-flower': 1, 'chrysanthemum': 2, 'azalea': 1,
            'omija': 2, 'yuja': 3, 'jujube': 2, 'ginger': 3, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 3, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'B',
          text: '늦잠 자고 느긋하게 침대에서 휴식 취하기',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 2, 'chrysanthemum': 1, 'azalea': 3,
            'omija': 2, 'yuja': 1, 'jujube': 2, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 1, 'ssanghwa': 2, 'ginseng': 1, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'C',
          text: '카페에 가서 아침 음료와 함께 여유로운 시간 보내기',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 2, 'korean-black': 3
          }
        },
        {
          id: 'D',
          text: '집에서 직접 요리해 브런치 즐기기',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 3, 'ginger': 2, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'E',
          text: '일정을 계획하고 하루를 효율적으로 보낼 준비하기',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 2, 'azalea': 1,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 3
          }
        }
      ]
    },
    {
      id: 'q18',
      text: 'SNS에 업로드하고 싶은 컨텐츠 스타일은?',
      category: 'lifestyle',
      options: [
        {
          id: 'A',
          text: '트렌디한 카페와 맛집에서의 감성 사진',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 1, 'azalea': 3,
            'omija': 2, 'yuja': 3, 'jujube': 1, 'ginger': 2, 'bellflower': 1,
            'barley': 1, 'brown-rice-green': 2, 'ssanghwa': 1, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 3, 'korean-black': 3
          }
        },
        {
          id: 'B',
          text: '자연 속 힐링 순간이나 여행지의 풍경',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 3, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 3,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'C',
          text: '일상의 소소한 순간들과 나의 생각',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 3, 'ginger': 1, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 1, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'D',
          text: '전통적인 장소나 문화 체험 모습',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 1, 'jujube': 3, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'E',
          text: '나만의 취미나 특별한 경험 공유',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 3, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        }
      ]
    },
    {
      id: 'q19',
      text: '선물을 받는다면 어떤 것이 가장 기쁠까요?',
      category: 'lifestyle',
      options: [
        {
          id: 'A',
          text: '실용적이고 일상에서 유용하게 쓸 수 있는 선물',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 3, 'ginger': 2, 'bellflower': 2,
            'barley': 3, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'B',
          text: '건강이나 웰빙을 위한 선물',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 3, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 3, 'yuja': 3, 'jujube': 3, 'ginger': 3, 'bellflower': 3,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'C',
          text: '나를 위한 특별한 경험이나 체험 선물',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 2, 'korean-black': 3
          }
        },
        {
          id: 'D',
          text: '취향을 고려한 맞춤형 선물',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 3, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 3
          }
        },
        {
          id: 'E',
          text: '전통적이거나 문화적 가치가 있는 선물',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 1, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 1, 'jujube': 3, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 3, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 1, 'korean-black': 3
          }
        }
      ]
    },
    {
      id: 'q20',
      text: '다음 중 당신이 가장 오래 들여다볼 것 같은 영상은?',
      category: 'lifestyle',
      options: [
        {
          id: 'A',
          text: '전통 차 다도 의식을 보여주는 영상',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 2, 'plum-flower': 3, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 1, 'jujube': 2, 'ginger': 1, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 1, 'korean-black': 3
          }
        },
        {
          id: 'B',
          text: '다양한 차 맛 리뷰와 추천 영상',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 2,
            'omija': 3, 'yuja': 3, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 3, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'C',
          text: '차와 함께하는 명상과 힐링 가이드',
          scores: {
            'boseong-sejak': 3, 'jeju-green': 3, 'plum-flower': 2, 'chrysanthemum': 3, 'azalea': 2,
            'omija': 2, 'yuja': 2, 'jujube': 3, 'ginger': 1, 'bellflower': 3,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 3, 'ginseng': 2, 'korean-blend': 2,
            'gangneung-coffee': 1, 'jeju-citrus': 2, 'korean-black': 2
          }
        },
        {
          id: 'D',
          text: '차 산지 여행과 체험 브이로그',
          scores: {
            'boseong-sejak': 2, 'jeju-green': 3, 'plum-flower': 2, 'chrysanthemum': 2, 'azalea': 3,
            'omija': 2, 'yuja': 2, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 2, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 3, 'korean-black': 2
          }
        },
        {
          id: 'E',
          text: '차를 활용한 창의적인 레시피와 팁',
          scores: {
            'boseong-sejak': 1, 'jeju-green': 2, 'plum-flower': 2, 'chrysanthemum': 1, 'azalea': 2,
            'omija': 3, 'yuja': 3, 'jujube': 2, 'ginger': 2, 'bellflower': 2,
            'barley': 2, 'brown-rice-green': 3, 'ssanghwa': 2, 'ginseng': 2, 'korean-blend': 3,
            'gangneung-coffee': 2, 'jeju-citrus': 2, 'korean-black': 2
          }
        }
      ]
    }
  ];
  
  // 더 많은 질문들을 위한 확장 가능한 구조
  export const getRandomQuestions = (count: number = 20): TeaBtiQuestion[] => {
    // 모든 20개 질문을 순서대로 제공
    return mockQuestions.slice(0, Math.min(count, mockQuestions.length));
  };
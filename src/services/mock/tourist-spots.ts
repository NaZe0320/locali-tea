import { TouristSpot, Activity, SpotFeature } from '../../types/tourist-spot';

// 공통 활동 목록
const commonActivities: Activity[] = [
  {
    id: 'tea-tasting',
    name: '차 시음 체험',
    description: '다양한 차를 맛보고 향을 감상하는 체험',
    duration: 60,
    price: 15000
  },
  {
    id: 'tea-picking',
    name: '차잎 따기 체험',
    description: '직접 차밭에서 차잎을 수확하는 체험',
    duration: 90,
    price: 20000
  },
  {
    id: 'tea-making',
    name: '차 제조 체험',
    description: '전통 방식으로 차를 만들어보는 체험',
    duration: 120,
    price: 25000
  },
  {
    id: 'meditation',
    name: '차명상 체험',
    description: '차를 마시며 하는 명상 프로그램',
    duration: 45,
    price: 12000
  }
];

// 공통 시설 특징
const commonFeatures: SpotFeature[] = [
  { id: 'parking', name: '주차장', icon: '🚗' },
  { id: 'wifi', name: 'WiFi', icon: '📶' },
  { id: 'restaurant', name: '식당', icon: '🍽️' },
  { id: 'shop', name: '기념품샵', icon: '🛍️' },
  { id: 'accessible', name: '장애인편의시설', icon: '♿' },
  { id: 'family', name: '가족친화', icon: '👨‍👩‍👧‍👦' },
  { id: 'photo', name: '포토스팟', icon: '📸' },
  { id: 'experience', name: '체험프로그램', icon: '🎯' }
];

// Mock 데이터
export const mockTouristSpots: TouristSpot[] = [
  {
    id: '1',
    name: '보성 녹차밭',
    description: '끝없이 펼쳐진 녹차밭과 함께하는 힐링 여행. 드라마 촬영지로도 유명한 이곳에서 전통 차 문화를 체험해보세요.',
    location: {
      address: '전라남도 보성군 보성읍 녹차로 775',
      city: '보성군',
      province: '전라남도',
      coordinates: { lat: 34.7719, lng: 127.0792 }
    },
    teaType: 'green',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    rating: 4.8,
    reviewCount: 1247,
    tags: ['힐링', '포토스팟', '드라마촬영지', '가족여행'],
    season: ['spring', 'summer', 'autumn'],
    features: [
      commonFeatures[0], // 주차장
      commonFeatures[2], // 식당
      commonFeatures[3], // 기념품샵
      commonFeatures[5], // 가족친화
      commonFeatures[6], // 포토스팟
      commonFeatures[7]  // 체험프로그램
    ],
    operatingHours: {
      open: '09:00',
      close: '18:00'
    },
    contact: {
      phone: '061-850-5200',
      website: 'https://greentea.go.kr'
    },
    priceRange: { min: 10000, max: 30000 },
    activities: [commonActivities[0], commonActivities[1], commonActivities[2]]
  },
  {
    id: '2',
    name: '하동 차문화센터',
    description: '우리나라 차 문화의 발상지 하동에서 만나는 전통 차 체험. 섬진강을 바라보며 즐기는 차 한 잔의 여유.',
    location: {
      address: '경상남도 하동군 화개면 쌍계로 571-25',
      city: '하동군',
      province: '경상남도',
      coordinates: { lat: 35.2041, lng: 127.6159 }
    },
    teaType: 'green',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    rating: 4.6,
    reviewCount: 892,
    tags: ['전통', '문화체험', '강변', '역사'],
    season: ['spring', 'autumn'],
    features: [
      commonFeatures[0], // 주차장
      commonFeatures[1], // WiFi
      commonFeatures[2], // 식당
      commonFeatures[3], // 기념품샵
      commonFeatures[7]  // 체험프로그램
    ],
    operatingHours: {
      open: '09:00',
      close: '17:30',
      closedDays: ['Monday']
    },
    contact: {
      phone: '055-880-2950'
    },
    priceRange: { min: 8000, max: 25000 },
    activities: [commonActivities[0], commonActivities[2], commonActivities[3]]
  },
  {
    id: '3',
    name: '제주 오설록 티뮤지엄',
    description: '제주의 청정 자연에서 자란 차와 함께하는 특별한 경험. 현대적인 차 문화와 전통이 만나는 공간.',
    location: {
      address: '제주특별자치도 서귀포시 안덕면 신화역사로 15',
      city: '서귀포시',
      province: '제주특별자치도',
      coordinates: { lat: 33.3045, lng: 126.2888 }
    },
    teaType: 'green',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    rating: 4.7,
    reviewCount: 2156,
    tags: ['현대적', '카페', '관광명소', '기념품'],
    season: ['spring', 'summer', 'autumn', 'winter'],
    features: [
      commonFeatures[0], // 주차장
      commonFeatures[1], // WiFi
      commonFeatures[2], // 식당
      commonFeatures[3], // 기념품샵
      commonFeatures[4], // 장애인편의시설
      commonFeatures[5], // 가족친화
      commonFeatures[6]  // 포토스팟
    ],
    operatingHours: {
      open: '09:00',
      close: '18:00'
    },
    contact: {
      phone: '064-794-5312',
      website: 'https://www.osulloc.com'
    },
    priceRange: { min: 5000, max: 20000 },
    activities: [commonActivities[0]]
  },
  {
    id: '4',
    name: '구례 산수유마을 차밭',
    description: '봄이면 노란 산수유꽃이 만발하는 아름다운 마을의 전통 차밭. 자연과 하나되는 힐링 공간.',
    location: {
      address: '전라남도 구례군 산동면 계척리',
      city: '구례군',
      province: '전라남도',
      coordinates: { lat: 35.2028, lng: 127.4636 }
    },
    teaType: 'herbal',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    rating: 4.5,
    reviewCount: 634,
    tags: ['산수유', '봄꽃', '마을체험', '자연'],
    season: ['spring'],
    features: [
      commonFeatures[0], // 주차장
      commonFeatures[5], // 가족친화
      commonFeatures[6], // 포토스팟
      commonFeatures[7]  // 체험프로그램
    ],
    operatingHours: {
      open: '09:00',
      close: '17:00'
    },
    contact: {
      phone: '061-780-2750'
    },
    priceRange: { min: 12000, max: 28000 },
    activities: [commonActivities[0], commonActivities[3]]
  },
  {
    id: '5',
    name: '강릉 차문화관',
    description: '커피도시 강릉에서 만나는 전통 차 문화. 바다 내음과 함께하는 특별한 차 체험.',
    location: {
      address: '강원도 강릉시 용지로 1',
      city: '강릉시',
      province: '강원도',
      coordinates: { lat: 37.7519, lng: 128.8761 }
    },
    teaType: 'black',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    rating: 4.4,
    reviewCount: 451,
    tags: ['바다뷰', '현대적', '커피도시', '문화'],
    season: ['summer', 'autumn'],
    features: [
      commonFeatures[0], // 주차장
      commonFeatures[1], // WiFi
      commonFeatures[2], // 식당
      commonFeatures[6]  // 포토스팟
    ],
    operatingHours: {
      open: '10:00',
      close: '18:00',
      closedDays: ['Tuesday']
    },
    contact: {
      phone: '033-640-5114'
    },
    priceRange: { min: 8000, max: 22000 },
    activities: [commonActivities[0], commonActivities[3]]
  },
  {
    id: '6',
    name: '안동 전통차원',
    description: '유교문화의 고장 안동에서 전해져 내려오는 전통 차 문화를 체험할 수 있는 공간.',
    location: {
      address: '경상북도 안동시 풍천면 하회리 458',
      city: '안동시',
      province: '경상북도',
      coordinates: { lat: 36.5379, lng: 128.5188 }
    },
    teaType: 'flower',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    rating: 4.3,
    reviewCount: 328,
    tags: ['전통문화', '한옥', '유교', '역사'],
    season: ['spring', 'autumn'],
    features: [
      commonFeatures[0], // 주차장
      commonFeatures[3], // 기념품샵
      commonFeatures[7]  // 체험프로그램
    ],
    operatingHours: {
      open: '09:30',
      close: '17:00'
    },
    contact: {
      phone: '054-854-7570'
    },
    priceRange: { min: 15000, max: 35000 },
    activities: [commonActivities[0], commonActivities[2], commonActivities[3]]
  }
];

// 시뮬레이션을 위한 지연 함수
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API 서비스
export class MockTouristSpotService {
  async getTouristSpots(): Promise<TouristSpot[]> {
    await delay(800); // API 호출 시뮬레이션
    return mockTouristSpots;
  }

  async getTouristSpotById(id: string): Promise<TouristSpot | null> {
    await delay(600); // API 호출 시뮬레이션
    return mockTouristSpots.find(spot => spot.id === id) || null;
  }

  async getPopularSpots(limit: number = 6): Promise<TouristSpot[]> {
    await delay(700); // API 호출 시뮬레이션
    return mockTouristSpots
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }
}
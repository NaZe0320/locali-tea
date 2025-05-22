// 차 관광지 관련 타입 정의

export interface TouristSpot {
    id: string;
    name: string;
    description: string;
    location: {
      address: string;
      city: string;
      province: string;
      coordinates?: {
        lat: number;
        lng: number;
      };
    };
    teaType: TeaType;
    images: string[];
    rating: number;
    reviewCount: number;
    tags: string[];
    season: Season[];
    features: SpotFeature[];
    operatingHours?: {
      open: string;
      close: string;
      closedDays?: string[];
    };
    contact?: {
      phone?: string;
      website?: string;
    };
    priceRange?: {
      min: number;
      max: number;
    };
    activities: Activity[];
  }
  
  export interface Activity {
    id: string;
    name: string;
    description: string;
    duration: number; // 분 단위
    price?: number;
  }
  
  export interface SpotFeature {
    id: string;
    name: string;
    icon: string;
    description?: string;
  }
  
  export type TeaType = 'green' | 'black' | 'flower' | 'fermented' | 'herbal';
  
  export type Season = 'spring' | 'summer' | 'autumn' | 'winter';
  
  // API Response 타입
  export interface GetTouristSpotsResponse {
    spots: TouristSpot[];
    total: number;
    page: number;
    limit: number;
  }
  
  export interface GetTouristSpotByIdResponse {
    spot: TouristSpot;
  }
  
  // 필터링 옵션
  export interface TouristSpotFilters {
    teaType?: TeaType[];
    season?: Season[];
    province?: string[];
    tags?: string[];
    priceRange?: {
      min: number;
      max: number;
    };
  }
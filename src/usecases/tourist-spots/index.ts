import { TouristSpot } from '../../types/tourist-spot';
import { MockTouristSpotService } from '../../services/mock/tourist-spots';

// 관광지 목록 조회 UseCase
export class GetTouristSpotsUseCase {
  private touristSpotService: MockTouristSpotService;

  constructor(touristSpotService: MockTouristSpotService) {
    this.touristSpotService = touristSpotService;
  }

  async execute(filters?: any): Promise<TouristSpot[]> {
    try {
      const spots = await this.touristSpotService.getTouristSpots(filters);
      return spots;
    } catch (error) {
      console.error('Failed to fetch tourist spots:', error);
      throw new Error('관광지 정보를 불러오는데 실패했습니다.');
    }
  }
}

// 관광지 상세 조회 UseCase
export class GetTouristSpotByIdUseCase {
  private touristSpotService: MockTouristSpotService;

  constructor(touristSpotService: MockTouristSpotService) {
    this.touristSpotService = touristSpotService;
  }

  async execute(id: string): Promise<TouristSpot> {
    try {
      const spot = await this.touristSpotService.getTouristSpotById(id);
      if (!spot) {
        throw new Error('관광지를 찾을 수 없습니다.');
      }
      return spot;
    } catch (error) {
      console.error('Failed to fetch tourist spot:', error);
      throw new Error('관광지 정보를 불러오는데 실패했습니다.');
    }
  }
}

// 인기 관광지 조회 UseCase
export class GetPopularTouristSpotsUseCase {
  private touristSpotService: MockTouristSpotService;

  constructor(touristSpotService: MockTouristSpotService) {
    this.touristSpotService = touristSpotService;
  }

  async execute(limit: number = 6): Promise<TouristSpot[]> {
    try {
      const spots = await this.touristSpotService.getPopularSpots(limit);
      return spots;
    } catch (error) {
      console.error('Failed to fetch popular tourist spots:', error);
      throw new Error('인기 관광지 정보를 불러오는데 실패했습니다.');
    }
  }
}

// UseCase 팩토리 - 의존성 주입을 위한 팩토리 함수들
export const createTouristSpotUseCases = () => {
  const touristSpotService = new MockTouristSpotService();
  
  return {
    getTouristSpotsUseCase: new GetTouristSpotsUseCase(touristSpotService),
    getTouristSpotByIdUseCase: new GetTouristSpotByIdUseCase(touristSpotService),
    getPopularTouristSpotsUseCase: new GetPopularTouristSpotsUseCase(touristSpotService),
  };
};
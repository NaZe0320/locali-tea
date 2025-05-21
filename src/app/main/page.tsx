// src/app/page.tsx
export default function Main() {
  return (
    <div className="px-4 py-6">
      {/* 차BTI 테스트 배너 */}
      <div className="mb-6 rounded-xl overflow-hidden shadow-sm" style={{
        background: 'linear-gradient(to right, #e8f5e9, #ffebee)'
      }}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">나에게 맞는 차는22?</h2>
          <p className="text-sm mb-4">차BTI 테스트로 알아보는 나의 차 유형</p>
          <button className="bg-white text-green-600 px-4 py-2 rounded-full font-medium text-sm shadow-sm">
            테스트 시작하기
          </button>
        </div>
      </div>
      
      {/* 시즌별 인기 차 관광지 */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">시즌별 인기 차 관광지</h2>
          <button className="text-green-600 text-sm">더보기</button>
        </div>
        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 space-x-4">
          {/* 가로 스크롤 카드 */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex-shrink-0 w-64 rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="h-32 bg-gray-100"></div>
              <div className="p-3">
                <span className="inline-block px-2 py-1 bg-green-50 text-green-800 text-xs rounded-full">녹차</span>
                <h3 className="font-bold mt-2 mb-1">보성 녹차밭</h3>
                <p className="text-xs text-gray-500">전라남도 보성군</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* 지역별 특색 콘텐츠 */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">지역별 특색 차 콘텐츠</h2>
          <button className="text-green-600 text-sm">더보기</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {/* 지역 카드 */}
          {["전라도", "경상도", "강원도", "제주도"].map((region) => (
            <div key={region} className="p-4 rounded-lg" style={{
              background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <h3 className="font-bold text-sm">{region}</h3>
              <p className="text-xs text-gray-600 mt-1">녹차의 고장</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}   
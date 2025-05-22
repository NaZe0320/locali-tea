export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🍵 로컬리티 Tailwind 테스트
        </h1>
        
        {/* 기본 색상 테스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-red-500 text-white p-4 rounded-lg text-center">
            기본 빨강
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
            기본 파랑
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg text-center">
            기본 초록
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg text-center">
            기본 노랑
          </div>
        </div>

        {/* 커스텀 브랜드 색상 테스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-brand-primary text-white p-4 rounded-lg text-center">
            브랜드 Primary
          </div>
          <div className="bg-brand-secondary text-white p-4 rounded-lg text-center">
            브랜드 Secondary
          </div>
          <div className="bg-brand-accent text-white p-4 rounded-lg text-center">
            브랜드 Accent
          </div>
          <div className="bg-brand-highlight text-black p-4 rounded-lg text-center">
            브랜드 Highlight
          </div>
        </div>

        {/* 차 색상 테스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-tea-green-600 text-white p-4 rounded-lg text-center">
            차 - 녹차
          </div>
          <div className="bg-tea-red-400 text-white p-4 rounded-lg text-center">
            차 - 홍차
          </div>
          <div className="bg-tea-purple-300 text-white p-4 rounded-lg text-center">
            차 - 꽃차
          </div>
          <div className="bg-tea-yellow-300 text-black p-4 rounded-lg text-center">
            차 - 발효차
          </div>
        </div>

        {/* 그라데이션 테스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-main p-6 rounded-lg text-center">
            메인 그라데이션
          </div>
          <div className="bg-gradient-action p-6 rounded-lg text-center text-white">
            액션 그라데이션
          </div>
        </div>

        {/* 컴포넌ت 클래스 테스트 */}
        <div className="space-y-4 mb-8">
          <button className="btn-primary">
            Primary 버튼
          </button>
          <div className="card p-4">
            <h3 className="text-lg font-semibold mb-2">카드 컴포넌트</h3>
            <p className="text-gray-600">카드 스타일이 적용되었습니다.</p>
          </div>
          <span className="tag tag-green">녹차 태그</span>
        </div>

        {/* 그라데이션 텍스트 테스트 */}
        <div className="text-center">
          <h2 className="gradient-text text-3xl font-bold mb-4">
            그라데이션 텍스트
          </h2>
          <p className="text-gray-600">
            위 텍스트가 녹차-홍차 그라데이션으로 보이면 모든 설정이 완료되었습니다! 🎉
          </p>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        강력한 디버깅 테스트
      </h1>
      
      {/* 인라인 스타일 (CSS 없이도 작동해야 함) */}
      <div style={{ 
        backgroundColor: 'red', 
        color: 'white', 
        padding: '1rem', 
        marginBottom: '1rem' 
      }}>
        인라인 빨간색 (CSS 없이도 보여야 함)
      </div>
      
      {/* Tailwind 클래스 */}
      <div className="bg-blue-500 text-white p-4 mb-4">
        Tailwind 파란색 (CSS 필요)
      </div>
      
      {/* 그라데이션 텍스트 */}
      <h2 className="gradient-text text-3xl font-bold">
        그라데이션 텍스트
      </h2>
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <h3 style={{ fontWeight: 'bold' }}>결과 분석:</h3>
        <p>• 인라인 빨간색이 안 보이면 → 브라우저 문제</p>
        <p>• 인라인은 보이고 Tailwind 파란색이 안 보이면 → CSS 로딩 문제</p>
        <p>• 둘 다 보이면 → 복잡한 CSS 설정 문제</p>
      </div>
    </div>
  );
}
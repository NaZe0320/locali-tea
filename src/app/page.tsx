export default function Home() {
    return (
      <main>
        <h1>로컬리티(Locali-Tea)</h1>
        <p>곧 메인 페이지로 이동합니다...</p>
        
        <script dangerouslySetInnerHTML={{ __html: `
          window.location.href = '/main';
        `}} />
      </main>
    );
  }
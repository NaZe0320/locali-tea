import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex flex-col min-h-screen">
        {/* 헤더 */}
        <header className="sticky top-0 z-10 bg-white border-b">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-bold">로컬리티</h1>
          </div>
        </header>
        
        {/* 메인 콘텐츠 */}
        <main className="flex-1 pb-16">
          {children}
        </main>
        
        {/* 바텀 네비게이션 */}
        <nav className="fixed bottom-0 w-full bg-white border-t">
          <div className="flex justify-around p-2">
            <Link href="/" className={`flex flex-col items-center p-2 ${pathname === '/' ? 'text-green-600' : 'text-gray-500'}`}>
              <span>홈</span>
            </Link>
            <Link href="/explore" className={`flex flex-col items-center p-2 ${pathname.startsWith('/explore') ? 'text-green-600' : 'text-gray-500'}`}>
              <span>탐색</span>
            </Link>
            <Link href="/map" className={`flex flex-col items-center p-2 ${pathname.startsWith('/map') ? 'text-green-600' : 'text-gray-500'}`}>
              <span>지도</span>
            </Link>
            <Link href="/challenge" className={`flex flex-col items-center p-2 ${pathname.startsWith('/challenge') ? 'text-green-600' : 'text-gray-500'}`}>
              <span>챌린지</span>
            </Link>
            <Link href="/mypage" className={`flex flex-col items-center p-2 ${pathname.startsWith('/mypage') ? 'text-green-600' : 'text-gray-500'}`}>
              <span>마이</span>
            </Link>
          </div>
        </nav>
      </div>
    );
}

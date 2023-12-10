import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-100">
            <p>메인화면</p>
            <Link href={'/photo'}>사진 테스트 페이지</Link>
        </main>
    );
}

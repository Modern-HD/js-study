import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>메인화면</p>
            <Link href={'/pages'}>다른 페이지 이동</Link>
        </main>
    );
}

import Link from 'next/link';

export default function Pages() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>다른 페이지</p>
            <Link href={'/'}>원래 페이지로</Link>
        </main>
    );
}

'use client';

import Search from '@/components/nav/Search';
import PageMotionWrapper from '@/components/provider/PageMotionWrapper';
import ToolBar from '@/components/toolbar/Toolbar';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {}, []);

    return (
        <>
            <Search />
            <PageMotionWrapper className="flex-1 flex flex-col items-center justify-between p-24 bg-zinc-900 text-white">
                <p>메인화면</p>
                <Link href={'/home/detail'}>상세 페이지</Link>
            </PageMotionWrapper>
            <ToolBar />
        </>
    );
}

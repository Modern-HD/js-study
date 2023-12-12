import BackNav from '@/components/nav/BackNav';
import PageMotionWrapper from '@/components/provider/PageMotionWrapper';

export default function Detail() {
    return (
        <>
            <BackNav />
            <PageMotionWrapper className="flex-1 flex flex-col items-center justify-between p-24 bg-zinc-900 text-white">
                <p>상세 페이지</p>
            </PageMotionWrapper>
        </>
    );
}

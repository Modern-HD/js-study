'use client';

import safetyAreaSelector from '@/recoil/selector/safetyAreaSelector';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

export default function BackNav() {
    const safetyArea = useRecoilValue(safetyAreaSelector);
    const router = useRouter();
    return (
        <div
            className=" bg-zinc-900 text-white border-b border-zinc-800 pb-3 z-50"
            style={{ paddingTop: safetyArea.top, paddingLeft: safetyArea.left, paddingRight: safetyArea.right }}
        >
            <div className="w-full px-5 flex justify-between">
                <button
                    onClick={() => {
                        router.back();
                    }}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </div>
        </div>
    );
}

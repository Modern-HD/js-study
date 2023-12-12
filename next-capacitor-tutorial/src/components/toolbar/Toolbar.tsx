'use client';

import safetyAreaSelector from '@/recoil/selector/safetyAreaSelector';
import { faComment, faHouse, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

export default function ToolBar() {
    const safetyArea = useRecoilValue(safetyAreaSelector);

    return (
        <div
            className="bg-zinc-900 border-t border-zinc-800 text-white flex flex-row justify-around pt-3 z-50"
            style={{ paddingBottom: safetyArea.bottom, paddingLeft: safetyArea.left, paddingRight: safetyArea.right }}
        >
            <Link href={'/'} replace={true}>
                <FontAwesomeIcon icon={faHouse} className="text-2xl" />
            </Link>
            <Link href={'/photo'} replace={true}>
                <FontAwesomeIcon icon={faComment} className="text-2xl" />
            </Link>
            <button>
                <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
            </button>
            <button>
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
            </button>
        </div>
    );
}

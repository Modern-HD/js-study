'use client';

import safetyAreaSelector from '@/recoil/selector/safetyAreaSelector';
import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRecoilValue } from 'recoil';

export default function Search() {
    const safetyArea = useRecoilValue(safetyAreaSelector);
    return (
        <div
            className=" bg-zinc-900 text-white border-b border-zinc-800 pb-3 z-50"
            style={{ paddingTop: safetyArea.top, paddingLeft: safetyArea.left, paddingRight: safetyArea.right }}
        >
            <div className="w-full px-5 flex justify-between">
                <div>
                    <span className="text-lg font-bold mr-2">장곡동</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>
    );
}

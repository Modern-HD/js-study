'use client';

import safetyAreaSelector from '@/recoil/selector/safetyAreaSelector';
import { SafeArea, SafeAreaInsets } from 'capacitor-plugin-safe-area';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

export default function SafetyAreaProvider({ children }: { children: React.ReactNode }) {
    const setSafetyArea = useSetRecoilState(safetyAreaSelector);
    useEffect(() => {
        SafeArea.getSafeAreaInsets().then(({ insets }) => {
            setSafetyArea(addPadding(insets));
        });
        SafeArea.addListener('safeAreaChanged', data => {
            setSafetyArea(addPadding(data.insets));
        });
    }, [setSafetyArea]);
    return <>{children}</>;
}

function addPadding(insets: SafeAreaInsets['insets']) {
    if (insets.top === 0) insets.top = 15;
    if (insets.bottom === 0) insets.bottom = 15;
    return insets;
}

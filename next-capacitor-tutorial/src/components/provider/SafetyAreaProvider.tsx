'use client';

import safetyAreaSelector from '@/recoil/selector/safetyAreaSelector';
import { SafeArea } from 'capacitor-plugin-safe-area';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

export default function SafetyAreaProvider({ children }: { children: React.ReactNode }) {
    const setSafetyArea = useSetRecoilState(safetyAreaSelector);
    useEffect(() => {
        SafeArea.getSafeAreaInsets().then(({ insets }) => {
            setSafetyArea(insets);
        });
        SafeArea.addListener('safeAreaChanged', data => {
            setSafetyArea(data.insets);
        });
    }, [setSafetyArea]);
    return <>{children}</>;
}

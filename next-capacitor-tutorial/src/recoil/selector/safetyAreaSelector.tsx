import { selector } from 'recoil';
import { safetyBottomState, safetyLeftState, safetyRightState, safetyTopState } from '../atom/safetyAreaAtom';
import { SafeAreaInsets } from 'capacitor-plugin-safe-area';

const safetyAreaSelector = selector({
    key: 'safetyAreaSelector',
    get: ({ get }) => {
        return {
            top: get(safetyTopState),
            left: get(safetyLeftState),
            right: get(safetyRightState),
            bottom: get(safetyBottomState),
        };
    },
    set: ({ set }, newValue) => {
        const insets = newValue as SafeAreaInsets['insets'];
        set(safetyTopState, insets.top);
        set(safetyLeftState, insets.left);
        set(safetyRightState, insets.right);
        set(safetyBottomState, insets.bottom);
    },
});

export default safetyAreaSelector;

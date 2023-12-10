import { atom } from 'recoil';

export const safetyTopState = atom<number>({
    key: 'safetyTopState',
    default: 0,
});

export const safetyLeftState = atom<number>({
    key: 'safetyLeftState',
    default: 0,
});

export const safetyRightState = atom<number>({
    key: 'safetyRightState',
    default: 0,
});

export const safetyBottomState = atom<number>({
    key: 'safetyBottomState',
    default: 0,
});

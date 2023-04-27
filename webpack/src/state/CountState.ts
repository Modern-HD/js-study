import { atom } from "recoil";

export default atom<number>({
    key: 'CounterState',
    default: 0
})
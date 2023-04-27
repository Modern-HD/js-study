import React from "react";
import { useRecoilState } from "recoil";
import CountState from "../state/CountState";

export default function Footer() {

    const [count, setCount] = useRecoilState(CountState);

    return (
        <footer>
            푸터
            <button onClick={() => {
                setCount(count + 1);
            }}>
                +1
            </button>
        </footer>
    )
}
import React from "react";
import { useRecoilValue } from "recoil";
import CountState from "../state/CountState";

export default function Nav() {

    const count = useRecoilValue(CountState);

    return (
        <nav>
            내비: {count}
        </nav>
    )
}
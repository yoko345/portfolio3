"use client";

import { useAppSelector, useAppDispatch } from "../../../hooks";
import { setSpeed } from "../../features/resultDisplaySpeedSlice";

export default function ResultDisplaySpeed() {
    const speed = useAppSelector((state) => state.resultDisplaySpeed.speed);
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="result-display-speed-container">
                <p className="lottery-text">表示速度：{speed}&nbsp;ms</p>
                <input
                    type="range"
                    id="speedNumber"
                    value={speed}
                    min="100"
                    max="1000"
                    step="100"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSpeed(e.target.value))}
                />
            </div>
        </>
    );
}

import { useAppSelector, useAppDispatch } from "../../../hooks";
import { setSpeed } from "../../features/resultDisplaySpeedSlice";

export default function ResultDisplaySpeed() {
    const speed = useAppSelector((state) => state.resultDisplaySpeed.speed);
    const settingIsClick = useAppSelector((state) => state.clickChecker.settingClickObj.isClick);
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="result-display-speed-container">
                <p className={`lottery-text ${settingIsClick ? "disabled-input" : ""}`}>表示速度：{speed}&nbsp;ms</p>
                <input
                    type="range"
                    id="speedNumber"
                    className={settingIsClick ? "disabled-input" : ""}
                    value={speed}
                    min="100"
                    max="1000"
                    step="100"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSpeed({ speedValue: e.target.value, settingIsClick }))}
                />
            </div>
        </>
    );
}

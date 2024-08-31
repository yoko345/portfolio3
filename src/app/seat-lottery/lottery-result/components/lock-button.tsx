import { useAppSelector, useAppDispatch } from "../../../hooks";
import { lockClick, lotteryClick } from "../../features/clickCheckerSlice";
import { switchAllowResultDisplay } from "../../features/lotterySlice";

export default function LockButton() {
    const lockIsClick = useAppSelector((state) => state.clickChecker.lockClickObj.isClick);
    const lockbuttonText = useAppSelector((state) => state.clickChecker.lockClickObj.text);
    const dispatch = useAppDispatch();

    const clickLockButton = () => {
        dispatch(lotteryClick({}));
        dispatch(lockClick({}));

        // 抽選の結果表示の可否
        dispatch(switchAllowResultDisplay({}));
    };

    return (
        <div className="lock-button-container">
            <button
                className={`lock-button-container__lock-button button-for-lottery ${lockIsClick ? "clicked" : ""}`}
                id="unlock"
                onClick={clickLockButton}
                disabled={lockIsClick}
            >
                <span className="lock-button-container__lock-button__text">{lockbuttonText}</span>
            </button>
        </div>
    );
}

import { useAppSelector, useAppDispatch } from "../../../hooks";
import { allLotteryClick, lockClick, lotteryClick, resetClick, settingClick, switchSettingFirstClick } from "../../features/clickCheckerSlice";
import { lotteryDoneCount, setLotteryList, switchAllowResultDisplay, switchReadOnly } from "../../features/lotterySlice";
import { setLotteryRangeNumber, setLotteryTimes, setRemoveSeatNumberObj, setRemoveAttendanceNumberObj, initialNumberForLottery } from "../../features/numberForLotterySlice";
import { initialResultDisplaySpeed, setSpeed } from "../../features/resultDisplaySpeedSlice";
import { NumberForLotteryState } from "../../models/lottery.models";

export default function ResetButton() {
    const resetIsClick = useAppSelector((state) => state.clickChecker.resetIsClick);
    const settingIsClick = useAppSelector((state) => state.clickChecker.settingClickObj.isClick);
    const boolReadOnly = useAppSelector((state) => state.lottery.boolReadOnly);
    const allLotteryIsClick = useAppSelector((state) => state.clickChecker.allLotteryIsClick);
    const dispatch = useAppDispatch();

    const reset = () => {
        // ボタンのスタイル
        dispatch(resetClick());

        // 抽選の設定の数字周りの初期化
        const resetState: NumberForLotteryState = initialNumberForLottery;
        dispatch(setLotteryRangeNumber({ reset: true, lotteryRangeNumberObj: resetState.lotteryRangeNumberObj }));
        dispatch(setLotteryTimes(resetState.lotteryTimes));
        dispatch(setRemoveSeatNumberObj({ reset: true, removeSeatNumberObj: resetState.removeSeatNumberObj }));
        dispatch(setRemoveAttendanceNumberObj({ reset: true, removeAttendanceNumberObj: resetState.removeAttendanceNumberObj }));

        // 設定ボタンが押されていた場合の初期化
        if (settingIsClick) {
            dispatch(settingClick());
            dispatch(switchSettingFirstClick());
        }

        // inputタグにreadonly属性が付与されていた場合、初期化
        if (boolReadOnly) {
            dispatch(switchReadOnly());
        }

        // 抽選の結果表示周りの初期化
        dispatch(lotteryClick({ reset: true }));
        dispatch(lockClick({ reset: true }));
        dispatch(setLotteryList([]));
        dispatch(switchAllowResultDisplay({ reset: true }));
        dispatch(lotteryDoneCount({ reset: true }));

        // 一括抽選ボタンが押されていた場合の初期化
        if (allLotteryIsClick) {
            dispatch(allLotteryClick());
        }

        // 表示速度の初期化
        dispatch(setSpeed({ speedValue: initialResultDisplaySpeed.speed, settingIsClick: false }));
    };

    return (
        <div className="setting-lottery-button-container">
            <div
                className={`setting-lottery-button-container__set-button button-for-lottery ${resetIsClick ? "clicked" : ""}`}
                id="reset-button"
                onMouseDown={reset}
                onMouseUp={() => dispatch(resetClick())}
            >
                <p>リセット</p>
            </div>
        </div>
    );
}

import { useAppSelector, useAppDispatch } from "../../../hooks";
import { resetClick, settingClick, switchSettingClickFirstTime } from "../../features/clickCheckerSlice";
import { switchReadOnly } from "../../features/lotterySlice";
import { setLotteryRangeNumber, setLotteryTimes, setRemoveSeatNumberObj, setRemoveAttendanceNumberObj, initialState } from "../../features/numberForLotterySlice";
import { NumberForLotteryState } from "../../models/lottery.models";

export default function ResetButton() {
    const resetIsClick = useAppSelector((state) => state.clickChecker.resetIsClick);
    const settingIsClick = useAppSelector((state) => state.clickChecker.settingClickObj.isClick);
    const boolReadOnly = useAppSelector((state) => state.lottery.boolReadOnly);
    const dispatch = useAppDispatch();

    const reset = () => {
        // ボタンのスタイル
        dispatch(resetClick());

        // 抽選の設定の数字周りの初期化
        const resetState: NumberForLotteryState = initialState;
        dispatch(setLotteryRangeNumber({ reset: true, lotteryRangeNumberObj: resetState.lotteryRangeNumberObj }));
        dispatch(setLotteryTimes(resetState.lotteryTimes));
        dispatch(setRemoveSeatNumberObj({ reset: true, removeSeatNumberObj: resetState.removeSeatNumberObj }));
        dispatch(setRemoveAttendanceNumberObj({ reset: true, removeAttendanceNumberObj: resetState.removeAttendanceNumberObj }));

        // 設定ボタンが押されていた場合の初期化
        if (settingIsClick) {
            dispatch(settingClick());
            dispatch(switchSettingClickFirstTime());
        }

        // inputタグにreadonly属性が付与されていた場合、初期化
        if (boolReadOnly) {
            dispatch(switchReadOnly());
        }
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

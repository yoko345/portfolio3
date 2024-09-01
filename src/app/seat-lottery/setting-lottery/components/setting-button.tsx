import { useAppSelector, useAppDispatch } from "../../../hooks";
import { settingClick, switchSettingFirstClick } from "../../features/clickCheckerSlice";
import { setLotteryList, switchReadOnly } from "../../features/lotterySlice";
import { setAlertTextList } from "../../features/methods/checkSetting";
import { lotteryResult } from "../../features/methods/lottery";

export default function SettingButton() {
    const settingIsClick = useAppSelector((state) => state.clickChecker.settingClickObj.isClick);
    const settingButtonText = useAppSelector((state) => state.clickChecker.settingClickObj.text);
    const settingFirstClick = useAppSelector((state) => state.clickChecker.settingFirstClick);
    const lotteryRangeNumberObj = useAppSelector((state) => state.numberForlottery.lotteryRangeNumberObj);
    const lotteryTimes = useAppSelector((state) => state.numberForlottery.lotteryTimes);
    const removeSeatNumberObj = useAppSelector((state) => state.numberForlottery.removeSeatNumberObj);
    const removeAttendanceNumberObj = useAppSelector((state) => state.numberForlottery.removeAttendanceNumberObj);
    const dispatch = useAppDispatch();

    const clickSettingButton = () => {
        if (settingIsClick && settingFirstClick) {
            const alertTextList: string[] = setAlertTextList({ lotteryRangeNumberObj, lotteryTimes, removeSeatNumberObj, removeAttendanceNumberObj });

            if (alertTextList.length) {
                if (alert(alertTextList.join("\n")) == undefined) {
                    dispatch(settingClick());
                }
            } else {
                dispatch(switchSettingFirstClick());
                dispatch(switchReadOnly());

                const lotteryList = lotteryResult({ lotteryRangeNumberObj, removeAttendanceNumberObj, removeSeatNumberObj });
                dispatch(setLotteryList(lotteryList));
            }
        }
    };

    return (
        <div className="setting-lottery-button-container mb-5">
            <div
                className={`setting-lottery-button-container__set-button button-for-lottery ${settingIsClick ? "clicked" : ""}`}
                id="setting-button"
                onMouseDown={() => (settingIsClick ? "" : dispatch(settingClick()))}
                onMouseUp={clickSettingButton}
            >
                <p>{settingButtonText}</p>
            </div>
        </div>
    );
}

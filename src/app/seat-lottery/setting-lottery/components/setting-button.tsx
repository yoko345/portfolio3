"use client";

import { useAppSelector, useAppDispatch } from "../../../hooks";
import { settingClick, switchSettingClickFirstTime } from "../../features/clickCheckerSlice";
import { setLotteryList, switchReadOnly } from "../../features/lotterySlice";
import { setAlertTextList } from "../../features/methods/checkSetting";
import { prepareLottery } from "../../features/methods/prepareLottery";

export default function SettingButton() {
    const settingIsClick = useAppSelector((state) => state.clickChecker.settingIsClick);
    const settingClickFirstTime = useAppSelector((state) => state.clickChecker.settingClickFirstTime);
    const lotteryRangeNumberObj = useAppSelector((state) => state.numberForlottery.lotteryRangeNumberObj);
    const lotteryTimes = useAppSelector((state) => state.numberForlottery.lotteryTimes);
    const removeSeatNumberObj = useAppSelector((state) => state.numberForlottery.removeSeatNumberObj);
    const removeAttendanceNumberObj = useAppSelector((state) => state.numberForlottery.removeAttendanceNumberObj);
    const dispatch = useAppDispatch();

    const clickSettingButton = () => {
        if (settingIsClick && settingClickFirstTime) {
            const alertTextList: string[] = setAlertTextList({ lotteryRangeNumberObj, lotteryTimes, removeSeatNumberObj, removeAttendanceNumberObj });

            if (alertTextList.length) {
                if (alert(alertTextList.join("\n")) == undefined) {
                    dispatch(settingClick());
                }
            } else {
                dispatch(switchSettingClickFirstTime());
                const lotteryList = prepareLottery({ lotteryRangeNumberObj, lotteryTimes, removeSeatNumberObj, removeAttendanceNumberObj });
                dispatch(setLotteryList(lotteryList));
                dispatch(switchReadOnly());
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
                <p>設定</p>
            </div>
        </div>
    );
}

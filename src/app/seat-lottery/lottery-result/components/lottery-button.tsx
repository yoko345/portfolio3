import { useAppSelector, useAppDispatch } from "../../../hooks";
import { lockClick, lotteryClick } from "../../features/clickCheckerSlice";
import { lotteryDoneCount, setLotteryList, switchAllowResultDisplay } from "../../features/lotterySlice";
import { lotteryResult, lotteryResultDisplay } from "../../features/methods/lottery";

export default function LotteryButton() {
    const lotteryIsClick = useAppSelector((state) => state.clickChecker.lotteryIsClick);
    const settingFirstClick = useAppSelector((state) => state.clickChecker.settingFirstClick);
    const lotteryRangeNumberObj = useAppSelector((state) => state.numberForlottery.lotteryRangeNumberObj);
    const lotteryTimes = useAppSelector((state) => state.numberForlottery.lotteryTimes);
    const removeSeatNumberObj = useAppSelector((state) => state.numberForlottery.removeSeatNumberObj);
    const removeAttendanceNumberObj = useAppSelector((state) => state.numberForlottery.removeAttendanceNumberObj);
    const lotteryDoneTimes = useAppSelector((state) => state.lottery.lotteryDoneTimes);
    const dispatch = useAppDispatch();

    const clickLotteryButton = () => {
        if (!settingFirstClick && !lotteryIsClick) {
            dispatch(lotteryClick({}));
            dispatch(lockClick({}));

            const lotteryList = lotteryResult({ lotteryRangeNumberObj, removeAttendanceNumberObj, removeSeatNumberObj });
            dispatch(setLotteryList(lotteryList));

            const alertText = lotteryResultDisplay({ lotteryTimes, lotteryDoneTimes });
            if (alertText) {
                if (alert(alertText) == undefined) {
                    dispatch(lotteryClick({}));
                    dispatch(lockClick({}));
                }
            } else {
                dispatch(switchAllowResultDisplay({}));
                dispatch(lotteryDoneCount({}));
            }
        } else {
            if (settingFirstClick && !lotteryIsClick) {
                alert("設定ボタンを先に押して抽選のための準備を先にしてください。");
            } else if (!settingFirstClick && lotteryIsClick) {
                alert("アンロックボタンを押してロックを解除してください。");
            }
        }
    };

    return (
        <div className="lottery-button-container mb-4">
            <button
                className={`lottery-button-container__lottery-button button-for-lottery  ${lotteryIsClick ? "clicked" : ""}`}
                id="lotteryButton"
                onClick={clickLotteryButton}
            >
                <span className="lottery-button-container__lottery-button__text">抽選</span>
            </button>
        </div>
    );
}

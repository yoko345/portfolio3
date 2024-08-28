"use client";

import { useAppSelector, useAppDispatch } from "../../../hooks";
import { lockClick, lotteryClick } from "../../features/clickCheckerSlice";

export default function LotteryButton() {
    const lotteryIsClick = useAppSelector((state) => state.clickChecker.lotteryIsClick);
    const settingFirstClick = useAppSelector((state) => state.clickChecker.settingFirstClick);
    const dispatch = useAppDispatch();

    const clickLotteryButton = () => {
        if (!settingFirstClick && !lotteryIsClick) {
            dispatch(lotteryClick());
            dispatch(lockClick());
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

"use client";

import { useAppSelector, useAppDispatch } from "../../../hooks";
import { lotteryClick } from "../../features/clickCheckerSlice";

export default function LotteryButton() {
    const lotteryIsClick = useAppSelector((state) => state.clickChecker.lotteryIsClick);
    const dispatch = useAppDispatch();

    return (
        <div className="lottery-button-container mb-4">
            <div
                className={`lottery-button-container__lottery-button button-for-lottery  ${lotteryIsClick ? "clicked" : ""}`}
                id="lotteryButton"
                onClick={() => dispatch(lotteryClick())}
            >
                <p className="lottery-button-container__lottery-button__text">抽選</p>
            </div>
        </div>
    );
}

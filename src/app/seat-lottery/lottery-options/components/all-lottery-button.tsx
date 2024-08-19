"use client";

import { useAppSelector, useAppDispatch } from "../../../hooks";
import { allLotteryClick } from "../../features/clickCheckerSlice";

export default function AllLotteryButton() {
    const allLotteryIsClick = useAppSelector((state) => state.clickChecker.allLotteryIsClick);
    const dispatch = useAppDispatch();

    return (
        <div className="all-lottery-button-container mb-3">
            <a
                href="#lotteryResultDisplay"
                className={`all-lottery-button-container__button button-for-lottery  ${allLotteryIsClick ? "clicked" : ""}`}
                id="AllLotteryButton"
                onClick={() => dispatch(allLotteryClick())}
            >
                一括抽選
            </a>
        </div>
    );
}

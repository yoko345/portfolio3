"use client";

import { useAppSelector, useAppDispatch } from "../../../hooks";
import { lockClick } from "../../features/clickCheckerSlice";

export default function LockButton() {
    const lockIsClick = useAppSelector((state) => state.clickChecker.lockClickObj.isClick);
    const lockbuttonText = useAppSelector((state) => state.clickChecker.lockClickObj.text);
    const dispatch = useAppDispatch();

    return (
        <div className="lock-button-container">
            <div
                className={`lock-button-container__lock-button button-for-lottery ${lockIsClick ? "clicked" : ""}`}
                id="unlock"
                onClick={() => dispatch(lockClick())}
            >
                <p className="lock-button-container__lock-button__text">{lockbuttonText}</p>
            </div>
        </div>
    );
}

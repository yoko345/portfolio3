import { createSlice } from "@reduxjs/toolkit";
import { ButtonClickState } from "../models/lottery.models";

const initialState: ButtonClickState = {
    settingIsClick: false,
    settingClickFirstTime: true,
    resetIsClick: false,
    lotteryIsClick: false,
    lockClickObj: {
        isClick: false,
        text: "アンロック",
    },
    allLotteryIsClick: false,
};

export const clickCheckerSlice = createSlice({
    name: "clickChecker",
    initialState,
    reducers: {
        settingClick: (state) => {
            state.settingIsClick = !state.settingIsClick;
        },
        switchSettingClickFirstTime: (state) => {
            state.settingClickFirstTime = !state.settingClickFirstTime;
        },
        resetClick: (state) => {
            state.resetIsClick = !state.resetIsClick;
        },
        lotteryClick: (state) => {
            state.lotteryIsClick = !state.lotteryIsClick;
        },
        lockClick: (state) => {
            if (state.lockClickObj.isClick) {
                state.lockClickObj.text = "アンロック";
            } else {
                state.lockClickObj.text = "ロック解除";
            }
            state.lockClickObj.isClick = !state.lockClickObj.isClick;
        },
        allLotteryClick: (state) => {
            state.allLotteryIsClick = !state.allLotteryIsClick;
        },
    },
});

export const { settingClick, switchSettingClickFirstTime, resetClick, lotteryClick, lockClick, allLotteryClick } = clickCheckerSlice.actions;
export const clickCheckerReducer = clickCheckerSlice.reducer;

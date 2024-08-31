import { createSlice } from "@reduxjs/toolkit";
import { ButtonClickState } from "../models/lottery.models";

const initialState: ButtonClickState = {
    settingClickObj: {
        isClick: false,
        text: "設定",
    },
    settingFirstClick: true,
    resetIsClick: false,
    lotteryIsClick: false,
    lockClickObj: {
        isClick: true,
        text: "アンロック",
    },
    allLotteryIsClick: false,
};

export const clickCheckerSlice = createSlice({
    name: "clickChecker",
    initialState,
    reducers: {
        settingClick: (state) => {
            state.settingClickObj.isClick = !state.settingClickObj.isClick;
            state.settingClickObj.text = state.settingClickObj.isClick ? "設定中" : "設定";
        },
        switchSettingFirstClick: (state) => {
            state.settingFirstClick = !state.settingFirstClick;
        },
        resetClick: (state) => {
            state.resetIsClick = !state.resetIsClick;
        },
        lotteryClick: (state, { payload }) => {
            state.lotteryIsClick = payload.reset ? false : !state.lotteryIsClick;
        },
        lockClick: (state, { payload }) => {
            state.lockClickObj.isClick = payload.reset ? true : !state.lockClickObj.isClick;
            state.lockClickObj.text = state.lockClickObj.isClick ? "ロック解除" : "アンロック";
        },
        allLotteryClick: (state) => {
            state.allLotteryIsClick = !state.allLotteryIsClick;
        },
    },
});

export const { settingClick, switchSettingFirstClick, resetClick, lotteryClick, lockClick, allLotteryClick } = clickCheckerSlice.actions;
export const clickCheckerReducer = clickCheckerSlice.reducer;

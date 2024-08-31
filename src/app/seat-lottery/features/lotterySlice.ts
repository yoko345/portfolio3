import { createSlice } from "@reduxjs/toolkit";
import { lotteryListState } from "../models/lottery.models";

export const initialState: lotteryListState = {
    lotteryList: [],
    boolReadOnly: false,
    allowResultDisplay: false,
    lotteryDoneTimes: 0,
};

export const lotterySlice = createSlice({
    name: "lottery",
    initialState,
    reducers: {
        setLotteryList: (state, { payload }) => {
            state.lotteryList = [...payload];
        },
        switchReadOnly: (state) => {
            state.boolReadOnly = !state.boolReadOnly;
        },
        switchAllowResultDisplay: (state, { payload }) => {
            state.allowResultDisplay = payload.reset ? false : !state.allowResultDisplay;
        },
        lotteryDoneCount: (state, { payload }) => {
            if (payload.reset) {
                state.lotteryDoneTimes = 0;
            } else {
                state.lotteryDoneTimes += 1;
            }
        },
    },
});

export const { setLotteryList, switchReadOnly, switchAllowResultDisplay, lotteryDoneCount } = lotterySlice.actions;
export const lotteryReducer = lotterySlice.reducer;

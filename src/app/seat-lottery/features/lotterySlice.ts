import { createSlice } from "@reduxjs/toolkit";
import { lotteryListState } from "../models/lottery.models";

const initialState: lotteryListState = {
    lotteryList: [],
    boolReadOnly: false,
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
    },
});

export const { setLotteryList, switchReadOnly } = lotterySlice.actions;
export const lotteryReducer = lotterySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { ResultDisplaySpeedState } from "../models/lottery.models";

const initialState: ResultDisplaySpeedState = {
    speed: 800,
};

export const resultDisplaySpeedSlice = createSlice({
    name: "resultDisplaySpeed",
    initialState,
    reducers: {
        setSpeed: (state, { payload }) => {
            state.speed = parseInt(payload);
        },
    },
});

export const { setSpeed } = resultDisplaySpeedSlice.actions;
export const resultDisplaySpeedReducer = resultDisplaySpeedSlice.reducer;

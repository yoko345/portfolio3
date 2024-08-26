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
            const { speedValue, settingIsClick } = payload;
            if (!settingIsClick) {
                state.speed = parseInt(speedValue);
            }
        },
    },
});

export const { setSpeed } = resultDisplaySpeedSlice.actions;
export const resultDisplaySpeedReducer = resultDisplaySpeedSlice.reducer;

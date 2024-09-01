import { createSlice } from "@reduxjs/toolkit";
import { initialRemoveNumberObjState, NumberForLotteryState } from "../models/lottery.models";

const initialRemoveNumberObj: initialRemoveNumberObjState = {
    initialRemoveSeatNumberObj: {},
    initialRemoveAttendanceNumberObj: {},
};
for (let i = 0; i < 5; i++) {
    initialRemoveNumberObj.initialRemoveSeatNumberObj[`removeSeatNum${i}`] = 0;
    initialRemoveNumberObj.initialRemoveAttendanceNumberObj[`removeAttendanceNum${i}`] = 0;
}

export const initialState: NumberForLotteryState = {
    lotteryRangeNumberObj: { first: 1, last: 1 },
    lotteryTimes: 1,
    removeSeatNumberObj: initialRemoveNumberObj.initialRemoveSeatNumberObj,
    removeAttendanceNumberObj: initialRemoveNumberObj.initialRemoveAttendanceNumberObj,
};
export const initialNumberForLottery = initialState;

export const numberForLotterySlice = createSlice({
    name: "numberForLottery",
    initialState,
    reducers: {
        setLotteryRangeNumber: (state, { payload }) => {
            if (payload.reset) {
                const { lotteryRangeNumberObj } = payload;
                Object.keys(lotteryRangeNumberObj).map((key) => {
                    state.lotteryRangeNumberObj[key] = lotteryRangeNumberObj[key];
                });
            } else {
                const { name, value } = payload;
                state.lotteryRangeNumberObj[name] = parseInt(value);
            }
        },
        setLotteryTimes: (state, { payload }) => {
            state.lotteryTimes = parseInt(payload);
        },
        setRemoveSeatNumberObj: (state, { payload }) => {
            if (payload.reset) {
                const { removeSeatNumberObj } = payload;
                Object.keys(removeSeatNumberObj).map((key) => {
                    state.removeSeatNumberObj[key] = removeSeatNumberObj[key];
                });
            } else {
                const { name, value } = payload;
                state.removeSeatNumberObj[name] = parseInt(value);
            }
        },
        setRemoveAttendanceNumberObj: (state, { payload }) => {
            if (payload.reset) {
                const { removeAttendanceNumberObj } = payload;
                Object.keys(removeAttendanceNumberObj).map((key) => {
                    state.removeAttendanceNumberObj[key] = removeAttendanceNumberObj[key];
                });
            } else {
                const { name, value } = payload;
                state.removeAttendanceNumberObj[name] = parseInt(value);
            }
        },
    },
});

export const { setLotteryRangeNumber, setLotteryTimes, setRemoveSeatNumberObj, setRemoveAttendanceNumberObj } = numberForLotterySlice.actions;
export const numberForLotteryReducer = numberForLotterySlice.reducer;

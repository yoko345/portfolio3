import { configureStore } from "@reduxjs/toolkit";
import { clickCheckerReducer } from "./seat-lottery/features/clickCheckerSlice";
import { numberForLotteryReducer } from "./seat-lottery/features/numberForLotterySlice";
import { resultDisplaySpeedReducer } from "./seat-lottery/features/resultDisplaySpeedSlice";
import { lotteryReducer } from "./seat-lottery/features/lotterySlice";

export const store = configureStore({
    reducer: { clickChecker: clickCheckerReducer, numberForlottery: numberForLotteryReducer, resultDisplaySpeed: resultDisplaySpeedReducer, lottery: lotteryReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

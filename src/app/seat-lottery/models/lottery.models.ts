export interface initialRemoveNumberObjState {
    initialRemoveSeatNumberObj: Record<string, number>;
    initialRemoveAttendanceNumberObj: Record<string, number>;
}

export interface NumberForLotteryState {
    lotteryRangeNumberObj: Record<string, number>;
    lotteryTimes: number;
    removeSeatNumberObj: Record<string, number>;
    removeAttendanceNumberObj: Record<string, number>;
}

export interface ButtonClickState {
    settingClickObj: {
        isClick: boolean;
        text: string;
    };
    settingFirstClick: boolean;
    resetIsClick: boolean;
    lotteryIsClick: boolean;
    lockClickObj: {
        isClick: boolean;
        text: string;
    };
    allLotteryIsClick: boolean;
}

export interface ResultDisplaySpeedState {
    speed: number;
}

interface lotteryState {
    attendanceNumber: number;
    seatNumber: number;
}
export interface lotteryListState {
    lotteryList: lotteryState[];
    boolReadOnly: boolean;
}

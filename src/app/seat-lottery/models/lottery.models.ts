export interface initialRemoveNumberObjState {
    initialRemoveAttendanceNumberObj: Record<string, number>;
    initialRemoveSeatNumberObj: Record<string, number>;
}

export interface NumberForLotteryResultState {
    lotteryRangeNumberObj: Record<string, number>;
    removeAttendanceNumberObj: Record<string, number>;
    removeSeatNumberObj: Record<string, number>;
}
export interface NumberForLotteryState extends NumberForLotteryResultState {
    lotteryTimes: number;
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
    allowResultDisplay: boolean;
    lotteryDoneTimes: number;
}

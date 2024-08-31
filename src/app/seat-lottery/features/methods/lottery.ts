import { lotteryListState, NumberForLotteryResultState } from "../../models/lottery.models";

export function lotteryResult({ lotteryRangeNumberObj, removeAttendanceNumberObj, removeSeatNumberObj }: NumberForLotteryResultState): lotteryListState["lotteryList"] {
    // 出席番号
    const attendanceNumberList: number[] = [];
    const randomAttendanceNumberList: number[] = [];
    const { first: firstNumber, last: lastNumber } = lotteryRangeNumberObj;
    const removeAttendanceNumberList = Object.values(removeAttendanceNumberObj);

    for (let i = firstNumber; i <= lastNumber; i++) {
        if (removeAttendanceNumberList.includes(i)) {
            continue;
        } else {
            attendanceNumberList.push(i);
        }
    }

    do {
        const randomInt = Math.floor(Math.random() * attendanceNumberList.length);
        randomAttendanceNumberList.push(...attendanceNumberList.splice(randomInt, 1));
    } while (attendanceNumberList.length > 0);

    // 座席番号
    const seatNumberList: number[] = [];
    const removeSeatNumberList = Object.values(removeSeatNumberObj);

    for (let i = 1; i <= lastNumber - firstNumber + 1; i++) {
        if (removeSeatNumberList.includes(i)) {
            continue;
        } else {
            seatNumberList.push(i);
        }
    }

    const lotteryList = randomAttendanceNumberList.map((randomAttendanceNumber, index) => ({ attendanceNumber: randomAttendanceNumber, seatNumber: seatNumberList[index] }));

    return lotteryList;
}

export function lotteryResultDisplay({ lotteryTimes, lotteryDoneTimes }: Record<string, number>): string {
    let alertText = "";
    if (lotteryTimes < lotteryDoneTimes + 1) {
        alertText = "これ以上抽選はできません";
    }
    return alertText;
}

import { lotteryListState, NumberForLotteryState } from "../../models/lottery.models";

export function prepareLottery({ lotteryRangeNumberObj, lotteryTimes, removeSeatNumberObj, removeAttendanceNumberObj }: NumberForLotteryState): lotteryListState["lotteryList"] {
    // 座席番号
    const seatNumberList: number[] = [];
    const randomSeatNumberList: number[] = [];
    const { first: firstNumber, last: lastNumber } = lotteryRangeNumberObj;
    const removeSeatNumberList = Object.values(removeSeatNumberObj);

    for (let i = firstNumber; i <= lastNumber; i++) {
        if (removeSeatNumberList.includes(i)) {
            continue;
        } else {
            seatNumberList.push(i);
        }
    }

    do {
        const randomInt = Math.floor(Math.random() * seatNumberList.length);
        randomSeatNumberList.push(...seatNumberList.splice(randomInt, 1));
    } while (seatNumberList.length > 0);

    // 出席番号
    const attendanceNumberList: number[] = [];
    const removeAttendanceNumberList = Object.values(removeAttendanceNumberObj);

    for (let i = 1; i <= lastNumber - firstNumber + 1; i++) {
        if (removeAttendanceNumberList.includes(i)) {
            continue;
        } else {
            attendanceNumberList.push(i);
        }
    }

    const lotteryList = randomSeatNumberList.map((randomSeatNumber, index) => ({ seatNumber: randomSeatNumber, attendanceNumber: attendanceNumberList[index] }));

    return lotteryList;
}

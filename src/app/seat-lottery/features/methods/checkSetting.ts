import { NumberForLotteryState } from "../../models/lottery.models";

export function setAlertTextList({ lotteryRangeNumberObj, lotteryTimes, removeSeatNumberObj, removeAttendanceNumberObj }: NumberForLotteryState): string[] {
    const alertTextList: string[] = [];
    const { first: firstNumber, last: lastNumber } = lotteryRangeNumberObj;
    const removeAttendanceNumberList = Object.values(removeAttendanceNumberObj).filter((num) => num);
    const removeSeatNumberList = Object.values(removeSeatNumberObj).filter((num) => num);

    // 抽選範囲が未記入もしくは0の場合のアラート
    if (!firstNumber) {
        alertTextList.push("抽選範囲の最初は、1以上の数字を入れてください。");
    }
    if (!lastNumber) {
        alertTextList.push("抽選範囲の最後は、1以上の数字を入れてください。");
    }

    // 抽選回数が未記入もしくは0の場合のアラート
    if (!lotteryTimes) {
        alertTextList.push("抽選回数は、1以上の数字を入れてください。");
    }

    // 除く数（出席番号）
    const removeAttendanceAlert = removeNumberChecker(firstNumber, lastNumber, removeAttendanceNumberObj, "除く数（出席番号）");
    if (removeAttendanceAlert.length) {
        alertTextList.push(...removeAttendanceAlert);
    }

    // 除く数（座席番号）
    const removeSeatAlert = removeNumberChecker(firstNumber, lastNumber, removeSeatNumberObj, "除く数（座席番号）");
    if (removeSeatAlert.length) {
        alertTextList.push(...removeSeatAlert);
    } else if (removeAttendanceNumberList.length !== removeSeatNumberList.length) {
        // 抽選ができなくなるパターン
        alertTextList.push("除く数（出席番号）と除く数（座席番号）の個数は同じにしてください。");
    }

    if (firstNumber && lastNumber && lotteryTimes) {
        if (lastNumber - firstNumber < 0) {
            // 抽選範囲に関するアラート
            alertTextList.push("抽選範囲の最後は、最初の数字以上にしてください。");
        } else if (removeAttendanceNumberList.length >= lastNumber - firstNumber + 1) {
            // 抽選ができなくなるパターン
            alertTextList.push("抽選ができないので、抽選範囲を広げるか除く数の個数を減らしてください。");
        } else if (lotteryTimes > lastNumber - firstNumber + 1 - removeAttendanceNumberList.length) {
            // 抽選回数に関するアラート
            alertTextList.push(`抽選回数は最大で ${lastNumber - firstNumber + 1 - removeAttendanceNumberList.length} です。`);
        }
    }

    return alertTextList;
}

// 除く数のチェック
function removeNumberChecker(firstNumber: number, lastNumber: number, numberObj: Record<string, number>, alertMessage: string): string[] {
    const alertTextList: string[] = [];

    const removeNumberList = Object.values(numberObj)
        .map((num, index) => {
            if (num && (num < firstNumber || num > lastNumber)) {
                alertTextList.push(`${alertMessage}の${index + 1}番目の数字は、抽選範囲の${firstNumber}〜${lastNumber}に収まるようにしてください。`);
                return 0;
            } else if (num) {
                return num;
            }
        })
        .filter((num) => num);

    const uniqueRemoveNumberSet = new Set(removeNumberList);
    if (uniqueRemoveNumberSet.size !== removeNumberList.length) {
        alertTextList.push(`${alertMessage}において、重複している数字があるので、重複しないようにしてください。`);
    }

    return alertTextList;
}

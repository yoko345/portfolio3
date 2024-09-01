import { useAppSelector } from "../../hooks";

export default function LotteryAllResult() {
    const lotteryList = useAppSelector((state) => state.lottery.lotteryList);
    const lotteryDoneTimes = useAppSelector((state) => state.lottery.lotteryDoneTimes);

    return (
        <div
            id="lotteryResultDisplay"
            className="lottery-all-result-container"
        >
            <p className="lottery-text">抽選結果</p>
            <div className="lottery-all-result-container__display-box">
                {lotteryList.length ? (
                    lotteryList.map((lotteryObj, index) =>
                        index < lotteryDoneTimes ? (
                            <div
                                className="lottery-all-result-container__display-box__result-box"
                                key={lotteryObj.seatNumber}
                            >
                                <div className="lottery-all-result-container__display-box__result-box__seat-number-box">
                                    <p>座席番号：{lotteryObj.seatNumber}</p>
                                </div>
                                <div className="lottery-all-result-container__display-box__result-box__attendance-number-box">
                                    <p>{lotteryObj.attendanceNumber}</p>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )
                    )
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

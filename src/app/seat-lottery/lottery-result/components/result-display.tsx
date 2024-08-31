import { useAppSelector } from "../../../hooks";

export default function ResultDisplay() {
    const lotteryList = useAppSelector((state) => state.lottery.lotteryList);
    const allowResultDisplay = useAppSelector((state) => state.lottery.allowResultDisplay);
    const lotteryDoneTimes = useAppSelector((state) => state.lottery.lotteryDoneTimes);
    const resultTemporarySave = lotteryList[lotteryDoneTimes - 1] ? lotteryList[lotteryDoneTimes - 1].attendanceNumber : "";

    return (
        <div className="result-display-container mb-5">
            <div className="result-display-container__result-display">
                <p className="result-display-container__result-display__text">結果</p>
                <input
                    type="text"
                    id="result"
                    value={allowResultDisplay && lotteryList[lotteryDoneTimes - 1] ? lotteryList[lotteryDoneTimes - 1].attendanceNumber : resultTemporarySave}
                    className="result-display-container__result-display__input-text"
                />
            </div>
        </div>
    );
}

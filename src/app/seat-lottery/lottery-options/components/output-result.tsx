import { useAppSelector } from "@/app/hooks";
import { downloadCsv } from "../../features/methods/downloadCsv";

export default function OutputResult() {
    const settingFirstClick = useAppSelector((state) => state.clickChecker.settingFirstClick);
    const lotteryList = useAppSelector((state) => state.lottery.lotteryList);

    const clickOutputResultButton = () => {
        if (!settingFirstClick) {
            downloadCsv(lotteryList);
        } else {
            alert("設定ボタンを先に押して抽選のための準備を先にしてください。");
        }
    };
    return (
        <>
            <div className="output-result-button-container">
                <p className="output-result-button-container__text lottery-text">結果一覧：</p>
                <button
                    id="outputResultButton"
                    className="output-result-button-container__button"
                    onClick={clickOutputResultButton}
                >
                    <span className="output-result-button-container__button__text">Download CSV</span>
                </button>
            </div>
        </>
    );
}

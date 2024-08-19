"use client";

export default function OutputResult() {
    return (
        <>
            <div className="output-result-button-container">
                <p className="output-result-button-container__text lottery-text">結果一覧：</p>
                <div
                    id="outputResultButton"
                    className="output-result-button-container__button"
                >
                    <p className="output-result-button-container__button__text">Download CSV</p>
                </div>
            </div>
        </>
    );
}

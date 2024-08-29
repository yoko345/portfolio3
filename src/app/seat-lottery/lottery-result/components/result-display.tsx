export default function ResultDisplay() {
    return (
        <div className="result-display-container mb-5">
            <div className="result-display-container__result-display">
                <p className="result-display-container__result-display__text">結果</p>
                <input
                    type="text"
                    id="result"
                    className="result-display-container__result-display__input-text"
                />
            </div>
        </div>
    );
}

import { Row } from "react-bootstrap";

import AllLotteryButton from "./components/all-lottery-button";
import OutputResult from "./components/output-result";
import ResultDisplaySpeed from "./components/result-display-speed";

export default function LotteryOptions() {
    return (
        <>
            <Row>
                <p className="lottery-text">Options</p>
            </Row>
            <Row>
                <AllLotteryButton />
            </Row>
            <Row>
                <ResultDisplaySpeed />
            </Row>
            <Row>
                <OutputResult />
            </Row>
        </>
    );
}

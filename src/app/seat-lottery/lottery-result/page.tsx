import { Row } from "react-bootstrap";

import LockButton from "./components/lock-button";
import LotteryButton from "./components/lottery-button";
import ResultDisplay from "./components/result-display";

export default function LotteryResult() {
    return (
        <>
            <Row>
                <ResultDisplay />
            </Row>
            <Row>
                <LotteryButton />
            </Row>
            <Row>
                <LockButton />
            </Row>
        </>
    );
}

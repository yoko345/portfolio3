import { Container, Row } from "react-bootstrap";

import LockButton from "./components/lock-button";
import LotteryButton from "./components/lottery-button";
import ResultDisplay from "./components/result-display";

export default function LotteryResult() {
    return (
        <Container className="lottery-result-container">
            <Row>
                <ResultDisplay />
            </Row>
            <Row>
                <LotteryButton />
            </Row>
            <Row>
                <LockButton />
            </Row>
        </Container>
    );
}

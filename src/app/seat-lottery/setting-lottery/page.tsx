import { Container, Row } from "react-bootstrap";

import LotteryRange from "./components/lottery-range";
import LotteryTimes from "./components/lottery-times";
import RemoveAttendanceNumber from "./components/remove-attendance-number";
import RemoveSeatNumber from "./components/remove-seat-number";
import ResetButton from "./components/reset-button";
import SettingButton from "./components/setting-button";

export default function SettingLottery() {
    return (
        <Container>
            <Row>
                <LotteryRange />
            </Row>
            <Row>
                <LotteryTimes />
            </Row>
            <Row>
                <RemoveSeatNumber />
            </Row>
            <Row>
                <RemoveAttendanceNumber />
            </Row>
            <Row>
                <SettingButton />
            </Row>
            <Row>
                <ResetButton />
            </Row>
        </Container>
    );
}

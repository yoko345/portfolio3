import { Row } from "react-bootstrap";

import LotteryRange from "./components/lottery-range";
import LotteryTimes from "./components/lottery-times";
import RemoveAttendanceNumber from "./components/remove-attendance-number";
import RemoveSeatNumber from "./components/remove-seat-number";
import ResetButton from "./components/reset-button";
import SettingButton from "./components/setting-button";

export default function SettingLottery() {
    return (
        <>
            <Row>
                <LotteryRange />
            </Row>
            <Row>
                <LotteryTimes />
            </Row>
            <Row>
                <RemoveAttendanceNumber />
            </Row>
            <Row>
                <RemoveSeatNumber />
            </Row>
            <Row>
                <SettingButton />
            </Row>
            <Row>
                <ResetButton />
            </Row>
        </>
    );
}

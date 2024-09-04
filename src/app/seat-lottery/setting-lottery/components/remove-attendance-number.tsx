import { Container, Row, Col } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { setRemoveAttendanceNumberObj } from "../../features/numberForLotterySlice";
import { removeNumberValue } from "../../features/methods/checkSetting";

export default function RemoveAttendanceNumber() {
    const settingIsClick = useAppSelector((state) => state.clickChecker.settingClickObj.isClick);
    const removeAttendanceNumberObj = useAppSelector((state) => state.numberForlottery.removeAttendanceNumberObj);
    const boolReadOnly = useAppSelector((state) => state.lottery.boolReadOnly);
    const dispatch = useAppDispatch();

    return (
        <Container className="mb-5">
            <Row>
                <p className="lottery-text">除く数（出席番号）</p>{" "}
            </Row>

            <Row>
                {Object.keys(removeAttendanceNumberObj).map((removeNumKey) => (
                    <Col
                        className="input-container--remove"
                        key={removeNumKey}
                    >
                        <input
                            type="number"
                            className={`input-container--remove__remove-number ${boolReadOnly ? "disabled-input" : ""}`}
                            name={removeNumKey}
                            value={removeNumberValue(removeAttendanceNumberObj[removeNumKey], settingIsClick)}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setRemoveAttendanceNumberObj({ name: e.target.name, value: e.target.value }))}
                            min="0"
                            readOnly={boolReadOnly}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

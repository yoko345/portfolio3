import { Container, Row, Col } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { setRemoveSeatNumberObj } from "../../features/numberForLotterySlice";
import { removeNumberValue } from "../../features/methods/checkSetting";

export default function RemoveSeatNumber() {
    const settingIsClick = useAppSelector((state) => state.clickChecker.settingClickObj.isClick);
    const removeSeatNumberObj = useAppSelector((state) => state.numberForlottery.removeSeatNumberObj);
    const boolReadOnly = useAppSelector((state) => state.lottery.boolReadOnly);
    const dispatch = useAppDispatch();

    return (
        <Container className="mb-4">
            <Row>
                <p className="lottery-text">除く数（座席番号）</p>
            </Row>

            <Row>
                {Object.keys(removeSeatNumberObj).map((removeNumKey) => (
                    <Col
                        className="input-container--remove"
                        key={removeNumKey}
                    >
                        <input
                            type="number"
                            className={`input-container--remove__remove-number ${boolReadOnly ? "disabled-input" : ""}`}
                            name={removeNumKey}
                            value={removeNumberValue(removeSeatNumberObj[removeNumKey], settingIsClick)}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setRemoveSeatNumberObj({ name: e.target.name, value: e.target.value }))}
                            min="0"
                            readOnly={boolReadOnly}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

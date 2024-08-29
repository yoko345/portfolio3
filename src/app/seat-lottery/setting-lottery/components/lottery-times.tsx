import { Container, Row, Col } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { setLotteryTimes } from "../../features/numberForLotterySlice";

export default function LotteryTimes() {
    const lotteryTimes = useAppSelector((state) => state.numberForlottery.lotteryTimes);
    const boolReadOnly = useAppSelector((state) => state.lottery.boolReadOnly);
    const dispatch = useAppDispatch();

    return (
        <Container className="mb-4">
            <Row xxl="9">
                <Col xxl="5">
                    <div className="lottery-times-text-container">
                        <label
                            htmlFor="count"
                            className="lottery-text"
                        >
                            抽選回数
                        </label>
                    </div>
                </Col>
                <Col xxl="4">
                    <div className="input-container">
                        <input
                            type="number"
                            className={`input-container__input-num ${boolReadOnly ? "disabled-input" : ""}`}
                            id="count"
                            value={lotteryTimes}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setLotteryTimes(e.target.value))}
                            min="1"
                            readOnly={boolReadOnly}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

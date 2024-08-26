"use client";

import { Container, Row, Col } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { setLotteryRangeNumber } from "../../features/numberForLotterySlice";

export default function LotteryRange() {
    const firstLotteryNumber = useAppSelector((state) => state.numberForlottery.lotteryRangeNumberObj.first);
    const lastLotteryNumber = useAppSelector((state) => state.numberForlottery.lotteryRangeNumberObj.last);
    const boolReadOnly = useAppSelector((state) => state.lottery.boolReadOnly);
    const dispatch = useAppDispatch();

    return (
        <Container className="mb-4">
            <Row>
                <p className="lottery-text">抽選範囲（座席番号）</p>
            </Row>
            <Row xxl="11">
                <Col xxl="4">
                    <div className="input-container">
                        <input
                            type="number"
                            min="1"
                            className={`input-container__input-num ${boolReadOnly ? "disabled-input" : ""}`}
                            name="first"
                            value={firstLotteryNumber}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setLotteryRangeNumber({ name: e.target.name, value: e.target.value }))}
                            readOnly={boolReadOnly}
                        />
                    </div>
                </Col>
                <Col xxl="3">
                    <p className="input-container--text">&nbsp;〜&nbsp;</p>
                </Col>
                <Col xxl="4">
                    <div className="input-container">
                        <input
                            type="number"
                            min="1"
                            className={`input-container__input-num ${boolReadOnly ? "disabled-input" : ""}`}
                            name="last"
                            value={lastLotteryNumber}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setLotteryRangeNumber({ name: e.target.name, value: e.target.value }))}
                            readOnly={boolReadOnly}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

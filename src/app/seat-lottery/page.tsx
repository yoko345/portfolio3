"use client";

import { store } from "../store";
import { Provider } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import SettingLottery from "./setting-lottery/page";
import LotteryResult from "./lottery-result/page";
import LotteryOptions from "./lottery-options/page";
import LotteryAllResult from "./lottery-all-result/lottery-all-result";

export default function SeatLottery() {
    return (
        <Provider store={store}>
            <div id="lotteryBackground"></div>
            <Container fluid>
                <Row>
                    <Col xxl="3">
                        <SettingLottery />
                    </Col>
                    <Col
                        xxl="6"
                        className="lottery-result-container"
                    >
                        <LotteryResult />
                    </Col>
                    <Col xxl="3">
                        <LotteryOptions />
                    </Col>
                </Row>
            </Container>
            <LotteryAllResult />
        </Provider>
    );
}

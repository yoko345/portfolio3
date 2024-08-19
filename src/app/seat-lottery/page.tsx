"use client";

import { store } from "../store";
import { Provider } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import SettingLottery from "./setting-lottery/page";
import LotteryResult from "./lottery-result/page";
import LotteryOptions from "./lottery-options/page";

export default function SeatLottery() {
    return (
        <Provider store={store}>
            <div id="lotteryBackground"></div>
            <Container fluid>
                <Row>
                    <Col xxl="3">
                        <SettingLottery />
                    </Col>
                    <Col xxl="6">
                        <LotteryResult />
                    </Col>
                    <Col xxl="3">
                        <LotteryOptions />
                    </Col>
                </Row>
            </Container>
        </Provider>
    );
}

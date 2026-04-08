import type { Metadata } from "next";
import "./styles/seat-lottery-styles.scss";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
    title: "座席表の抽選",
    description: "座席表の抽選",
};

export default function SeatLotteryLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider>
            <div id="lotteryContainer">{children}</div>
        </StoreProvider>
    );
}

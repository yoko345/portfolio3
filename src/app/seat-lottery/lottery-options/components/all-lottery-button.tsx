import { useAppSelector, useAppDispatch } from "../../../hooks";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { allLotteryClick } from "../../features/clickCheckerSlice";
import { lotteryDoneCount, switchAllowResultDisplay } from "../../features/lotterySlice";

export default function AllLotteryButton() {
    const allLotteryIsClick = useAppSelector((state) => state.clickChecker.allLotteryIsClick);
    const settingFirstClick = useAppSelector((state) => state.clickChecker.settingFirstClick);
    const lotteryTimes = useAppSelector((state) => state.numberForlottery.lotteryTimes);
    const speed = useAppSelector((state) => state.resultDisplaySpeed.speed);
    const dispatch = useAppDispatch();

    const clickAllLottery = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!settingFirstClick && !allLotteryIsClick) {
            dispatch(allLotteryClick());
            dispatch(switchAllowResultDisplay({}));
            for (let i = 0; i < lotteryTimes; i++) {
                setTimeout(() => {
                    dispatch(lotteryDoneCount({}));
                }, 500 + speed * i);
            }
        } else if (settingFirstClick && !allLotteryIsClick) {
            if (alert("設定ボタンを先に押して抽選のための準備を先にしてください。") == undefined) {
                event.preventDefault();
            }
        }
    };

    return (
        <div className="all-lottery-button-container mb-3">
            <AnchorLink
                href="#lotteryResultDisplay"
                className={`all-lottery-button-container__button button-for-lottery  ${allLotteryIsClick ? "clicked" : ""}`}
                id="AllLotteryButton"
                onClick={clickAllLottery}
            >
                一括抽選
            </AnchorLink>
        </div>
    );
}

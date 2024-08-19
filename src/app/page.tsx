import Link from "next/link";

export default function Home() {
    return (
        <ul>
            <li><Link href="/seat-lottery">座席表の抽選</Link></li>
            <li><Link href="/test">テスト</Link></li>
        </ul>
    );
}

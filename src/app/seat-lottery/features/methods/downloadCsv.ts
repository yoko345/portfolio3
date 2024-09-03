import { lotteryListState } from "../../models/lottery.models";

export function downloadCsv(lotteryList: lotteryListState["lotteryList"]) {
    const date = new Date();
    const formatDate = formatDateFunction(date);
    const filename = `${formatDate}_download.csv`;
    console.log(filename);

    // BOMの付与（Excelでの文字化け対策）
    const bom = new Uint8Array([0xef, 0xbb, 0xbf]);

    // csvファイルを出力した際、下記のようになるようにしている
    // 座席番号　出席番号
    // 1　33
    // 2　5
    // 3　20
    let dataStr = `座席番号, 出席番号\r\n`;
    lotteryList.map((lotteryObj) => {
        dataStr += `${lotteryObj.seatNumber},${lotteryObj.attendanceNumber}\r\n`;
    });
    // Blobでデータを作成する
    const blob = new Blob([bom, dataStr], { type: "text/csv" });

    // blodからオブジェクトURLを作成
    const url = (window.URL || window.webkitURL).createObjectURL(blob);
    // ダウンロード用にリンクを作成する
    const download = document.createElement("a");
    // リンク先に上記で作成したURLを指定する
    download.href = url;
    // download属性にファイル名を指定する
    download.download = filename;
    // 作成したリンクをクリックしてダウンロードを実行する
    download.click();
    // createObjectURLで作成したオブジェクトURLを開放する
    (window.URL || window.webkitURL).revokeObjectURL(url);
}

function formatDateFunction(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}_${month}_${day}_${hours}${minutes}${seconds}`;
}

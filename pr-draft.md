# fix: Next.js を 16.x へアップグレードし、セキュリティ脆弱性および関連する警告を修正

---

### 概要

GitHub Dependabot が報告した Next.js の重大な脆弱性（CVE-2025-29927）をはじめとする複数のセキュリティ問題を解消するため、Next.js を 14.2.5 から 16.2.2 へアップグレードする。あわせてアップグレードに伴うビルドエラーおよびブラウザ警告を修正する。

---

### 背景

GitHub Advisory Database より以下の脆弱性が報告された。

- **CVE-2025-29927 (Critical)** — Next.js Middleware における認可チェックのバイパス。影響範囲: `>= 14.0.0, < 14.2.25`
- その他 Next.js 14.x に残存する high 脆弱性（DoS, HTTP smuggling 等）。修正には 15.5.14 以上が必要で、安定最新版として 16.2.2 を採用。

---

### 変更内容

#### パッケージ更新
- `next`: 14.2.5 → 16.2.2
- `eslint-config-next`: 14.2.5 → 16.2.2（peer dependency として eslint も v8 → v9 へ更新）
- `react-bootstrap`: 2.10.4 → 2.10.10

#### Next.js 16 対応（ビルドエラー修正）

| ファイル | 修正内容 |
|---|---|
| `src/app/hooks.ts` | `useDispatch.withTypes()` / `useSelector.withTypes()` を `TypedUseSelectorHook` 型アノテーションに変更。React Server Component 用バンドル (`rsc.mjs`) に `withTypes` が含まれず、Turbopack のサーバーサイド評価時にクラッシュしていたため。 |
| `src/app/seat-lottery/StoreProvider.tsx` (新規) | Redux `Provider` を Client Component としてラップ。layout から参照するために分離。 |
| `src/app/seat-lottery/layout.tsx` | `StoreProvider` を組み込み。サブページ（`/seat-lottery/lottery-options` 等）を直接レンダリングする際も Redux が利用できるようにした。 |
| 各コンポーネント 13 ファイル | `"use client"` ディレクティブを追加。React hooks を使用するコンポーネントは Next.js App Router では必須。 |
| `src/app/seat-lottery/setting-lottery/components/setting-button.tsx` | `echo -e` による `\n` 展開で壊れた文字列リテラルを修正。 |

#### ブラウザ警告修正

| ファイル | 修正内容 |
|---|---|
| `src/app/layout.tsx` | `<html>` に `data-scroll-behavior="smooth"` を追加。Bootstrap 5 の `scroll-behavior: smooth` に対する Next.js 16 の要求に対応。 |
| `src/app/seat-lottery/lottery-result/components/result-display.tsx` | 表示専用 `<input>` に `readOnly` を追加。`value` prop のみで `onChange` がない場合の警告を解消。 |
| `src/app/seat-lottery/lottery-all-result/lottery-all-result.tsx` | `.map()` 内で `<></>` を返すパターンを `slice(0, lotteryDoneTimes).map(...)` に変更。`<>` に `key` が付けられず発生していた警告を解消。 |

#### Turbopack ワークスペース警告修正

| ファイル | 修正内容 |
|---|---|
| `next.config.mjs` | `turbopack.root` にプロジェクトディレクトリを明示。複数の `package-lock.json` 検出による誤ったルート推定の警告を解消。 |

---

### 動作確認

- [x] `npm audit` で脆弱性 0 件を確認
- [x] `npm run build` がエラーなく完了することを確認
- [x] `npm run dev` 起動時に Turbopack ワークスペース警告が出ないことを確認
- [x] ブラウザコンソールで `value` / `scroll-behavior` / `key` 警告が出ないことを確認

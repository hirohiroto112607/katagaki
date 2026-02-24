# 肩書き研究会

Discord上で活動している「肩書き研究会」の公式ホームページです。

## 肩書き研究会とは

参加するだけで肩書きがもらえるDiscordコミュニティです。
現在、参加者全員に**「八百万の神の一柱」**というロールが付与されます。
それ以外の肩書きが必要な方は、サーバー内でご申請ください。

## 参加方法

[こちらのリンク](https://x.com/ojousannn/status/2025994059123392982)から創設者のXポストを確認して、参加してください。

## 技術スタック

| ツール | 用途 |
| --- | --- |
| React 19 + TypeScript | UIフレームワーク |
| Vite | ビルドツール |
| Tailwind CSS v3 | スタイリング |
| GitHub Actions | CI/CD |
| GitHub Pages | ホスティング |

## ローカル開発

### 必要環境

- Node.js 20以上
- pnpm

### セットアップ

```bash
git clone https://github.com/<あなたのユーザー名>/katagaki.git
cd katagaki
pnpm install
pnpm dev
```

ブラウザで `http://localhost:5173/katagaki/` を開いてください。

### ビルド

```bash
pnpm build
```

### プレビュー（ビルド成果物の確認）

```bash
pnpm preview
```

## デプロイ

`main` ブランチにプッシュすると、GitHub Actionsが自動的にビルドしてGitHub Pagesへデプロイします。

初回セットアップ時は、GitHubリポジトリの **Settings → Pages → Source** を `gh-pages` ブランチに設定してください。

デプロイ後のURL: `https://<あなたのユーザー名>.github.io/katagaki/`

## メンバーデータの更新

[src/data/members.ts](src/data/members.ts) を直接編集してPull Requestを送ってください。

## コントリビュート

[CONTRIBUTING.md](CONTRIBUTING.md) をご覧ください。

## ライセンス

MIT

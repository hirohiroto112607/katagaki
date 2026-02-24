# コントリビュートガイド

肩書き研究会ホームページへの貢献を歓迎します。
バグ報告・機能提案・メンバー情報の更新など、お気軽にどうぞ。

## 開発フロー

1. このリポジトリを **Fork** する
2. 機能ブランチを作成する

   ```bash
   git checkout -b feat/your-feature
   ```

3. 変更をコミットする（[コミットメッセージ規約](#コミットメッセージ規約)に従う）
4. ブランチを Push する

   ```bash
   git push origin feat/your-feature
   ```

5. **Pull Request** を作成する

## コミットメッセージ規約

[Conventional Commits](https://www.conventionalcommits.org/ja/) に従ってください。

| プレフィックス | 用途 |
| --- | --- |
| `feat:` | 新機能の追加 |
| `fix:` | バグ修正 |
| `docs:` | ドキュメントのみの変更 |
| `style:` | ロジック変更を伴わないスタイルの変更 |
| `refactor:` | リファクタリング |
| `chore:` | ビルドや設定ファイルの変更 |

**例:**

```
feat: メンバー一覧にアバター画像を追加
fix: モバイルでタブが折り返されない問題を修正
docs: READMEにデプロイ手順を追記
```

## Pull Request のガイドライン

- PR タイトルはコミットメッセージ規約に従う
- 変更内容を簡潔に説明する（何を・なぜ変更したか）
- UI の変更を含む場合はスクリーンショットを添付する
- 以下のチェックが通ることを確認してから PR を作成する

  ```bash
  pnpm build   # ビルドエラーがないこと
  pnpm lint    # Lintエラーがないこと
  ```

## メンバー情報の更新

[src/data/members.ts](src/data/members.ts) を直接編集して PR を送ってください。

追加の場合は既存の形式に合わせてください：

```ts
{ department: '広報', title: '新しい役職名', name: 'Discord名' },
```

空席・募集中の場合は `vacant: true` を付けてください：

```ts
{ department: '総務', title: '総務部長', name: '（募集中）', vacant: true },
```

## ローカル環境の準備

```bash
git clone https://github.com/<あなたのユーザー名>/katagaki.git
cd katagaki
pnpm install
pnpm dev
```

## 質問・提案

Issues または Discord サーバー内でお気軽にご連絡ください。

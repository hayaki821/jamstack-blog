- サイト: https://incomparable-cat-026e9e.netlify.app/

## 機能

- 記事一覧
- カテゴリー別記事一覧
- タグ別記事一覧
- 人気の記事一覧
- 最新の記事一覧
- 検索
- パンくずリスト
- 記事詳細
  - 目次
  - SNS シェアボタン
  - 下書きプレビュー
  - 関連記事
- サイトマップ
- バナー
- GA
- RSS
- PWA

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on netlify

- netlify: https://app.netlify.com/sites/incomparable-cat-026e9e

### スキーマから type の生成

- `npm run gen:types`
- ただし今はリレーションの自動生成がうまく行かないためため手動でリレーションに設定する
- 今の所の対象: blog の`category, tags`プロパティー

- `npm run api:build`
  - このコマンドで$api.ts ファイル生成

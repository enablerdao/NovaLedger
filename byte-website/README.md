# NovaLedger - バイトフレームワーク版

このディレクトリには、NovaLedgerウェブサイトのバイトフレームワーク版が含まれています。バイトフレームワークは、高速で軽量なJavaScriptフレームワークで、コンポーネントベースの開発を可能にします。

## 特徴

- コンポーネントベースのアーキテクチャ
- 高速なレンダリング
- 軽量なフレームワーク
- SPAルーティング
- リアクティブなデータバインディング

## ディレクトリ構造

```
byte-website/
├── components/       # 再利用可能なコンポーネント
├── css/              # スタイルシート
├── img/              # 画像ファイル
├── js/               # JavaScriptファイル
├── layouts/          # レイアウトコンポーネント
├── pages/            # ページコンポーネント
├── index.html        # メインHTMLファイル
├── byte.config.js    # バイトフレームワークの設定
├── package.json      # プロジェクト設定
└── server.js         # 開発サーバー
```

## インストール方法

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

または、インストールスクリプトを実行します：

```bash
./install.sh
```

## ビルド方法

```bash
# プロダクションビルド
npm run build
```

## デプロイ方法

```bash
# ビルド後、サーバーを起動
npm run start
```

## 技術スタック

- バイトフレームワーク
- モダンJavaScript (ES6+)
- CSS3
- HTML5
- Font Awesome

## ライセンス

© 2023 NovaLedger. All rights reserved.
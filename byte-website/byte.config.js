module.exports = {
  // プロジェクト名
  projectName: 'NovaLedger',
  
  // 開発サーバーの設定
  devServer: {
    port: 51336,
    host: '0.0.0.0',
    cors: true,
    allowIframes: true
  },
  
  // ビルド設定
  build: {
    outDir: 'dist',
    minify: true,
    sourceMaps: true
  },
  
  // ルーティング設定
  routes: [
    { path: '/', component: 'pages/Home' },
    { path: '/demo', component: 'pages/Demo' }
  ],
  
  // グローバルスタイル
  globalStyles: [
    'css/global.css'
  ]
}
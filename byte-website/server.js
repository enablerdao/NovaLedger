const http = require('http');
const fs = require('fs');
const path = require('path');

// ポート設定
const PORT = process.env.PORT || 51336;

// MIMEタイプのマッピング
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf'
};

// サーバーの作成
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // CORSヘッダーの設定
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
  // OPTIONSリクエストの処理
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // URLのパース
  let filePath = req.url;
  
  // ルートパスの場合はindex.htmlを提供
  if (filePath === '/') {
    filePath = '/index.html';
  }
  
  // SPAルーティングのサポート
  if (!path.extname(filePath) && filePath !== '/index.html') {
    filePath = '/index.html';
  }
  
  // ファイルパスの正規化
  filePath = path.normalize(path.join(__dirname, filePath));
  
  // ファイルの存在確認
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // 404エラー
      res.writeHead(404);
      res.end('404 Not Found');
      return;
    }
    
    // ファイルの拡張子からMIMEタイプを取得
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    // ファイルの読み込みとレスポンス
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // 500エラー
        res.writeHead(500);
        res.end('500 Internal Server Error');
        return;
      }
      
      // 成功レスポンス
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

// サーバーの起動
server.listen(PORT, '0.0.0.0', () => {
  console.log(`バイトフレームワークサーバーが起動しました: http://localhost:${PORT}`);
});
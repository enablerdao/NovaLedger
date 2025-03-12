import { Byte } from '@bytecmd/core';

export default {
  name: 'Footer',
  template: `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="/img/logo.svg" alt="NovaLedger Logo" class="footer-logo-img" width="60" height="60">
            <div>
              <h2>NovaLedger</h2>
              <p>究極のブロックチェーン技術</p>
            </div>
          </div>
          
          <div class="footer-links">
            <div class="footer-links-column">
              <h3>リソース</h3>
              <ul>
                <li><a href="#">ホワイトペーパー</a></li>
                <li><a href="#">ドキュメント</a></li>
                <li><a href="#">ロードマップ</a></li>
                <li><a href="#">GitHub</a></li>
              </ul>
            </div>
            
            <div class="footer-links-column">
              <h3>コミュニティ</h3>
              <ul>
                <li><a href="#">Discord</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Telegram</a></li>
                <li><a href="#">Medium</a></li>
              </ul>
            </div>
            
            <div class="footer-links-column">
              <h3>会社情報</h3>
              <ul>
                <li><a href="#">チーム</a></li>
                <li><a href="#">パートナー</a></li>
                <li><a href="#">採用情報</a></li>
                <li><a href="#">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2023 NovaLedger. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
};
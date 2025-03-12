import { Byte } from '@bytecmd/core';

export default {
  name: 'DeveloperSection',
  template: `
    <section id="developers" class="section features-section">
      <div class="container">
        <h2 class="section-title">開発者向けツール</h2>
        <div class="dev-tools-grid">
          <div class="dev-tool-card">
            <h3><i class="fas fa-code"></i> スマートコントラクト</h3>
            <p>EVM互換＋WASMベースの両対応で、既存のDAppsも簡単に移行可能</p>
          </div>
          <div class="dev-tool-card">
            <h3><i class="fas fa-robot"></i> AI支援開発</h3>
            <p>コントラクト開発時にAIがコード自動生成・最適化を行い、開発効率を向上</p>
          </div>
          <div class="dev-tool-card">
            <h3><i class="fas fa-puzzle-piece"></i> No-code環境</h3>
            <p>プログラミング知識がなくても簡単にDAppsを構築できるツールを提供</p>
          </div>
          <div class="dev-tool-card">
            <h3><i class="fas fa-cubes"></i> 標準モジュール</h3>
            <p>ウォレット・マーケットプレイス・DEX・DeFiモジュールを標準提供</p>
          </div>
        </div>
      </div>
    </section>
  `
};
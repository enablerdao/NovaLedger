import { Byte } from '@bytecmd/core';

export default {
  name: 'ConsensusSection',
  template: `
    <section id="consensus" class="section consensus-section">
      <div class="container">
        <h2 class="section-title">コンセンサスアルゴリズム</h2>
        <div class="consensus-content">
          <div class="consensus-text">
            <h3>Proof of Nova（PoN）</h3>
            <ul>
              <li>PoSの経済的インセンティブ</li>
              <li>DAGの非同期性</li>
              <li>PoHのタイムスタンプ管理</li>
              <li>ランダム選出バリデーターグループによる並行ブロック生成</li>
              <li>DAG構造によるコンフリクト回避</li>
              <li>AIによる信頼度スコア最適化</li>
              <li>MEV対策のランダム化</li>
            </ul>
          </div>
          <div class="pon-diagram">
            <img src="/img/pon-diagram.svg" alt="Proof of Nova Diagram" class="diagram-img" loading="lazy" width="500" height="400">
          </div>
        </div>
      </div>
    </section>
  `
};
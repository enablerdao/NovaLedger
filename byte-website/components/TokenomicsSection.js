import { Byte } from '@bytecmd/core';

export default {
  name: 'TokenomicsSection',
  template: `
    <section id="tokenomics" class="section tokenomics-section">
      <div class="container">
        <h2 class="section-title">経済システム（トークノミクス）</h2>
        <div class="tokenomics-content">
          <div class="tokenomics-text">
            <h3>NOVA（NVL）トークン</h3>
            <p>ネットワークの基盤となるメイントークン</p>
            <ul>
              <li>ネットワーク利用料の支払い</li>
              <li>バリデータ報酬</li>
              <li>ガバナンス参加権</li>
              <li>AIによる動的インフレ調整（年間1-3%）</li>
              <li>マイクロペイメント対応</li>
            </ul>
          </div>
          <div class="tokenomics-chart">
            <img src="/img/token-chart.svg" alt="NOVA Token Distribution" class="diagram-img" loading="lazy" width="400" height="400">
          </div>
        </div>
      </div>
    </section>
  `
};
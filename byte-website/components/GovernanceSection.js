import { Byte } from '@bytecmd/core';

export default {
  name: 'GovernanceSection',
  template: `
    <section id="governance" class="section governance-section">
      <div class="container">
        <h2 class="section-title">ガバナンス構造</h2>
        <div class="governance-content">
          <div class="aidao-diagram">
            <img src="/img/aidao-diagram.svg" alt="AIDAO Governance Diagram" class="diagram-img" loading="lazy" width="400" height="400">
          </div>
          <div class="governance-text">
            <h3>AIサポート型DAO（AIDAO）</h3>
            <p>従来のDAOを超えた新しいガバナンスモデル</p>
            <ul>
              <li>AIが客観的データに基づき意思決定を支援</li>
              <li>経済学的妥当性を考慮した提案システム</li>
              <li>ネットワークの健全性を常に監視</li>
              <li>Quadratic Votingによる公平な投票システム</li>
              <li>トークンホルダーの平等な参加権</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
};
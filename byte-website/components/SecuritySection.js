import { Byte } from '@bytecmd/core';

export default {
  name: 'SecuritySection',
  template: `
    <section id="security" class="section consensus-section">
      <div class="container">
        <h2 class="section-title">セキュリティとプライバシー</h2>
        <div class="security-features">
          <div class="security-card">
            <h3><i class="fas fa-shield-alt"></i> 量子耐性暗号</h3>
            <p>Post-Quantum Cryptography (PQC)を全面的に導入し、Quantum-Safeアドレスをデフォルト化</p>
          </div>
          <div class="security-card">
            <h3><i class="fas fa-user-secret"></i> ゼロ知識証明</h3>
            <p>zk-SNARK、zk-STARKを全ノードに実装し、完全なプライバシー保護をユーザーの選択で提供</p>
          </div>
          <div class="security-card">
            <h3><i class="fas fa-robot"></i> AIベース不正検知</h3>
            <p>ノードの挙動を常時監視し、不審行動を即座に排除、コンセンサス操作や51%攻撃を防止</p>
          </div>
        </div>
      </div>
    </section>
  `
};
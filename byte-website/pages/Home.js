import { Byte } from '@bytecmd/core';

export default {
  name: 'HomePage',
  data() {
    return {
      features: [
        { icon: 'bolt', title: '超高速', description: '100,000 TPS以上の処理能力' },
        { icon: 'sun', title: '高スケーラビリティ', description: 'シャーディング＋ロールアップ併用' },
        { icon: 'clock', title: 'ゼロ遅延決済', description: '即時ファイナリティを実現' },
        { icon: 'coins', title: '最小手数料', description: 'マイクロトランザクションも低コスト' },
        { icon: 'network-wired', title: '究極の分散性', description: '真の非中央集権化を実現' },
        { icon: 'shield-alt', title: '量子耐性', description: '将来の量子コンピュータにも対応' },
        { icon: 'brain', title: 'AI最適化', description: 'AIによるスマートコントラクト最適化' },
        { icon: 'leaf', title: '環境配慮', description: 'BTC比99.99%以上の省エネ達成' }
      ],
      faqItems: [
        {
          question: 'NovaLedgerとは何ですか？',
          answer: 'NovaLedgerは、超高速処理（100,000+ TPS）、高スケーラビリティ、ゼロ遅延決済、最小手数料、究極の分散性、量子耐性、AIによる最適化など、現在のブロックチェーン技術の限界を超える革新的な機能を提供する次世代ブロックチェーンプラットフォームです。'
        },
        {
          question: 'Proof of Nova（PoN）とは何ですか？',
          answer: 'Proof of Nova（PoN）は、NovaLedgerの革新的なコンセンサスアルゴリズムで、PoSの経済的インセンティブ、DAGの非同期性、PoHのタイムスタンプ管理の長所を融合しています。ランダム選出されたバリデーターグループが同時並行的にブロックを生成し、DAG構造を活用してコンフリクトを回避します。さらに、AIが信頼度スコアを継続的に最適化し、MEV対策としてバリデータごとのブロック提案をランダム化します。'
        },
        {
          question: 'NovaLedgerはどのようにして100,000+ TPSを実現するのですか？',
          answer: 'NovaLedgerは、以下の技術を組み合わせることで超高速処理を実現します：\n・DAG（Directed Acyclic Graph）構造による並列トランザクション処理\n・シャーディングによるネットワークの水平スケーリング\n・レイヤー2ソリューション（zkEVM、Optimistic Rollups）の統合\n・AIによるネットワークリソースの動的最適化\n・高効率なP2Pプロトコルと動的ルーティング'
        },
        {
          question: 'NovaLedgerはどのようにして量子耐性を確保するのですか？',
          answer: 'NovaLedgerは、Post-Quantum Cryptography (PQC)を全面的に導入し、量子コンピュータによる攻撃に耐性のある暗号アルゴリズムを使用します。具体的には、格子ベース暗号（NTRU、CRYSTALS-Kyber）、ハッシュベース署名（SPHINCS+）などの技術を採用し、Quantum-Safeアドレスをデフォルト化しています。これにより、将来の量子コンピュータが実用化されても、セキュリティを維持することができます。'
        },
        {
          question: 'AIサポート型DAO（AIDAO）とは何ですか？',
          answer: 'AIサポート型DAO（AIDAO）は、従来のDAOを超えた新しいガバナンスモデルです。AIが客観的データ、経済学的妥当性、ネットワークの健全性を考慮した上で、コミュニティの意思決定を支援します。Quadratic Votingを採用し、トークンホルダーが公平に参加できる仕組みを提供します。AIは決定を下すのではなく、データ分析と提案評価を通じて、より情報に基づいた意思決定をコミュニティが行えるようサポートします。'
        },
        {
          question: 'NovaLedgerはどのような開発者ツールを提供していますか？',
          answer: 'NovaLedgerは、開発者向けに以下のツールを提供しています：\n・EVM互換＋WASMベースのスマートコントラクト環境\n・AIによるコード自動生成・最適化機能\n・No-codeおよびLow-code開発環境\n・ウォレット・マーケットプレイス・DEX・DeFiモジュールの標準提供\n・テスト・デバッグフレームワーク\n・モニタリングとアナリティクスツール'
        },
        {
          question: 'NovaLedgerはどのようにして環境に配慮していますか？',
          answer: 'NovaLedgerは、以下の方法で環境持続可能性を確保しています：\n・エネルギー効率の高いPoNコンセンサスアルゴリズム（BTC比99.99%以上の省エネ）\n・再生可能エネルギーで稼働するグリーンノードへの報酬ボーナス\n・カーボンフットプリントの継続的なモニタリングと削減\n・エネルギー効率を考慮したプロトコル設計'
        }
      ],
      activeFaqIndex: -1
    };
  },
  mounted() {
    // スクロール監視の設定
    this.setupScrollObserver();
  },
  methods: {
    setupScrollObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      }, { threshold: 0.1 });
      
      // セクションタイトルを監視
      document.querySelectorAll('.section-title').forEach(title => {
        observer.observe(title);
      });
      
      // 特徴カードを監視
      document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
      });
    },
    toggleFaq(index) {
      this.activeFaqIndex = this.activeFaqIndex === index ? -1 : index;
    }
  },
  template: `
    <div>
      <!-- 特徴セクション -->
      <section id="concept" class="section features-section">
        <div class="container">
          <h2 class="section-title">基本コンセプト</h2>
          <div class="features-grid">
            <div v-for="(feature, index) in features" :key="index" class="feature-card">
              <div class="feature-icon">
                <i :class="'fas fa-' + feature.icon"></i>
              </div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- コンセンサスセクション -->
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
      
      <!-- アーキテクチャセクション -->
      <section id="architecture" class="section architecture-section">
        <div class="container">
          <h2 class="section-title">アーキテクチャ構造</h2>
          <div class="architecture-layers">
            <div id="layer3" class="layer">
              <h3>レイヤー3（アプリケーション層）</h3>
              <p>AI支援型スマートコントラクト、GPT-4級AIによる自動コード監査・バグ修正・最適化</p>
            </div>
            <div id="layer2" class="layer">
              <h3>レイヤー2（拡張性）</h3>
              <p>zkEVM、Optimistic Rollups、AIオプティマイザーによる低コスト高速処理</p>
            </div>
            <div id="layer1" class="layer">
              <h3>レイヤー1（ベース層）</h3>
              <p>DAG型マルチチェーン構造、シャーディングによる超高スケーラビリティ</p>
            </div>
            <div id="layer0" class="layer">
              <h3>レイヤー0（ネットワーク層）</h3>
              <p>独自P2Pプロトコル、動的ルーティングによる遅延最小化と冗長性最大化</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- セキュリティセクション -->
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
      
      <!-- ガバナンスセクション -->
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
      
      <!-- トークノミクスセクション -->
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
      
      <!-- 開発者向けツールセクション -->
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
      
      <!-- エコシステムセクション -->
      <section id="ecosystem" class="section architecture-section">
        <div class="container">
          <h2 class="section-title">エコシステム展開</h2>
          <div class="ecosystem-grid">
            <div class="ecosystem-card">
              <div class="ecosystem-icon">
                <i class="fas fa-palette"></i>
              </div>
              <h3>NFTマーケットプレイス</h3>
            </div>
            <div class="ecosystem-card">
              <div class="ecosystem-icon">
                <i class="fas fa-exchange-alt"></i>
              </div>
              <h3>DEX</h3>
            </div>
            <div class="ecosystem-card">
              <div class="ecosystem-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <h3>DeFi</h3>
            </div>
            <div class="ecosystem-card">
              <div class="ecosystem-icon">
                <i class="fas fa-vr-cardboard"></i>
              </div>
              <h3>メタバース</h3>
            </div>
            <div class="ecosystem-card">
              <div class="ecosystem-icon">
                <i class="fas fa-gamepad"></i>
              </div>
              <h3>ゲーミング</h3>
            </div>
            <div class="ecosystem-card">
              <div class="ecosystem-icon">
                <i class="fas fa-microchip"></i>
              </div>
              <h3>IoT</h3>
            </div>
            <div class="ecosystem-card">
              <div class="ecosystem-icon">
                <i class="fas fa-heartbeat"></i>
              </div>
              <h3>医療データ</h3>
            </div>
            <div class="ecosystem-card">
              <div class="ecosystem-icon">
                <i class="fas fa-plus"></i>
              </div>
              <h3>その他</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 特徴まとめセクション -->
      <section id="summary" class="section consensus-section">
        <div class="container">
          <h2 class="section-title">特徴まとめ</h2>
          <div class="table-container">
            <table class="features-table">
              <thead>
                <tr>
                  <th>特徴</th>
                  <th>詳細</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TPS（処理速度）</td>
                  <td>100,000以上</td>
                </tr>
                <tr>
                  <td>コンセンサス</td>
                  <td>PoN (PoS+DAG+PoH)</td>
                </tr>
                <tr>
                  <td>ファイナリティ</td>
                  <td>即時</td>
                </tr>
                <tr>
                  <td>スケーリング</td>
                  <td>シャーディング＋Rollups</td>
                </tr>
                <tr>
                  <td>プライバシー</td>
                  <td>zk技術</td>
                </tr>
                <tr>
                  <td>暗号方式</td>
                  <td>量子耐性</td>
                </tr>
                <tr>
                  <td>スマートコントラクト</td>
                  <td>EVM & WASM (AI最適化)</td>
                </tr>
                <tr>
                  <td>ガバナンス</td>
                  <td>AIサポート型DAO (AIDAO)</td>
                </tr>
                <tr>
                  <td>エネルギー効率</td>
                  <td>極めて高い（BTC比99.99%削減）</td>
                </tr>
                <tr>
                  <td>トークン</td>
                  <td>NOVA（NVL）</td>
                </tr>
                <tr>
                  <td>経済性</td>
                  <td>AI最適化インフレ率（約1〜3%）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <!-- FAQセクション -->
      <section id="faq" class="section features-section">
        <div class="container">
          <h2 class="section-title">よくある質問</h2>
          <div class="faq-container">
            <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
              <div class="faq-question" @click="toggleFaq(index)" :aria-expanded="activeFaqIndex === index">
                <h3>{{ item.question }}</h3>
                <div class="faq-icon">+</div>
              </div>
              <div class="faq-answer">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
};
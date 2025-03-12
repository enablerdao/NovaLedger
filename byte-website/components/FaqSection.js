import { Byte } from '@bytecmd/core';

export default {
  name: 'FaqSection',
  data() {
    return {
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
  methods: {
    toggleFaq(index) {
      this.activeFaqIndex = this.activeFaqIndex === index ? -1 : index;
    }
  },
  template: `
    <section id="faq" class="section features-section">
      <div class="container">
        <h2 class="section-title">よくある質問</h2>
        <div class="faq-container">
          <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
            <div class="faq-question" @click="toggleFaq(index)" :aria-expanded="activeFaqIndex === index">
              <h3>{{ item.question }}</h3>
              <div class="faq-icon">+</div>
            </div>
            <div class="faq-answer" :style="{ maxHeight: activeFaqIndex === index ? '1000px' : '0', padding: activeFaqIndex === index ? '0 20px 20px' : '0 20px' }">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};
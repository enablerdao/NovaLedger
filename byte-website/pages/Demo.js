import { Byte } from '@bytecmd/core';

export default {
  name: 'DemoPage',
  data() {
    return {
      nodes: 10,
      txRate: 100,
      networkDelay: 50,
      aiOptimization: true,
      sharding: true,
      consensusType: 'pon',
      isSimulationRunning: false,
      isPaused: false,
      tps: 0,
      confirmationTime: 0,
      networkLoad: 0,
      energyEfficiency: 'high',
      logs: [
        { time: this.getCurrentTime(), type: 'INFO', message: 'シミュレーションを開始してください' }
      ],
      transactions: [],
      blocks: [],
      validators: []
    };
  },
  computed: {
    energyEfficiencyText() {
      return this.energyEfficiency === 'high' ? '高' : this.energyEfficiency === 'medium' ? '中' : '低';
    }
  },
  methods: {
    getCurrentTime() {
      const now = new Date();
      return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    },
    startSimulation() {
      if (this.isSimulationRunning) return;
      
      this.isSimulationRunning = true;
      this.isPaused = false;
      this.logs = [
        { time: this.getCurrentTime(), type: 'INFO', message: 'シミュレーションを開始しました' }
      ];
      
      // バリデータの初期化
      this.initializeValidators();
      
      // シミュレーションループの開始
      this.simulationInterval = setInterval(() => {
        this.simulationStep();
      }, 1000);
      
      this.addLogEntry('INFO', 'Proof of Nova (PoN) シミュレーションを開始しました');
    },
    pauseSimulation() {
      if (!this.isSimulationRunning || this.isPaused) return;
      
      this.isPaused = true;
      clearInterval(this.simulationInterval);
      this.addLogEntry('INFO', 'シミュレーションを一時停止しました');
    },
    resumeSimulation() {
      if (!this.isSimulationRunning || !this.isPaused) return;
      
      this.isPaused = false;
      this.simulationInterval = setInterval(() => {
        this.simulationStep();
      }, 1000);
      this.addLogEntry('INFO', 'シミュレーションを再開しました');
    },
    resetSimulation() {
      this.isSimulationRunning = false;
      this.isPaused = false;
      clearInterval(this.simulationInterval);
      
      this.tps = 0;
      this.confirmationTime = 0;
      this.networkLoad = 0;
      this.energyEfficiency = 'high';
      this.transactions = [];
      this.blocks = [];
      this.validators = [];
      
      this.logs = [
        { time: this.getCurrentTime(), type: 'INFO', message: 'シミュレーションをリセットしました' }
      ];
    },
    initializeValidators() {
      this.validators = [];
      for (let i = 0; i < this.nodes; i++) {
        this.validators.push({
          id: 'validator_' + i,
          stake: Math.floor(Math.random() * 1000) + 100,
          reliability: Math.random() * 0.5 + 0.5,
          position: {
            x: Math.random() * 800,
            y: Math.random() * 400
          }
        });
      }
      this.addLogEntry('INFO', `${this.nodes}個のバリデータノードを初期化しました`);
    },
    simulationStep() {
      // 新しいトランザクションの生成
      const newTxCount = Math.floor(Math.random() * this.txRate * 1.5);
      for (let i = 0; i < newTxCount; i++) {
        this.generateTransaction();
      }
      
      // バリデータによるブロック生成
      this.generateBlocks();
      
      // メトリクスの更新
      this.updateMetrics();
      
      // ネットワークの視覚化更新
      this.updateVisualization();
    },
    generateTransaction() {
      const tx = {
        id: 'tx_' + Math.random().toString(36).substr(2, 9),
        sender: '0x' + Math.random().toString(36).substr(2, 10),
        receiver: '0x' + Math.random().toString(36).substr(2, 10),
        amount: Math.random() * 100,
        timestamp: Date.now(),
        status: 'pending'
      };
      
      this.transactions.push(tx);
      
      // ログに追加（一部のトランザクションのみ）
      if (Math.random() < 0.1) {
        this.addLogEntry('INFO', `新しいトランザクション: ${tx.id.substring(0, 8)}... (${tx.sender.substring(0, 6)} → ${tx.receiver.substring(0, 6)}, ${tx.amount.toFixed(2)} NVL)`);
      }
    },
    generateBlocks() {
      // コンセンサスタイプに応じたブロック生成ロジック
      if (this.consensusType === 'pon') {
        this.generatePoNBlocks();
      } else if (this.consensusType === 'pos') {
        this.generatePoSBlocks();
      } else {
        this.generatePoWBlocks();
      }
    },
    generatePoNBlocks() {
      // PoNではバリデータが並列にブロックを生成
      const selectedValidators = this.selectValidators(Math.min(5, this.nodes));
      
      selectedValidators.forEach(validator => {
        // 処理可能なトランザクションを選択
        const txsToProcess = this.transactions
          .filter(tx => tx.status === 'pending')
          .slice(0, Math.floor(Math.random() * 50) + 10);
        
        if (txsToProcess.length > 0) {
          const block = {
            id: 'block_' + Math.random().toString(36).substr(2, 9),
            validator: validator.id,
            transactions: txsToProcess.map(tx => tx.id),
            timestamp: Date.now(),
            parentBlocks: this.blocks.slice(-3).map(b => b.id)
          };
          
          this.blocks.push(block);
          
          // トランザクションのステータスを更新
          txsToProcess.forEach(tx => {
            const txIndex = this.transactions.findIndex(t => t.id === tx.id);
            if (txIndex !== -1) {
              this.transactions[txIndex].status = 'confirmed';
            }
          });
          
          if (Math.random() < 0.2) {
            this.addLogEntry('SUCCESS', `バリデータ ${validator.id.substring(0, 8)} が新しいブロックを生成: ${txsToProcess.length} トランザクションを処理`);
          }
        }
      });
    },
    generatePoSBlocks() {
      // PoSでは1つのバリデータがブロックを生成
      const selectedValidator = this.selectValidators(1)[0];
      
      // 処理可能なトランザクションを選択
      const txsToProcess = this.transactions
        .filter(tx => tx.status === 'pending')
        .slice(0, Math.floor(Math.random() * 30) + 5);
      
      if (txsToProcess.length > 0) {
        const block = {
          id: 'block_' + Math.random().toString(36).substr(2, 9),
          validator: selectedValidator.id,
          transactions: txsToProcess.map(tx => tx.id),
          timestamp: Date.now(),
          parentBlock: this.blocks.length > 0 ? this.blocks[this.blocks.length - 1].id : null
        };
        
        this.blocks.push(block);
        
        // トランザクションのステータスを更新
        txsToProcess.forEach(tx => {
          const txIndex = this.transactions.findIndex(t => t.id === tx.id);
          if (txIndex !== -1) {
            this.transactions[txIndex].status = 'confirmed';
          }
        });
        
        this.addLogEntry('SUCCESS', `バリデータ ${selectedValidator.id.substring(0, 8)} が新しいブロックを生成: ${txsToProcess.length} トランザクションを処理`);
      }
    },
    generatePoWBlocks() {
      // PoWでは計算能力に基づいてブロックを生成
      if (Math.random() < 0.3) { // PoWは遅いのでブロック生成確率を下げる
        // 処理可能なトランザクションを選択
        const txsToProcess = this.transactions
          .filter(tx => tx.status === 'pending')
          .slice(0, Math.floor(Math.random() * 20) + 3);
        
        if (txsToProcess.length > 0) {
          const block = {
            id: 'block_' + Math.random().toString(36).substr(2, 9),
            miner: 'miner_' + Math.floor(Math.random() * this.nodes),
            transactions: txsToProcess.map(tx => tx.id),
            timestamp: Date.now(),
            parentBlock: this.blocks.length > 0 ? this.blocks[this.blocks.length - 1].id : null
          };
          
          this.blocks.push(block);
          
          // トランザクションのステータスを更新
          txsToProcess.forEach(tx => {
            const txIndex = this.transactions.findIndex(t => t.id === tx.id);
            if (txIndex !== -1) {
              this.transactions[txIndex].status = 'confirmed';
            }
          });
          
          this.addLogEntry('SUCCESS', `マイナー ${block.miner.substring(0, 8)} が新しいブロックを生成: ${txsToProcess.length} トランザクションを処理`);
        }
      } else {
        if (Math.random() < 0.2) {
          this.addLogEntry('INFO', 'マイナーがハッシュ計算中...');
        }
      }
    },
    selectValidators(count) {
      // ステークに基づいて確率的にバリデータを選択
      const totalStake = this.validators.reduce((sum, v) => sum + v.stake, 0);
      const selectedValidators = [];
      
      while (selectedValidators.length < count && selectedValidators.length < this.validators.length) {
        const r = Math.random() * totalStake;
        let cumulativeStake = 0;
        
        for (const validator of this.validators) {
          if (selectedValidators.includes(validator)) continue;
          
          cumulativeStake += validator.stake;
          if (r <= cumulativeStake) {
            selectedValidators.push(validator);
            break;
          }
        }
      }
      
      return selectedValidators;
    },
    updateMetrics() {
      // TPSの計算
      const confirmedTxs = this.transactions.filter(tx => tx.status === 'confirmed');
      const recentTxs = confirmedTxs.filter(tx => Date.now() - tx.timestamp < 10000);
      this.tps = Math.floor(recentTxs.length / 10);
      
      // 確認時間の計算
      if (confirmedTxs.length > 0) {
        const confirmationTimes = confirmedTxs.map(tx => {
          const block = this.blocks.find(b => b.transactions.includes(tx.id));
          return block ? block.timestamp - tx.timestamp : 0;
        }).filter(time => time > 0);
        
        if (confirmationTimes.length > 0) {
          this.confirmationTime = Math.floor(confirmationTimes.reduce((sum, time) => sum + time, 0) / confirmationTimes.length);
        }
      }
      
      // ネットワーク負荷の計算
      const pendingTxs = this.transactions.filter(tx => tx.status === 'pending');
      this.networkLoad = Math.min(100, Math.floor((pendingTxs.length / (this.txRate * 10)) * 100));
      
      // エネルギー効率の計算
      if (this.consensusType === 'pon') {
        this.energyEfficiency = 'high';
      } else if (this.consensusType === 'pos') {
        this.energyEfficiency = 'medium';
      } else {
        this.energyEfficiency = 'low';
      }
    },
    updateVisualization() {
      // ここでネットワークの視覚化を更新
      // 実際の実装では、Canvas APIやD3.jsなどを使用して
      // ノードとトランザクションのフローを描画します
    },
    addLogEntry(type, message) {
      this.logs.unshift({
        time: this.getCurrentTime(),
        type,
        message
      });
      
      // ログの最大数を制限
      if (this.logs.length > 100) {
        this.logs = this.logs.slice(0, 100);
      }
    },
    getConsensusName() {
      switch (this.consensusType) {
        case 'pon':
          return 'Proof of Nova (PoN)';
        case 'pos':
          return 'Proof of Stake (PoS)';
        case 'pow':
          return 'Proof of Work (PoW)';
        default:
          return 'Unknown';
      }
    }
  },
  beforeUnmount() {
    // クリーンアップ
    if (this.simulationInterval) {
      clearInterval(this.simulationInterval);
    }
  },
  template: `
    <div class="simulator-container">
      <section class="section">
        <div class="container">
          <h1>Proof of Nova (PoN) シミュレーター</h1>
          <p>このインタラクティブなデモでは、NovaLedgerの革新的なコンセンサスアルゴリズム「Proof of Nova (PoN)」の動作を視覚的に体験できます。DAG構造を活用した並列処理と、AIによる最適化がどのようにして超高速なトランザクション処理を実現するかをご覧ください。</p>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <div class="simulator-controls">
            <div class="simulator-settings">
              <h2>シミュレーション設定</h2>
              <div class="setting-group">
                <label for="nodes">ノード数:</label>
                <input type="range" id="nodes" v-model="nodes" min="5" max="50" :disabled="isSimulationRunning">
                <span>{{ nodes }}</span>
              </div>
              <div class="setting-group">
                <label for="txRate">トランザクション生成率 (tx/秒):</label>
                <input type="range" id="txRate" v-model="txRate" min="10" max="1000" :disabled="isSimulationRunning">
                <span>{{ txRate }}</span>
              </div>
              <div class="setting-group">
                <label for="networkDelay">ネットワーク遅延 (ms):</label>
                <input type="range" id="networkDelay" v-model="networkDelay" min="0" max="500" :disabled="isSimulationRunning">
                <span>{{ networkDelay }}</span>
              </div>
            </div>
            
            <div class="simulator-settings">
              <h2>アルゴリズム設定</h2>
              <div class="setting-group">
                <label for="consensusType">コンセンサスタイプ:</label>
                <select id="consensusType" v-model="consensusType" :disabled="isSimulationRunning">
                  <option value="pon">Proof of Nova (PoN)</option>
                  <option value="pos">Proof of Stake (PoS)</option>
                  <option value="pow">Proof of Work (PoW)</option>
                </select>
              </div>
              <div class="setting-group">
                <label for="aiOptimization">AI最適化:</label>
                <div class="toggle-switch">
                  <input type="checkbox" id="aiOptimization" v-model="aiOptimization" :disabled="isSimulationRunning">
                  <label for="aiOptimization"></label>
                </div>
              </div>
              <div class="setting-group">
                <label for="sharding">シャーディング:</label>
                <div class="toggle-switch">
                  <input type="checkbox" id="sharding" v-model="sharding" :disabled="isSimulationRunning">
                  <label for="sharding"></label>
                </div>
              </div>
            </div>
            
            <div class="simulator-buttons">
              <button class="btn btn-primary" @click="startSimulation" :disabled="isSimulationRunning">シミュレーション開始</button>
              <button class="btn btn-secondary" @click="isPaused ? resumeSimulation() : pauseSimulation()" :disabled="!isSimulationRunning">{{ isPaused ? '再開' : '一時停止' }}</button>
              <button class="btn btn-secondary" @click="resetSimulation" :disabled="!isSimulationRunning">リセット</button>
            </div>
          </div>
          
          <div class="simulator-metrics">
            <div class="metric-card">
              <h3>TPS</h3>
              <div class="metric-value">{{ tps }}</div>
              <div class="metric-chart">
                <!-- TPSチャート -->
              </div>
            </div>
            <div class="metric-card">
              <h3>確認時間</h3>
              <div class="metric-value">{{ confirmationTime }} ms</div>
              <div class="metric-chart">
                <!-- 確認時間チャート -->
              </div>
            </div>
            <div class="metric-card">
              <h3>ネットワーク負荷</h3>
              <div class="metric-value">{{ networkLoad }}%</div>
              <div class="metric-chart">
                <!-- ネットワーク負荷チャート -->
              </div>
            </div>
            <div class="metric-card">
              <h3>エネルギー効率</h3>
              <div class="metric-value">{{ energyEfficiencyText }}</div>
              <div class="metric-chart">
                <!-- エネルギー効率チャート -->
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <div class="visualization-container">
            <h2>DAGネットワークビジュアライゼーション</h2>
            <div class="visualization-controls">
              <button class="btn-icon"><i class="fas fa-search-plus"></i></button>
              <button class="btn-icon"><i class="fas fa-search-minus"></i></button>
              <button class="btn-icon"><i class="fas fa-sync-alt"></i></button>
            </div>
            <div class="visualization-canvas">
              <div v-if="!isSimulationRunning" class="visualization-placeholder">
                <p>シミュレーションを開始してください</p>
              </div>
              <svg v-else class="network-graph" width="100%" height="400">
                <!-- ここにD3.jsなどでネットワークグラフを描画 -->
              </svg>
            </div>
          </div>
          
          <div class="transaction-log">
            <h2>トランザクションログ</h2>
            <div class="log-entries">
              <div v-for="(log, index) in logs" :key="index" class="log-entry">
                <span class="log-time">{{ log.time }}</span>
                <span class="log-type" :class="'log-' + log.type.toLowerCase()">{{ log.type }}</span>
                <span class="log-message">{{ log.message }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <h2>コンセンサスアルゴリズム比較</h2>
          <table class="features-table">
            <thead>
              <tr>
                <th>特性</th>
                <th>Proof of Nova (PoN)</th>
                <th>Proof of Stake (PoS)</th>
                <th>Proof of Work (PoW)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TPS</td>
                <td>100,000+</td>
                <td>1,000-10,000</td>
                <td>5-30</td>
              </tr>
              <tr>
                <td>確認時間</td>
                <td>即時</td>
                <td>数秒〜数分</td>
                <td>数分〜数時間</td>
              </tr>
              <tr>
                <td>エネルギー効率</td>
                <td>非常に高い</td>
                <td>高い</td>
                <td>非常に低い</td>
              </tr>
              <tr>
                <td>分散性</td>
                <td>高い</td>
                <td>中〜高</td>
                <td>中〜低</td>
              </tr>
              <tr>
                <td>セキュリティ</td>
                <td>AI強化型</td>
                <td>経済的インセンティブ</td>
                <td>計算能力</td>
              </tr>
              <tr>
                <td>スケーラビリティ</td>
                <td>無制限</td>
                <td>制限あり</td>
                <td>非常に制限あり</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <h2>Proof of Nova (PoN) の仕組み</h2>
          <div class="explanation-container">
            <div class="explanation-text">
              <p>NovaLedgerの革新的なコンセンサスアルゴリズム「Proof of Nova (PoN)」は、以下の3つの主要技術を融合しています：</p>
              <ol>
                <li><strong>Proof of Stake (PoS)</strong>: 経済的インセンティブによるセキュリティ</li>
                <li><strong>Directed Acyclic Graph (DAG)</strong>: 非同期並列処理による高スループット</li>
                <li><strong>Proof of History (PoH)</strong>: 時間証明による信頼性の確保</li>
              </ol>
              <p>さらに、AIによる継続的な最適化が加わることで、ネットワークの状態に応じた動的調整が可能になります。バリデータの信頼度スコアはトランザクションの妥当性、レスポンス時間、過去の行動履歴などに基づいて計算され、最も信頼性の高いバリデータがブロック生成に参加します。</p>
              <p>DAG構造を活用することで、トランザクションの依存関係のみを考慮した並列処理が可能になり、理論上無制限のスケーラビリティを実現します。また、MEV（Maximal Extractable Value）対策として、バリデータごとのブロック提案をランダム化することで、公平性を確保しています。</p>
            </div>
            <div class="explanation-image">
              <img src="/img/pon-diagram.svg" alt="Proof of Nova Diagram" class="explanation-img">
            </div>
          </div>
        </div>
      </section>
    </div>
  `
};
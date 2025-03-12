import { Byte } from '@bytecmd/core';

export default {
  name: 'ArchitectureSection',
  data() {
    return {
      activeLayer: null
    };
  },
  methods: {
    activateLayer(id) {
      this.activeLayer = id;
    }
  },
  template: `
    <section id="architecture" class="section architecture-section">
      <div class="container">
        <h2 class="section-title">アーキテクチャ構造</h2>
        <div class="architecture-layers">
          <div id="layer3" class="layer" :class="{ active: activeLayer === 'layer3' }" @mouseenter="activateLayer('layer3')" @mouseleave="activateLayer(null)">
            <h3>レイヤー3（アプリケーション層）</h3>
            <p>AI支援型スマートコントラクト、GPT-4級AIによる自動コード監査・バグ修正・最適化</p>
          </div>
          <div id="layer2" class="layer" :class="{ active: activeLayer === 'layer2' }" @mouseenter="activateLayer('layer2')" @mouseleave="activateLayer(null)">
            <h3>レイヤー2（拡張性）</h3>
            <p>zkEVM、Optimistic Rollups、AIオプティマイザーによる低コスト高速処理</p>
          </div>
          <div id="layer1" class="layer" :class="{ active: activeLayer === 'layer1' }" @mouseenter="activateLayer('layer1')" @mouseleave="activateLayer(null)">
            <h3>レイヤー1（ベース層）</h3>
            <p>DAG型マルチチェーン構造、シャーディングによる超高スケーラビリティ</p>
          </div>
          <div id="layer0" class="layer" :class="{ active: activeLayer === 'layer0' }" @mouseenter="activateLayer('layer0')" @mouseleave="activateLayer(null)">
            <h3>レイヤー0（ネットワーク層）</h3>
            <p>独自P2Pプロトコル、動的ルーティングによる遅延最小化と冗長性最大化</p>
          </div>
        </div>
      </div>
    </section>
  `
};
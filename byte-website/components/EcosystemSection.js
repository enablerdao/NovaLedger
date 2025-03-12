import { Byte } from '@bytecmd/core';

export default {
  name: 'EcosystemSection',
  data() {
    return {
      ecosystems: [
        { icon: 'palette', title: 'NFTマーケットプレイス' },
        { icon: 'exchange-alt', title: 'DEX' },
        { icon: 'chart-line', title: 'DeFi' },
        { icon: 'vr-cardboard', title: 'メタバース' },
        { icon: 'gamepad', title: 'ゲーミング' },
        { icon: 'microchip', title: 'IoT' },
        { icon: 'heartbeat', title: '医療データ' },
        { icon: 'plus', title: 'その他' }
      ]
    };
  },
  template: `
    <section id="ecosystem" class="section architecture-section">
      <div class="container">
        <h2 class="section-title">エコシステム展開</h2>
        <div class="ecosystem-grid">
          <div v-for="(eco, index) in ecosystems" :key="index" class="ecosystem-card">
            <div class="ecosystem-icon">
              <i :class="'fas fa-' + eco.icon"></i>
            </div>
            <h3>{{ eco.title }}</h3>
          </div>
        </div>
      </div>
    </section>
  `
};
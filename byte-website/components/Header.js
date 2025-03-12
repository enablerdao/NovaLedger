import { Byte } from '@bytecmd/core';

export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    
    // パーティクルの生成
    this.createParticles();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    createParticles() {
      const particles = document.querySelector('.particles');
      if (!particles) return;
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // ランダムな位置と遅延を設定
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.opacity = Math.random();
        particle.style.width = `${Math.random() * 15 + 5}px`;
        particle.style.height = particle.style.width;
        
        particles.appendChild(particle);
      }
    }
  },
  template: `
    <header>
      <div class="particles"></div>
      <div class="container">
        <nav :class="{ 'scrolled': isScrolled }">
          <div class="logo">
            <img src="/img/logo.svg" alt="NovaLedger Logo" class="logo-img" width="40" height="40">
            <h1>NovaLedger</h1>
          </div>
          
          <div class="menu-toggle" :class="{ 'active': isMenuOpen }" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <ul class="nav-links" :class="{ 'active': isMenuOpen }">
            <li><a href="#concept" @click="isMenuOpen = false">コンセプト</a></li>
            <li><a href="#architecture" @click="isMenuOpen = false">アーキテクチャ</a></li>
            <li><a href="#consensus" @click="isMenuOpen = false">コンセンサス</a></li>
            <li><a href="#security" @click="isMenuOpen = false">セキュリティ</a></li>
            <li><a href="#ecosystem" @click="isMenuOpen = false">エコシステム</a></li>
            <li><a href="#tokenomics" @click="isMenuOpen = false">トークノミクス</a></li>
            <li><a href="#faq" @click="isMenuOpen = false">FAQ</a></li>
            <li><a href="/demo" @click="isMenuOpen = false">デモ</a></li>
          </ul>
        </nav>
        
        <div class="hero">
          <h1>NovaLedger</h1>
          <h2>究極のブロックチェーン技術</h2>
          <p>超高速・高スケーラビリティ・ゼロ遅延決済・最小手数料・究極の分散性</p>
          <div class="hero-buttons">
            <a href="#concept" class="btn btn-primary">詳細を見る</a>
            <a href="#" class="btn btn-secondary">ホワイトペーパー</a>
          </div>
        </div>
      </div>
    </header>
  `
};
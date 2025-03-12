import './style.css';
import { renderHeader } from './components/Header';
import { renderHero } from './components/Hero';
import { renderFeatures } from './components/Features';
import { renderConsensus } from './components/Consensus';
import { renderArchitecture } from './components/Architecture';
import { renderSecurity } from './components/Security';
import { renderGovernance } from './components/Governance';
import { renderTokenomics } from './components/Tokenomics';
import { renderDevelopers } from './components/Developers';
import { renderEcosystem } from './components/Ecosystem';
import { renderSummary } from './components/Summary';
import { renderFaq } from './components/Faq';
import { renderFooter } from './components/Footer';

// アプリケーションの初期化
const initApp = (): void => {
  const appElement = document.querySelector<HTMLDivElement>('#app');
  
  if (!appElement) {
    console.error('App element not found');
    return;
  }
  
  // ヘッダーのレンダリング
  renderHeader(appElement);
  
  // メインコンテンツのコンテナ
  const mainElement = document.createElement('main');
  appElement.appendChild(mainElement);
  
  // 各セクションのレンダリング
  renderHero(mainElement);
  renderFeatures(mainElement);
  renderConsensus(mainElement);
  renderArchitecture(mainElement);
  renderSecurity(mainElement);
  renderGovernance(mainElement);
  renderTokenomics(mainElement);
  renderDevelopers(mainElement);
  renderEcosystem(mainElement);
  renderSummary(mainElement);
  renderFaq(mainElement);
  
  // フッターのレンダリング
  renderFooter(appElement);
  
  // スクロール監視の設定
  setupScrollObserver();
  
  // パーティクルの生成
  createParticles();
};

// スクロール監視の設定
const setupScrollObserver = (): void => {
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
};

// パーティクルの生成
const createParticles = (): void => {
  const particles = document.querySelector('.particles');
  if (!particles) return;
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // ランダムな位置と遅延を設定
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 15}s`;
    particle.style.opacity = `${Math.random()}`;
    particle.style.width = `${Math.random() * 15 + 5}px`;
    particle.style.height = particle.style.width;
    
    particles.appendChild(particle);
  }
};

// ナビゲーションバーのスクロール効果
const handleScroll = (): void => {
  const nav = document.querySelector('nav');
  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
};

// スクロールイベントの登録
window.addEventListener('scroll', handleScroll);

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', initApp);

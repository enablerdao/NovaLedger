/**
 * ヘッダーコンポーネント
 */
export const renderHeader = (parentElement: HTMLElement): void => {
  // ヘッダー要素の作成
  const headerElement = document.createElement('header');
  
  // パーティクル背景の作成
  const particlesElement = document.createElement('div');
  particlesElement.className = 'particles';
  headerElement.appendChild(particlesElement);
  
  // コンテナの作成
  const containerElement = document.createElement('div');
  containerElement.className = 'container';
  headerElement.appendChild(containerElement);
  
  // ナビゲーションの作成
  const navElement = document.createElement('nav');
  containerElement.appendChild(navElement);
  
  // ロゴの作成
  const logoElement = document.createElement('div');
  logoElement.className = 'logo';
  navElement.appendChild(logoElement);
  
  // ロゴ画像
  const logoImg = document.createElement('img');
  logoImg.src = '/img/logo.svg';
  logoImg.alt = 'NovaLedger Logo';
  logoImg.className = 'logo-img';
  logoImg.width = 40;
  logoImg.height = 40;
  logoElement.appendChild(logoImg);
  
  // ロゴテキスト
  const logoText = document.createElement('h1');
  logoText.textContent = 'NovaLedger';
  logoElement.appendChild(logoText);
  
  // モバイルメニュートグル
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  navElement.appendChild(menuToggle);
  
  // トグルスパン
  for (let i = 0; i < 3; i++) {
    const span = document.createElement('span');
    menuToggle.appendChild(span);
  }
  
  // ナビゲーションリンク
  const navLinks = document.createElement('ul');
  navLinks.className = 'nav-links';
  navElement.appendChild(navLinks);
  
  // ナビゲーションアイテム
  const navItems = [
    { text: 'コンセプト', href: '#concept' },
    { text: 'アーキテクチャ', href: '#architecture' },
    { text: 'コンセンサス', href: '#consensus' },
    { text: 'セキュリティ', href: '#security' },
    { text: 'エコシステム', href: '#ecosystem' },
    { text: 'トークノミクス', href: '#tokenomics' },
    { text: 'FAQ', href: '#faq' },
    { text: 'デモ', href: '/demo' }
  ];
  
  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    navLinks.appendChild(li);
  });
  
  // モバイルメニューの動作
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // ナビゲーションリンクのクリックイベント
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // ヒーローセクションの作成
  const heroElement = document.createElement('div');
  heroElement.className = 'hero';
  containerElement.appendChild(heroElement);
  
  // ヒーロータイトル
  const heroTitle = document.createElement('h1');
  heroTitle.textContent = 'NovaLedger';
  heroElement.appendChild(heroTitle);
  
  // ヒーローサブタイトル
  const heroSubtitle = document.createElement('h2');
  heroSubtitle.textContent = '究極のブロックチェーン技術';
  heroElement.appendChild(heroSubtitle);
  
  // ヒーロー説明
  const heroDescription = document.createElement('p');
  heroDescription.textContent = '超高速・高スケーラビリティ・ゼロ遅延決済・最小手数料・究極の分散性';
  heroElement.appendChild(heroDescription);
  
  // ヒーローボタン
  const heroButtons = document.createElement('div');
  heroButtons.className = 'hero-buttons';
  heroElement.appendChild(heroButtons);
  
  // 詳細ボタン
  const detailButton = document.createElement('a');
  detailButton.href = '#concept';
  detailButton.className = 'btn btn-primary';
  detailButton.textContent = '詳細を見る';
  heroButtons.appendChild(detailButton);
  
  // ホワイトペーパーボタン
  const whitepaperButton = document.createElement('a');
  whitepaperButton.href = '#';
  whitepaperButton.className = 'btn btn-secondary';
  whitepaperButton.textContent = 'ホワイトペーパー';
  heroButtons.appendChild(whitepaperButton);
  
  // 親要素に追加
  parentElement.appendChild(headerElement);
};
/**
 * エコシステムセクションコンポーネント
 */
export const renderEcosystem = (parentElement: HTMLElement): void => {
  // エコシステム
  const ecosystems = [
    { icon: 'palette', title: 'NFTマーケットプレイス' },
    { icon: 'exchange-alt', title: 'DEX' },
    { icon: 'chart-line', title: 'DeFi' },
    { icon: 'vr-cardboard', title: 'メタバース' },
    { icon: 'gamepad', title: 'ゲーミング' },
    { icon: 'microchip', title: 'IoT' },
    { icon: 'heartbeat', title: '医療データ' },
    { icon: 'plus', title: 'その他' }
  ];
  
  // セクション要素の作成
  const sectionElement = document.createElement('section');
  sectionElement.id = 'ecosystem';
  sectionElement.className = 'section architecture-section';
  
  // コンテナの作成
  const containerElement = document.createElement('div');
  containerElement.className = 'container';
  sectionElement.appendChild(containerElement);
  
  // セクションタイトル
  const titleElement = document.createElement('h2');
  titleElement.className = 'section-title';
  titleElement.textContent = 'エコシステム展開';
  containerElement.appendChild(titleElement);
  
  // エコシステムグリッド
  const ecosystemGrid = document.createElement('div');
  ecosystemGrid.className = 'ecosystem-grid';
  containerElement.appendChild(ecosystemGrid);
  
  // エコシステムカードの作成
  ecosystems.forEach(eco => {
    const ecoCard = document.createElement('div');
    ecoCard.className = 'ecosystem-card';
    
    // アイコン
    const iconContainer = document.createElement('div');
    iconContainer.className = 'ecosystem-icon';
    const icon = document.createElement('i');
    icon.className = `fas fa-${eco.icon}`;
    iconContainer.appendChild(icon);
    ecoCard.appendChild(iconContainer);
    
    // タイトル
    const title = document.createElement('h3');
    title.textContent = eco.title;
    ecoCard.appendChild(title);
    
    // グリッドに追加
    ecosystemGrid.appendChild(ecoCard);
  });
  
  // 親要素に追加
  parentElement.appendChild(sectionElement);
};
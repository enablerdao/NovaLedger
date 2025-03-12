/**
 * 特徴セクションコンポーネント
 */
export const renderFeatures = (parentElement: HTMLElement): void => {
  // 特徴データ
  const features = [
    { icon: 'bolt', title: '超高速', description: '100,000 TPS以上の処理能力' },
    { icon: 'sun', title: '高スケーラビリティ', description: 'シャーディング＋ロールアップ併用' },
    { icon: 'clock', title: 'ゼロ遅延決済', description: '即時ファイナリティを実現' },
    { icon: 'coins', title: '最小手数料', description: 'マイクロトランザクションも低コスト' },
    { icon: 'network-wired', title: '究極の分散性', description: '真の非中央集権化を実現' },
    { icon: 'shield-alt', title: '量子耐性', description: '将来の量子コンピュータにも対応' },
    { icon: 'brain', title: 'AI最適化', description: 'AIによるスマートコントラクト最適化' },
    { icon: 'leaf', title: '環境配慮', description: 'BTC比99.99%以上の省エネ達成' }
  ];
  
  // セクション要素の作成
  const sectionElement = document.createElement('section');
  sectionElement.id = 'concept';
  sectionElement.className = 'section features-section';
  
  // コンテナの作成
  const containerElement = document.createElement('div');
  containerElement.className = 'container';
  sectionElement.appendChild(containerElement);
  
  // セクションタイトル
  const titleElement = document.createElement('h2');
  titleElement.className = 'section-title';
  titleElement.textContent = '基本コンセプト';
  containerElement.appendChild(titleElement);
  
  // 特徴グリッド
  const featuresGrid = document.createElement('div');
  featuresGrid.className = 'features-grid';
  containerElement.appendChild(featuresGrid);
  
  // 特徴カードの作成
  features.forEach(feature => {
    const featureCard = document.createElement('div');
    featureCard.className = 'feature-card';
    
    // アイコン
    const iconContainer = document.createElement('div');
    iconContainer.className = 'feature-icon';
    const icon = document.createElement('i');
    icon.className = `fas fa-${feature.icon}`;
    iconContainer.appendChild(icon);
    featureCard.appendChild(iconContainer);
    
    // タイトル
    const title = document.createElement('h3');
    title.textContent = feature.title;
    featureCard.appendChild(title);
    
    // 説明
    const description = document.createElement('p');
    description.textContent = feature.description;
    featureCard.appendChild(description);
    
    // グリッドに追加
    featuresGrid.appendChild(featureCard);
  });
  
  // 親要素に追加
  parentElement.appendChild(sectionElement);
};
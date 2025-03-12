/**
 * セキュリティセクションコンポーネント
 */
export const renderSecurity = (parentElement: HTMLElement): void => {
  // セキュリティ機能
  const securityFeatures = [
    {
      icon: 'shield-alt',
      title: '量子耐性暗号',
      description: 'Post-Quantum Cryptography (PQC)を全面的に導入し、Quantum-Safeアドレスをデフォルト化'
    },
    {
      icon: 'user-secret',
      title: 'ゼロ知識証明',
      description: 'zk-SNARK、zk-STARKを全ノードに実装し、完全なプライバシー保護をユーザーの選択で提供'
    },
    {
      icon: 'robot',
      title: 'AIベース不正検知',
      description: 'ノードの挙動を常時監視し、不審行動を即座に排除、コンセンサス操作や51%攻撃を防止'
    }
  ];
  
  // セクション要素の作成
  const sectionElement = document.createElement('section');
  sectionElement.id = 'security';
  sectionElement.className = 'section consensus-section';
  
  // コンテナの作成
  const containerElement = document.createElement('div');
  containerElement.className = 'container';
  sectionElement.appendChild(containerElement);
  
  // セクションタイトル
  const titleElement = document.createElement('h2');
  titleElement.className = 'section-title';
  titleElement.textContent = 'セキュリティとプライバシー';
  containerElement.appendChild(titleElement);
  
  // セキュリティ機能グリッド
  const featuresGrid = document.createElement('div');
  featuresGrid.className = 'security-features';
  containerElement.appendChild(featuresGrid);
  
  // セキュリティカードの作成
  securityFeatures.forEach(feature => {
    const featureCard = document.createElement('div');
    featureCard.className = 'security-card';
    
    // タイトル（アイコン付き）
    const title = document.createElement('h3');
    
    // アイコン
    const icon = document.createElement('i');
    icon.className = `fas fa-${feature.icon}`;
    title.appendChild(icon);
    
    // タイトルテキスト
    const titleText = document.createTextNode(` ${feature.title}`);
    title.appendChild(titleText);
    
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
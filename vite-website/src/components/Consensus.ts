/**
 * コンセンサスセクションコンポーネント
 */
export const renderConsensus = (parentElement: HTMLElement): void => {
  // コンセンサスの特徴
  const consensusFeatures = [
    'PoSの経済的インセンティブ',
    'DAGの非同期性',
    'PoHのタイムスタンプ管理',
    'ランダム選出バリデーターグループによる並行ブロック生成',
    'DAG構造によるコンフリクト回避',
    'AIによる信頼度スコア最適化',
    'MEV対策のランダム化'
  ];
  
  // セクション要素の作成
  const sectionElement = document.createElement('section');
  sectionElement.id = 'consensus';
  sectionElement.className = 'section consensus-section';
  
  // コンテナの作成
  const containerElement = document.createElement('div');
  containerElement.className = 'container';
  sectionElement.appendChild(containerElement);
  
  // セクションタイトル
  const titleElement = document.createElement('h2');
  titleElement.className = 'section-title';
  titleElement.textContent = 'コンセンサスアルゴリズム';
  containerElement.appendChild(titleElement);
  
  // コンセンサスコンテンツ
  const contentElement = document.createElement('div');
  contentElement.className = 'consensus-content';
  containerElement.appendChild(contentElement);
  
  // テキスト部分
  const textElement = document.createElement('div');
  textElement.className = 'consensus-text';
  contentElement.appendChild(textElement);
  
  // サブタイトル
  const subtitleElement = document.createElement('h3');
  subtitleElement.textContent = 'Proof of Nova（PoN）';
  textElement.appendChild(subtitleElement);
  
  // 特徴リスト
  const featuresList = document.createElement('ul');
  textElement.appendChild(featuresList);
  
  // 特徴アイテム
  consensusFeatures.forEach(feature => {
    const listItem = document.createElement('li');
    listItem.textContent = feature;
    featuresList.appendChild(listItem);
  });
  
  // 図表部分
  const diagramElement = document.createElement('div');
  diagramElement.className = 'pon-diagram';
  contentElement.appendChild(diagramElement);
  
  // 図表画像
  const diagramImg = document.createElement('img');
  diagramImg.src = '/img/pon-diagram.svg';
  diagramImg.alt = 'Proof of Nova Diagram';
  diagramImg.className = 'diagram-img';
  diagramImg.setAttribute('loading', 'lazy');
  diagramImg.width = 500;
  diagramImg.height = 400;
  diagramElement.appendChild(diagramImg);
  
  // 親要素に追加
  parentElement.appendChild(sectionElement);
};
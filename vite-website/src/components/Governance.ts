/**
 * ガバナンスセクションコンポーネント
 */
export const renderGovernance = (parentElement: HTMLElement): void => {
  // ガバナンスの特徴
  const governanceFeatures = [
    'AIが客観的データに基づき意思決定を支援',
    '経済学的妥当性を考慮した提案システム',
    'ネットワークの健全性を常に監視',
    'Quadratic Votingによる公平な投票システム',
    'トークンホルダーの平等な参加権'
  ];
  
  // セクション要素の作成
  const sectionElement = document.createElement('section');
  sectionElement.id = 'governance';
  sectionElement.className = 'section governance-section';
  
  // コンテナの作成
  const containerElement = document.createElement('div');
  containerElement.className = 'container';
  sectionElement.appendChild(containerElement);
  
  // セクションタイトル
  const titleElement = document.createElement('h2');
  titleElement.className = 'section-title';
  titleElement.textContent = 'ガバナンス構造';
  containerElement.appendChild(titleElement);
  
  // ガバナンスコンテンツ
  const contentElement = document.createElement('div');
  contentElement.className = 'governance-content';
  containerElement.appendChild(contentElement);
  
  // 図表部分
  const diagramElement = document.createElement('div');
  diagramElement.className = 'aidao-diagram';
  contentElement.appendChild(diagramElement);
  
  // 図表画像
  const diagramImg = document.createElement('img');
  diagramImg.src = '/img/aidao-diagram.svg';
  diagramImg.alt = 'AIDAO Governance Diagram';
  diagramImg.className = 'diagram-img';
  diagramImg.setAttribute('loading', 'lazy');
  diagramImg.width = 400;
  diagramImg.height = 400;
  diagramElement.appendChild(diagramImg);
  
  // テキスト部分
  const textElement = document.createElement('div');
  textElement.className = 'governance-text';
  contentElement.appendChild(textElement);
  
  // サブタイトル
  const subtitleElement = document.createElement('h3');
  subtitleElement.textContent = 'AIサポート型DAO（AIDAO）';
  textElement.appendChild(subtitleElement);
  
  // 説明
  const description = document.createElement('p');
  description.textContent = '従来のDAOを超えた新しいガバナンスモデル';
  textElement.appendChild(description);
  
  // 特徴リスト
  const featuresList = document.createElement('ul');
  textElement.appendChild(featuresList);
  
  // 特徴アイテム
  governanceFeatures.forEach(feature => {
    const listItem = document.createElement('li');
    listItem.textContent = feature;
    featuresList.appendChild(listItem);
  });
  
  // 親要素に追加
  parentElement.appendChild(sectionElement);
};
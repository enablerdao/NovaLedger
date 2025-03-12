/**
 * トークノミクスセクションコンポーネント
 */
export const renderTokenomics = (parentElement: HTMLElement): void => {
  // トークノミクスの特徴
  const tokenomicsFeatures = [
    'ネットワーク利用料の支払い',
    'バリデータ報酬',
    'ガバナンス参加権',
    'AIによる動的インフレ調整（年間1-3%）',
    'マイクロペイメント対応'
  ];
  
  // セクション要素の作成
  const sectionElement = document.createElement('section');
  sectionElement.id = 'tokenomics';
  sectionElement.className = 'section tokenomics-section';
  
  // コンテナの作成
  const containerElement = document.createElement('div');
  containerElement.className = 'container';
  sectionElement.appendChild(containerElement);
  
  // セクションタイトル
  const titleElement = document.createElement('h2');
  titleElement.className = 'section-title';
  titleElement.textContent = '経済システム（トークノミクス）';
  containerElement.appendChild(titleElement);
  
  // トークノミクスコンテンツ
  const contentElement = document.createElement('div');
  contentElement.className = 'tokenomics-content';
  containerElement.appendChild(contentElement);
  
  // テキスト部分
  const textElement = document.createElement('div');
  textElement.className = 'tokenomics-text';
  contentElement.appendChild(textElement);
  
  // サブタイトル
  const subtitleElement = document.createElement('h3');
  subtitleElement.textContent = 'NOVA（NVL）トークン';
  textElement.appendChild(subtitleElement);
  
  // 説明
  const description = document.createElement('p');
  description.textContent = 'ネットワークの基盤となるメイントークン';
  textElement.appendChild(description);
  
  // 特徴リスト
  const featuresList = document.createElement('ul');
  textElement.appendChild(featuresList);
  
  // 特徴アイテム
  tokenomicsFeatures.forEach(feature => {
    const listItem = document.createElement('li');
    listItem.textContent = feature;
    featuresList.appendChild(listItem);
  });
  
  // チャート部分
  const chartElement = document.createElement('div');
  chartElement.className = 'tokenomics-chart';
  contentElement.appendChild(chartElement);
  
  // チャート画像
  const chartImg = document.createElement('img');
  chartImg.src = '/img/token-chart.svg';
  chartImg.alt = 'NOVA Token Distribution';
  chartImg.className = 'diagram-img';
  chartImg.setAttribute('loading', 'lazy');
  chartImg.width = 400;
  chartImg.height = 400;
  chartElement.appendChild(chartImg);
  
  // 親要素に追加
  parentElement.appendChild(sectionElement);
};
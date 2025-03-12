/**
 * アーキテクチャセクションコンポーネント
 */
export const renderArchitecture = (parentElement: HTMLElement): void => {
  // アーキテクチャレイヤー
  const layers = [
    {
      id: 'layer3',
      title: 'レイヤー3（アプリケーション層）',
      description: 'AI支援型スマートコントラクト、GPT-4級AIによる自動コード監査・バグ修正・最適化'
    },
    {
      id: 'layer2',
      title: 'レイヤー2（拡張性）',
      description: 'zkEVM、Optimistic Rollups、AIオプティマイザーによる低コスト高速処理'
    },
    {
      id: 'layer1',
      title: 'レイヤー1（ベース層）',
      description: 'DAG型マルチチェーン構造、シャーディングによる超高スケーラビリティ'
    },
    {
      id: 'layer0',
      title: 'レイヤー0（ネットワーク層）',
      description: '独自P2Pプロトコル、動的ルーティングによる遅延最小化と冗長性最大化'
    }
  ];
  
  // セクション要素の作成
  const sectionElement = document.createElement('section');
  sectionElement.id = 'architecture';
  sectionElement.className = 'section architecture-section';
  
  // コンテナの作成
  const containerElement = document.createElement('div');
  containerElement.className = 'container';
  sectionElement.appendChild(containerElement);
  
  // セクションタイトル
  const titleElement = document.createElement('h2');
  titleElement.className = 'section-title';
  titleElement.textContent = 'アーキテクチャ構造';
  containerElement.appendChild(titleElement);
  
  // アーキテクチャレイヤー
  const layersContainer = document.createElement('div');
  layersContainer.className = 'architecture-layers';
  containerElement.appendChild(layersContainer);
  
  // レイヤーの作成
  layers.forEach(layer => {
    const layerElement = document.createElement('div');
    layerElement.id = layer.id;
    layerElement.className = 'layer';
    
    // マウスオーバーイベント
    layerElement.addEventListener('mouseenter', () => {
      layerElement.classList.add('active');
    });
    
    layerElement.addEventListener('mouseleave', () => {
      layerElement.classList.remove('active');
    });
    
    // タイトル
    const title = document.createElement('h3');
    title.textContent = layer.title;
    layerElement.appendChild(title);
    
    // 説明
    const description = document.createElement('p');
    description.textContent = layer.description;
    layerElement.appendChild(description);
    
    // コンテナに追加
    layersContainer.appendChild(layerElement);
  });
  
  // 親要素に追加
  parentElement.appendChild(sectionElement);
};
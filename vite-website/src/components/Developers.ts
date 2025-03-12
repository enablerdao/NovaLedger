/**
 * 開発者向けツールセクションコンポーネント
 */
export const renderDevelopers = (parentElement: HTMLElement): void => {
  // 開発者ツール
  const devTools = [
    {
      icon: 'code',
      title: 'スマートコントラクト',
      description: 'EVM互換＋WASMベースの両対応で、既存のDAppsも簡単に移行可能'
    },
    {
      icon: 'robot',
      title: 'AI支援開発',
      description: 'コントラクト開発時にAIがコード自動生成・最適化を行い、開発効率を向上'
    },
    {
      icon: 'puzzle-piece',
      title: 'No-code環境',
      description: 'プログラミング知識がなくても簡単にDAppsを構築できるツールを提供'
    },
    {
      icon: 'cubes',
      title: '標準モジュール',
      description: 'ウォレット・マーケットプレイス・DEX・DeFiモジュールを標準提供'
    }
  ];
  
  // セクション要素の作成
  const sectionElement = document.createElement('section');
  sectionElement.id = 'developers';
  sectionElement.className = 'section features-section';
  
  // コンテナの作成
  const containerElement = document.createElement('div');
  containerElement.className = 'container';
  sectionElement.appendChild(containerElement);
  
  // セクションタイトル
  const titleElement = document.createElement('h2');
  titleElement.className = 'section-title';
  titleElement.textContent = '開発者向けツール';
  containerElement.appendChild(titleElement);
  
  // 開発者ツールグリッド
  const toolsGrid = document.createElement('div');
  toolsGrid.className = 'dev-tools-grid';
  containerElement.appendChild(toolsGrid);
  
  // ツールカードの作成
  devTools.forEach(tool => {
    const toolCard = document.createElement('div');
    toolCard.className = 'dev-tool-card';
    
    // タイトル（アイコン付き）
    const title = document.createElement('h3');
    
    // アイコン
    const icon = document.createElement('i');
    icon.className = `fas fa-${tool.icon}`;
    title.appendChild(icon);
    
    // タイトルテキスト
    const titleText = document.createTextNode(` ${tool.title}`);
    title.appendChild(titleText);
    
    toolCard.appendChild(title);
    
    // 説明
    const description = document.createElement('p');
    description.textContent = tool.description;
    toolCard.appendChild(description);
    
    // グリッドに追加
    toolsGrid.appendChild(toolCard);
  });
  
  // 親要素に追加
  parentElement.appendChild(sectionElement);
};
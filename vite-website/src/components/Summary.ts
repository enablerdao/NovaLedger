/**
 * 特徴まとめセクションコンポーネント
 */
export const renderSummary = (parentElement: HTMLElement): void => {
  // 特徴まとめデータ
  const summaryData = [
    { feature: 'TPS（処理速度）', detail: '100,000以上' },
    { feature: 'コンセンサス', detail: 'PoN (PoS+DAG+PoH)' },
    { feature: 'ファイナリティ', detail: '即時' },
    { feature: 'スケーリング', detail: 'シャーディング＋Rollups' },
    { feature: 'プライバシー', detail: 'zk技術' },
    { feature: '暗号方式', detail: '量子耐性' },
    { feature: 'スマートコントラクト', detail: 'EVM & WASM (AI最適化)' },
    { feature: 'ガバナンス', detail: 'AIサポート型DAO (AIDAO)' },
    { feature: 'エネルギー効率', detail: '極めて高い（BTC比99.99%削減）' },
    { feature: 'トークン', detail: 'NOVA（NVL）' },
    { feature: '経済性', detail: 'AI最適化インフレ率（約1〜3%）' }
  ];
  
  // セクション要素の作成
  const sectionElement = document.createElement('section');
  sectionElement.id = 'summary';
  sectionElement.className = 'section consensus-section';
  
  // コンテナの作成
  const containerElement = document.createElement('div');
  containerElement.className = 'container';
  sectionElement.appendChild(containerElement);
  
  // セクションタイトル
  const titleElement = document.createElement('h2');
  titleElement.className = 'section-title';
  titleElement.textContent = '特徴まとめ';
  containerElement.appendChild(titleElement);
  
  // テーブルコンテナ
  const tableContainer = document.createElement('div');
  tableContainer.className = 'table-container';
  containerElement.appendChild(tableContainer);
  
  // テーブル
  const table = document.createElement('table');
  table.className = 'features-table';
  tableContainer.appendChild(table);
  
  // テーブルヘッダー
  const thead = document.createElement('thead');
  table.appendChild(thead);
  
  const headerRow = document.createElement('tr');
  thead.appendChild(headerRow);
  
  const featureHeader = document.createElement('th');
  featureHeader.textContent = '特徴';
  headerRow.appendChild(featureHeader);
  
  const detailHeader = document.createElement('th');
  detailHeader.textContent = '詳細';
  headerRow.appendChild(detailHeader);
  
  // テーブルボディ
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  
  // テーブル行の作成
  summaryData.forEach(item => {
    const row = document.createElement('tr');
    
    const featureCell = document.createElement('td');
    featureCell.textContent = item.feature;
    row.appendChild(featureCell);
    
    const detailCell = document.createElement('td');
    detailCell.textContent = item.detail;
    row.appendChild(detailCell);
    
    tbody.appendChild(row);
  });
  
  // 親要素に追加
  parentElement.appendChild(sectionElement);
};
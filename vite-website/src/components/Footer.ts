/**
 * フッターコンポーネント
 */
export const renderFooter = (parentElement: HTMLElement): void => {
  // フッター要素の作成
  const footerElement = document.createElement('footer');
  
  // コンテナの作成
  const containerElement = document.createElement('div');
  containerElement.className = 'container';
  footerElement.appendChild(containerElement);
  
  // フッターコンテンツ
  const contentElement = document.createElement('div');
  contentElement.className = 'footer-content';
  containerElement.appendChild(contentElement);
  
  // ロゴ部分
  const logoElement = document.createElement('div');
  logoElement.className = 'footer-logo';
  contentElement.appendChild(logoElement);
  
  // ロゴ画像
  const logoImg = document.createElement('img');
  logoImg.src = '/img/logo.svg';
  logoImg.alt = 'NovaLedger Logo';
  logoImg.className = 'footer-logo-img';
  logoImg.width = 60;
  logoImg.height = 60;
  logoElement.appendChild(logoImg);
  
  // ロゴテキスト
  const logoTextContainer = document.createElement('div');
  logoElement.appendChild(logoTextContainer);
  
  const logoTitle = document.createElement('h2');
  logoTitle.textContent = 'NovaLedger';
  logoTextContainer.appendChild(logoTitle);
  
  const logoSubtitle = document.createElement('p');
  logoSubtitle.textContent = '究極のブロックチェーン技術';
  logoTextContainer.appendChild(logoSubtitle);
  
  // リンク部分
  const linksElement = document.createElement('div');
  linksElement.className = 'footer-links';
  contentElement.appendChild(linksElement);
  
  // リンクカラム
  const linkColumns = [
    {
      title: 'リソース',
      links: [
        { text: 'ホワイトペーパー', href: '#' },
        { text: 'ドキュメント', href: '#' },
        { text: 'ロードマップ', href: '#' },
        { text: 'GitHub', href: '#' }
      ]
    },
    {
      title: 'コミュニティ',
      links: [
        { text: 'Discord', href: '#' },
        { text: 'Twitter', href: '#' },
        { text: 'Telegram', href: '#' },
        { text: 'Medium', href: '#' }
      ]
    },
    {
      title: '会社情報',
      links: [
        { text: 'チーム', href: '#' },
        { text: 'パートナー', href: '#' },
        { text: '採用情報', href: '#' },
        { text: 'お問い合わせ', href: '#' }
      ]
    }
  ];
  
  // リンクカラムの作成
  linkColumns.forEach(column => {
    const columnElement = document.createElement('div');
    columnElement.className = 'footer-links-column';
    
    // カラムタイトル
    const columnTitle = document.createElement('h3');
    columnTitle.textContent = column.title;
    columnElement.appendChild(columnTitle);
    
    // リンクリスト
    const linkList = document.createElement('ul');
    columnElement.appendChild(linkList);
    
    // リンクアイテム
    column.links.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.textContent = link.text;
      listItem.appendChild(anchor);
      linkList.appendChild(listItem);
    });
    
    // リンク部分に追加
    linksElement.appendChild(columnElement);
  });
  
  // フッターボトム
  const bottomElement = document.createElement('div');
  bottomElement.className = 'footer-bottom';
  containerElement.appendChild(bottomElement);
  
  // コピーライト
  const copyright = document.createElement('p');
  copyright.textContent = `© ${new Date().getFullYear()} NovaLedger. All rights reserved.`;
  bottomElement.appendChild(copyright);
  
  // 親要素に追加
  parentElement.appendChild(footerElement);
};
// NovaLedger固有のJavaScript機能

document.addEventListener('DOMContentLoaded', function() {
    // 特徴セクションのアニメーション
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        card.classList.add('scroll-reveal');
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // ロードマップのアニメーション
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    
    roadmapItems.forEach((item) => {
        item.classList.add('scroll-reveal');
    });
    
    // Proof of Contributionのインタラクティブな説明
    const pocSection = document.querySelector('#technology');
    
    if (pocSection) {
        const pocTitle = pocSection.querySelector('h3:contains("Proof of Contribution")');
        
        if (pocTitle) {
            const infoButton = document.createElement('button');
            infoButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>';
            infoButton.className = 'bg-indigo-600 hover:bg-indigo-500 text-white rounded-full p-1 ml-2 focus:outline-none';
            infoButton.setAttribute('aria-label', 'More information about Proof of Contribution');
            
            pocTitle.appendChild(infoButton);
            
            infoButton.addEventListener('click', function() {
                alert('Proof of Contribution (PoC) は、ネットワークへの貢献度に基づいて報酬を分配する革新的なコンセンサスメカニズムです。計算能力や保有量だけでなく、開発貢献やコミュニティ活動なども評価されます。');
            });
        }
    }
});
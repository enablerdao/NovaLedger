document.addEventListener('DOMContentLoaded', function() {
    // スムーススクロール
    const navLinks = document.querySelectorAll('nav a, .hero-buttons a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // スクロールアニメーション
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .layer, .security-card, .dev-tool-card, .ecosystem-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
        
        // セクションタイトルのアニメーション
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            const titlePosition = title.getBoundingClientRect().top;
            if (titlePosition < windowHeight - 50) {
                title.classList.add('animated');
            }
        });
    };
    
    // 初期状態で非表示
    const elementsToAnimate = document.querySelectorAll('.feature-card, .layer, .security-card, .dev-tool-card, .ecosystem-card');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // スクロール時にアニメーション実行
    window.addEventListener('scroll', animateOnScroll);
    
    // 初期ロード時にもアニメーション実行
    animateOnScroll();
    
    // ヒーローセクションのパーティクルアニメーション
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // パーティクル要素を作成
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        heroSection.appendChild(particlesContainer);
        
        // パーティクルを生成
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // ランダムな位置とサイズを設定
            const size = Math.random() * 5 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 10;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // TPSカウンターアニメーション
    const tpsCounter = document.querySelector('.tps-counter');
    if (tpsCounter) {
        let count = 0;
        const targetTPS = 100000;
        const duration = 3000; // 3秒間でカウントアップ
        const interval = 30; // 更新間隔（ミリ秒）
        const increment = targetTPS / (duration / interval);
        
        const counter = setInterval(() => {
            count += increment;
            if (count >= targetTPS) {
                count = targetTPS;
                clearInterval(counter);
            }
            tpsCounter.textContent = Math.floor(count).toLocaleString();
        }, interval);
    }
    
    // アーキテクチャレイヤーのホバーエフェクト
    const layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
        layer.addEventListener('mouseenter', function() {
            layers.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // モバイルナビゲーションの切り替え
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // 特徴カードのホバーエフェクト
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
    
    // スクロールに応じてナビゲーションバーのスタイルを変更
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
import { Byte } from '@bytecmd/core';
import { Router } from '@bytecmd/router';
import '../css/global.css';

// レイアウトのインポート
import MainLayout from '../layouts/MainLayout';

// ページコンポーネントのインポート
import Home from '../pages/Home';
import Demo from '../pages/Demo';

// コンポーネントのインポート
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import ConsensusSection from '../components/ConsensusSection';
import ArchitectureSection from '../components/ArchitectureSection';
import SecuritySection from '../components/SecuritySection';
import GovernanceSection from '../components/GovernanceSection';
import TokenomicsSection from '../components/TokenomicsSection';
import DeveloperSection from '../components/DeveloperSection';
import EcosystemSection from '../components/EcosystemSection';
import FaqSection from '../components/FaqSection';

// コンポーネントの登録
Byte.component('Header', Header);
Byte.component('Footer', Footer);
Byte.component('FeatureCard', FeatureCard);
Byte.component('ConsensusSection', ConsensusSection);
Byte.component('ArchitectureSection', ArchitectureSection);
Byte.component('SecuritySection', SecuritySection);
Byte.component('GovernanceSection', GovernanceSection);
Byte.component('TokenomicsSection', TokenomicsSection);
Byte.component('DeveloperSection', DeveloperSection);
Byte.component('EcosystemSection', EcosystemSection);
Byte.component('FaqSection', FaqSection);

// ルーティングの設定
const routes = [
  { path: '/', component: Home },
  { path: '/demo', component: Demo }
];

// アプリケーションの初期化
const app = new Byte({
  el: '#app',
  router: new Router({ routes }),
  layout: MainLayout
});

// アプリケーションの起動
app.mount();
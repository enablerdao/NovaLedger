import { Byte } from '@bytecmd/core';

export default {
  name: 'MainLayout',
  template: `
    <div class="app-container">
      <Header />
      <main>
        <slot></slot>
      </main>
      <Footer />
    </div>
  `
};
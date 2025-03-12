import { Byte } from '@bytecmd/core';

export default {
  name: 'FeatureCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  template: `
    <div class="feature-card">
      <div class="feature-icon">
        <i :class="'fas fa-' + icon"></i>
      </div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  `
};
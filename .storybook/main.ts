import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;
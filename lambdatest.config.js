const { defineConfig } = require('@playwright/test');
require('dotenv').config();

const capabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 11',
    build: 'QA Hackathon Build',
    name: 'LambdaTest Playwright JS Test',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    network: true,
    video: true,
    console: true
  }
};

module.exports = defineConfig({
  retries: 1,
  use: {
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
    },
  },
});

const { defineConfig, devices } = require('@playwright/test');



 
module.exports = defineConfig({
  testDir: './tests',
  timeout:30*1000,
  reporter:'html',
  expect:{
    timeout:10000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
 

  use: {
    screenshot:'on',
    video:'retain-on-failure'

    
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },



   
  ],


});



import { PlaywrightTestConfig} from '@playwright/test';

const Config: PlaywrightTestConfig = {
  reporter: 'html',
  projects: [
  {
    name: 'chromium',
    use: { browserName: 'chromium' }
  },
  {
    name: 'firefox',
    use: { browserName: 'firefox' }
  },
  {
    name: 'webkit',
    use: { browserName: 'webkit' }
  },
  ],
  use:{
    trace: 'on-first-retry',
    screenshot:'only-on-failure',
    video:'retain-on-failure'
  }
};
export default Config;

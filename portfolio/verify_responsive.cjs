const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);

  // Desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.screenshot({ path: 'final_desktop.png', fullPage: true });

  // Tablet
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.screenshot({ path: 'final_tablet.png', fullPage: true });

  // Mobile
  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({ path: 'final_mobile.png', fullPage: true });

  await browser.close();
})();

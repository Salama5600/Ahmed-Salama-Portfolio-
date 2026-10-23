const { chromium } = require('playwright');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/ms-playwright/chromium_headless_shell-1247/chrome-headless-shell-linux64/chrome-headless-shell'
  });

  const outDir = path.resolve(__dirname, '../src/assets/images');

  // 1. Basma Dental Studio -> Smile Lab
  console.log('Capturing Basma Dental Studio...');
  const p1 = await browser.newPage();
  await p1.setViewportSize({ width: 1280, height: 800 });
  await p1.goto('https://basma-dental-studio-nbs5.vercel.app', { waitUntil: 'networkidle' });
  // Scroll down so all elements animate in
  await p1.evaluate(async () => {
    window.scrollTo(0, 800);
  });
  await p1.waitForTimeout(1500);
  await p1.screenshot({ fullPage: true, path: '/tmp/basma_full.jpg', quality: 95, type: 'jpeg' });
  await p1.close();

  // Crop around Smile Lab (y ≈ 720, 1280x800)
  execSync(`convert /tmp/basma_full.jpg -crop 1280x800+0+726 "${path.join(outDir, 'Basma Dental Studio.jpg')}"`);
  console.log('Basma Dental Studio cropped successfully!');

  // 2. Marea Boutique Hotel -> View Studio window
  console.log('Capturing Marea Boutique Hotel...');
  const p2 = await browser.newPage();
  await p2.setViewportSize({ width: 1280, height: 800 });
  await p2.goto('https://marea-hotel-concept-website.vercel.app', { waitUntil: 'networkidle' });
  await p2.evaluate(async () => {
    window.scrollTo(0, 800);
  });
  await p2.waitForTimeout(1500);
  await p2.screenshot({ fullPage: true, path: '/tmp/marea_full.jpg', quality: 95, type: 'jpeg' });
  await p2.close();

  // Crop around View Studio (y ≈ 800, 1280x800)
  execSync(`convert /tmp/marea_full.jpg -crop 1280x800+0+800 "${path.join(outDir, 'Marea Boutique Hotel.jpg')}"`);
  console.log('Marea Boutique Hotel cropped successfully!');

  // 3. Al-Yaqoot Palace
  console.log('Capturing Al-Yaqoot Palace...');
  const p3 = await browser.newPage();
  await p3.setViewportSize({ width: 1280, height: 800 });
  await p3.goto('https://el-yaqoot-palace.vercel.app', { waitUntil: 'networkidle' });
  // Inject Google Font Cairo
  await p3.addStyleTag({
    url: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Amiri:wght@400;700&display=swap'
  });
  await p3.evaluate(async () => {
    const style = document.createElement('style');
    style.innerHTML = `* { font-family: 'Cairo', 'Amiri', 'Traditional Arabic', sans-serif !important; }`;
    document.head.appendChild(style);
    await document.fonts.ready;
    window.scrollTo(0, 600);
  });
  await p3.waitForTimeout(2000);
  await p3.screenshot({ fullPage: true, path: '/tmp/yaqoot_full.jpg', quality: 95, type: 'jpeg' });
  await p3.close();

  // Crop around the dishes grid
  execSync(`convert /tmp/yaqoot_full.jpg -crop 1280x800+0+650 "${path.join(outDir, 'Al-Yaqoot Palace.jpg')}"`);
  console.log('Al-Yaqoot Palace cropped successfully!');

  await browser.close();
  console.log('ALL DONE!');
})();

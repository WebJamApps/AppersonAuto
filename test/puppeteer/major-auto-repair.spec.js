import 'core-js/stable';
import 'regenerator-runtime/runtime';

describe('Music', () => {
  it('has a page with title of Major Auto Repair | Apperson Automotive"', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8888/major-auto-repair', { waitUntil: 'load' });
    await expect(page.title()).resolves.toMatch('Major Auto Repair | Apperson Automotive');
  });
});

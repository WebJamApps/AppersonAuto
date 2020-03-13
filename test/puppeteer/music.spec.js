import 'core-js/stable';
import 'regenerator-runtime/runtime';

describe('Music', () => {
  it('should be titled "Music | Web Jam LLC"', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8888/music', { waitUntil: 'load' });
    await expect(page.title()).resolves.toMatch('Major Auto Repair | Apperson Automotive');
  });
});

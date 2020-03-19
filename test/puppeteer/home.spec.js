import 'core-js/stable';
import 'regenerator-runtime/runtime';

describe('Home', () => {
  it('should be titled "Apperson Automotive"', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8888/', {
      waitUntil: 'load',
    });
    await expect(page.title()).resolves.toMatch('Apperson Automotive');
  });
});

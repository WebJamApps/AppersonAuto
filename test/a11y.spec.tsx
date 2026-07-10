import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { App } from 'src/App';

const routes = [
  '/',
  '/auto-maintenance',
  '/general-auto-repair',
  '/major-auto-repair',
  '/contact',
];

describe('axe accessibility', () => {
  it.each(routes)('has no axe violations on %s', async (route) => {
    window.history.pushState({}, '', route);
    const { container } = render(<App />);
    const results = await axe(container, {
      // jsdom iframes (the Contact Google-Maps embed) are not real frame
      // windows, so axe cannot inject into them and throws otherwise
      iframes: false,
      // jsdom does no layout and the suite loads no stylesheets (vitest css:
      // false), so color-contrast cannot be meaningfully checked here — the
      // structural rules (alt text, roles, labels, nesting, etc.) all run
      rules: { 'color-contrast': { enabled: false } },
    });
    expect(results).toHaveNoViolations();
  });
});

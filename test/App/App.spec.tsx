import { render } from '@testing-library/react';
import { App } from 'src/App';

describe('App component', () => {
  it('renders the component', () => {
    const result = render(<App />).container;
    expect(result).toMatchSnapshot();
  });
});

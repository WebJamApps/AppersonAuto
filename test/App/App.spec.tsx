import renderer from 'react-test-renderer';
import { App } from '../../src/App';

describe('App component', () => {
  it('renders the component', () => {
    const result = renderer.create(<App />).toJSON();
    expect(result).toMatchSnapshot();
  });
});

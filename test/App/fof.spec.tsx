import renderer from 'react-test-renderer';
import FourOhFour from '../../src/App/404';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('/404', () => {
  it('renders the component', () => {
    const result = renderer.create(
      <MemoryRouter initialEntries={['/missing']}>
        <Routes>
          <Route path="*" element={<FourOhFour />} />
          <Route path="/" element={<div />} />
        </Routes>
      </MemoryRouter>,
    ).toJSON();
    expect(result).toMatchSnapshot();
  });
});

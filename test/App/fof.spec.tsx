import { render } from '@testing-library/react';
import FourOhFour from '../../src/App/404';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('/404', () => {
  it('renders the component', () => {
    const result = render(<MemoryRouter initialEntries={['/missing']}>
        <Routes>
          <Route path="*" element={<FourOhFour />} />
          <Route path="/" element={<div />} />
        </Routes>
      </MemoryRouter>,).container;
    expect(result).toMatchSnapshot();
  });
});

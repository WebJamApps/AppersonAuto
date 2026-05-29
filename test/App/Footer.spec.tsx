import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../src/App/Footer';

describe('Footer', () => {
  it('renders component', () => {
    const result = render(<Footer />).container;
    expect(result).toMatchSnapshot();
  });
});

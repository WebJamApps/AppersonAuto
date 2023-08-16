import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../src/App/Footer';

describe('Footer', () => {
  it('renders component', () => {
    const result = renderer.create(<Footer />).toJSON();
    expect(result).toMatchSnapshot();
  });
});

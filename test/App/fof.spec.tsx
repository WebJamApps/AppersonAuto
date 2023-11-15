import React from 'react';
import renderer from 'react-test-renderer';
import FourOhFour from '../../src/App/404';
import { BrowserRouter } from 'react-router-dom';

describe('/404', () => {
  it('renders the component', () => {
    const result = renderer.create(<BrowserRouter><FourOhFour /></BrowserRouter>).toJSON();
    expect(result).toMatchSnapshot();
  });
});

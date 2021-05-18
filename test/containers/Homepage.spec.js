import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../src/containers/Homepage';

describe('Home', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Homepage />);
  });
  it('Renders the Homepage', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders with cellphone width and has coupon', () => {
    wrapper.setState({ width: 320 });
    const i = wrapper.find('img#coupon');
    expect(i).toBeDefined();
  });
  it('renders widescreen width and has coupon', () => {
    wrapper.setState({ width: 1000 });
    const i = wrapper.find('img#coupon');
    expect(i).toBeDefined();
  });
});

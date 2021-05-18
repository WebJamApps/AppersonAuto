import React from 'react';
import { shallow } from 'enzyme';
import { Major } from '../../src/containers/MajorAutoRepair';

describe('Major Auto Repair', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Major />);
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

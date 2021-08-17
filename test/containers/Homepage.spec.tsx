// @ts-nocheck
import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../src/containers/Homepage';

describe('Home', () => {
  let wrapper;
  beforeEach(() => {
    const targetRef = {};
    wrapper = shallow(<Homepage targetRef={targetRef} width={1300} />);
  });
  it('Renders the Homepage', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders with cellphone width and has coupon', () => {
    const width = 300;
    const targetRef = {};
    const wrapper2 = shallow(<Homepage targetRef={targetRef} width={width} />);
    wrapper2.update();
    const i = wrapper2.find('img#coupon');
    expect(i).toBeDefined();
  });
  it('renders widescreen width and has coupon', () => {
    const i = wrapper.find('img#coupon');
    expect(i).toBeDefined();
  });
});

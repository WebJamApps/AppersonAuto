import React from 'react';
import { shallow } from 'enzyme';
import { AutoMaintenance } from '../../src/containers/AutoMaintenance';

describe('AutoMaintenance', () => {
  let wrapper;
  beforeEach(() => {
    const targetRef = {};
    const width = 1300;
    wrapper = shallow(<AutoMaintenance targetRef={targetRef} width={width} />);
  });
  it('Renders the Homepage', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders with cellphone width and has coupon', () => {
    const width = 300;
    const targetRef = {};
    const wrapper2 = shallow(<AutoMaintenance targetRef={targetRef} width={width} />);
    wrapper2.update();
    const i = wrapper2.find('img#coupon');
    expect(i).toBeDefined();
  });
  it('renders widescreen width and has coupon', () => {
    const i = wrapper.find('img#coupon');
    expect(i).toBeDefined();
  });
});

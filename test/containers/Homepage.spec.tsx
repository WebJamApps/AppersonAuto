import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../src/containers/Homepage';

describe('Home', () => {
  let wrapper: any;
  beforeEach(() => {
    const width = 1300;
    const height = 1300;
    const targetRef: any = {};
    wrapper = shallow(<Homepage targetRef={targetRef} width={width} height={height} />);
  });
  it('Renders the Homepage', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders with cellphone width and has coupon', () => {
    const width = 300;
    const height = 300;
    const targetRef: any = {};
    const wrapper2 = shallow(<Homepage targetRef={targetRef} width={width} height={height} />);
    wrapper2.update();
    const i = wrapper2.find('img#coupon');
    expect(i).toBeDefined();
  });
  it('renders widescreen width and has coupon', () => {
    const i = wrapper.find('img#coupon');
    expect(i).toBeDefined();
  });
});

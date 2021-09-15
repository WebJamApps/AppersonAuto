import React from 'react';
import { shallow } from 'enzyme';
import { General } from '../../src/containers/GeneralAutoRepair';

describe('GeneralAutoRepair', () => {
  let wrapper: any;
  beforeEach(() => {
    const width = 1300;
    wrapper = shallow(<General width={width} />);
  });
  it('Renders the GeneralAutoRepair', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders with cellphone width and has coupon', () => {
    const width = 300;
    const wrapper2 = shallow(<General width={width} />);
    wrapper2.update();
    const i = wrapper2.find('img#coupon');
    expect(i).toBeDefined();
  });
  it('renders widescreen width and has coupon', () => {
    const i = wrapper.find('img#coupon');
    expect(i).toBeDefined();
  });
});

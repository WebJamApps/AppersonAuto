import React from 'react';
import { shallow } from 'enzyme';
import { General } from '../../src/containers/GeneralAutoRepair';

describe('GeneralAutoRepair', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<General />);
  });
  it('Renders the GeneralAutoRepair', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('resizes', () => {
    wrapper.instance().commonUtils.setTitleAndScroll = jest.fn();
    wrapper.update();
    wrapper.instance().onResize(320);
    expect(wrapper.instance().commonUtils.setTitleAndScroll).toHaveBeenCalled();
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

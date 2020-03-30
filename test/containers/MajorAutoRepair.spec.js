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
  it('resizes', () => {
    wrapper.instance().commonUtils.setTitleAndScroll = jest.fn();
    wrapper.update();
    wrapper.instance().onResize(1000);
    expect(wrapper.instance().commonUtils.setTitleAndScroll).toHaveBeenCalled();
  });
});

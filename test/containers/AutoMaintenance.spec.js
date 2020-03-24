import React from 'react';
import { shallow } from 'enzyme';
import { AutoMaintenance } from '../../src/containers/AutoMaintenance';

describe('AutoMaintenance', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AutoMaintenance />);
  });
  it('Renders the Homepage', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('resizes', () => {
    wrapper.instance().commonUtils.setTitleAndScroll = jest.fn();
    wrapper.update();
    wrapper.instance().onResize(320);
    expect(wrapper.instance().commonUtils.setTitleAndScroll).toHaveBeenCalled();
  });
});

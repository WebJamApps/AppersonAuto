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
});

import React from 'react';
import { shallow } from 'enzyme';
import { Contact } from '../../src/containers/Contact/index';
import DefaultWideMap from '../../src/containers/Contact/WideMap';
import DefaultNarrowMap from '../../src/containers/Contact/NarrowMap';

describe('Contact', () => {
  let wrapper;
  beforeEach(() => {
    const targetRef:any = {};
    const width = 1300;
    wrapper = shallow(<Contact targetRef={targetRef} width={width} />);
  });

  it('Renders the Contact page', () => {
    expect(wrapper.find(DefaultWideMap).exists()).toBe(true);
    expect(wrapper.find(DefaultWideMap).dive().find('div.wideMap').exists()).toBe(true);
  });
  it('Renders NarrowMap when less than 1004', () => {
    const width = 300;
    const targetRef:any = {};
    const wrapper2 = shallow(<Contact targetRef={targetRef} width={width} />);
    wrapper2.update();
    expect(wrapper2.find(DefaultNarrowMap).exists()).toBe(true);
    expect(wrapper2.find(DefaultNarrowMap).dive().find('div.material-content').exists()).toBe(true);
  });
});

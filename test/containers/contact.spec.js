import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../../src/containers/Contact/index';
import DefaultWideMap from '../../src/containers/Contact/WideMap';
import DefaultNarrowMap from '../../src/containers/Contact/NarrowMap';

const wrapper = shallow(<Contact />);

describe('Contact', () => {
  it('Renders the Contact page', () => {
    wrapper.instance().setState({ width: 1009 });
    wrapper.instance().forceUpdate();
    expect(wrapper.find(DefaultWideMap).exists()).toBe(true);
    expect(wrapper.find(DefaultWideMap).dive().find('div.wideMap').exists()).toBe(true);
  });
  it('Renders NarrowMap when less than 1004', () => {
    const wrapper2 = shallow(<Contact width={100} />);
    expect(wrapper2.find(DefaultNarrowMap).exists()).toBe(true);
    expect(wrapper2.find(DefaultNarrowMap).dive().find('div.material-content').exists()).toBe(true);
  });
});

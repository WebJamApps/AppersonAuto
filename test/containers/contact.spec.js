import React from 'react';
import { shallow } from 'enzyme';
import DefaultContact from '../../src/containers/Contact/index';
import DefaultWideMap from '../../src/containers/Contact/WideMap';
import DefaultNarrowMap from '../../src/containers/Contact/NarrowMap';

describe('Contact', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DefaultContact />);
  });

  it('Renders the Contact page', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // it('Renders the Contact page', () => {
  //   wrapper.setState({ width: 320 });
  //   expect(wrapper.find(DefaultWideMap).exists()).toBe(true);
  //   expect(wrapper.find(DefaultWideMap).dive().find('div.wideMap').exists()).toBe(true);
  // });
  // it('Renders NarrowMap when less than 1004', () => {
  //   const wrapper2 = shallow(<DefaultContact width={300} />);
  //   wrapper2.instance().forceUpdate();
  //   expect(wrapper2.find(DefaultNarrowMap).exists()).toBe(true);
  //   expect(wrapper2.find(DefaultNarrowMap).dive().find('div.material-content').exists()).toBe(true);
  // });
});

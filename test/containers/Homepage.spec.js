import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../src/containers/Homepage';
// import WideAboutUs from '../../src/containers/Homepage/Widescreen/WideAbout';

const wrapper = shallow(<Homepage />);

describe('Home', () => {
  it('Renders the homepage', () => {
    wrapper.instance().setState({ width: 1009 });
    wrapper.instance().forceUpdate();
    // expect(wrapper.find(WideAboutUs).exists()).toBe(true);
    // expect(wrapper.find(WideAboutUs).dive().find('div.widescreenHomepage').exists()).toBe(true);
  });
});

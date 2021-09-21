import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/App/Footer';

describe('Footer', () => {
  const wrapper = shallow(<Footer />);
  it('renders footer links', () => {
    expect(wrapper.find('div.footerLinks').exists()).toBe(true);
  });
  it('renders footer', () => {
    expect(wrapper.find('div#wjfooter').exists()).toBe(true);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

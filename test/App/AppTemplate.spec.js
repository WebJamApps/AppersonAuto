import React from 'react';
import { shallow } from 'enzyme';
import { AppTemplate } from '../../src/App/AppTemplate';

const dFunc = () => {};
function setup() {
  const props = { children: '<div></div>', width: '300' };
  document.body.innerHTML = '<div class="page-content"></div>';
  const wrapper = shallow(<AppTemplate dispatch={dFunc} location={{ pathname: '/' }}><div /></AppTemplate>);
  return { wrapper, props };
}

describe('AppTemplate', () => {
  it('renders the component', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div.page-host').exists()).toBe(true);
  });
  it('rerenders the component when menuOpen state changes', () => {
    const { wrapper } = setup();
    wrapper.setState({ menuOpen: true });
    expect(wrapper.find('div.open').length).toBe(1);
  });
  it('closes the menu without navigating away from the react app', () => new Promise((done) => {
    document.body.innerHTML = '<button class="googleLogin"/><button class="googleLogout"/>';
    const aT = new AppTemplate({ dispatch: () => Promise.resolve(true) });
    aT.setState = () => {};
    const result = aT.close({ target: { classList: { contains() { return false; } } } });
    expect(result).toBe(true);
    done();
  }));
  it('closes the menu and logs in to google', () => new Promise((done) => {
    document.body.innerHTML = '<button class="googleLogin"/><button class="googleLogout"/>';
    const aT = new AppTemplate({ dispatch: () => Promise.resolve(true) });
    aT.setState = () => {};
    aT.changeNav = () => false;
    aT.loginGoogle = () => true;
    const result = aT.close({
      target: {
        classList: {
          contains(name) {
            if (name === 'loginGoogle') return true;
            return false;
          },
        },
      },
    });
    expect(result).toBe(true);
    done();
  }));
  it('toggles the mobile menu', () => new Promise((done) => {
    const aT = new AppTemplate({ dispatch: () => Promise.resolve(true) });
    aT.state.menuOpen = false;
    aT.setState = (obj) => {
      expect(obj.menuOpen).toBe(true);
      done();
    };
    aT.toggleMobileMenu();
  }));
  it('closes the mobile menu on clicking escape key', () => new Promise((done) => {
    const aT = new AppTemplate({ dispatch: () => Promise.resolve(true) });
    aT.setState = jest.fn(() => true);
    const result = aT.handleKeyPress({ key: 'Escape' });
    expect(result).toBe(true);
    done();
  }));
  it('does not closes the mobile menu on clicking Enter key', () => new Promise((done) => {
    const aT = new AppTemplate({ dispatch: () => Promise.resolve(true) });
    const result = aT.handleKeyPress({ key: 'Enter' });
    expect(result).toBe(null);
    done();
  }));
  it('toggles the mobile menu on clicking Enter key', () => new Promise((done) => {
    const aT = new AppTemplate({ dispatch: () => Promise.resolve(true) });
    aT.toggleMobileMenu = () => true;
    const result = aT.handleKeyMenu({ key: 'Enter' });
    expect(result).toBe(true);
    done();
  }));
  it('does not toggle the mobile menu on clicking Escape key', () => new Promise((done) => {
    const aT = new AppTemplate({ dispatch: () => Promise.resolve(true) });
    aT.toggleMobileMenu = () => true;
    const result = aT.handleKeyMenu({ key: 'Escape' });
    expect(result).toBe(null);
    done();
  }));
  // it('renders as widescreen', () => {
  //   const { wrapper } = setup();
  //   wrapper.instance().callUs = jest.fn();
  //   wrapper.update();
  //   wrapper.instance().setState({ width: 1300 });
  //   expect(wrapper.instance().callUs).toHaveBeenCalled();
  // });
  it('makes a call us text link', () => {
    const { wrapper } = setup();
    wrapper.instance().callText = jest.fn();
    wrapper.update();
    wrapper.instance().callUs();
    expect(wrapper.instance().callText).toHaveBeenCalled();
  });
});

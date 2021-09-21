import React from 'react';
import { shallow } from 'enzyme';
import { AppTemplate } from '../../src/App/AppTemplate';

function setup() {
  const targetRef: any = {};
  const anyProp: any = {};
  const dFunc = () => { };
  const wrapper = shallow<AppTemplate>(
    <AppTemplate
      targetRef={targetRef}
      width={1200}
      location={{
        pathname: '/', search: '', state: '', hash: '',
      }}
      auth={{
        isAuthenticated: true,
        email: '',
        error: '',
        token: '',
        user: { userType: '' },
      }}
      dispatch={dFunc}
      history={anyProp}
      match={anyProp}
    >
      <div />
    </AppTemplate>,
  );
  const props = { children: '<div></div>', width: '300' };
  document.body.innerHTML = '<div class="page-content"></div>';
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
  it('closes the menu without navigating away from the react app', () => new Promise<void>((done) => {
    const targetRef: any = {};
    const anyProp: any = {};
    const dFunc = () => { };
    document.body.innerHTML = '<button class="googleLogin"/><button class="googleLogout"/>';
    const aT = new AppTemplate({
      width: 1300,
      children: {},
      targetRef: { current: targetRef },
      dispatch: dFunc,
      auth: {
        isAuthenticated: true,
        email: '',
        error: '',
        token: '',
        user: { userType: '' },
      },
      location: {
        pathname: '/', search: '', state: '', hash: '',
      },
      history: anyProp,
      match: anyProp,
    });
    aT.setState = () => {};
    const result = aT.close();
    expect(result).toBe(true);
    done();
  }));
  it('closes the menu and logs in to google', () => new Promise<void>((done) => {
    const targetRef: any = {};
    const anyProp: any = {};
    const dFunc = () => { };
    document.body.innerHTML = '<button class="googleLogin"/><button class="googleLogout"/>';
    const aT = new AppTemplate({
      width: 1300,
      children: {},
      targetRef: { current: targetRef },
      dispatch: dFunc,
      auth: {
        isAuthenticated: true,
        email: '',
        error: '',
        token: '',
        user: { userType: '' },
      },
      location: {
        pathname: '/', search: '', state: '', hash: '',
      },
      history: anyProp,
      match: anyProp,
    });
    aT.setState = () => {};
    aT.changeNav = () => false;
    aT.loginGoogle = () => true;
    const result = aT.close();
    expect(result).toBe(true);
    done();
  }));
  it('closes the mobile menu on clicking escape key', () => new Promise<void>((done) => {
    const targetRef: any = {};
    const anyProp: any = {};
    const dFunc = () => { };
    const aT = new AppTemplate({
      width: 1300,
      children: {},
      targetRef: { current: targetRef },
      dispatch: dFunc,
      auth: {
        isAuthenticated: true,
        email: '',
        error: '',
        token: '',
        user: { userType: '' },
      },
      location: {
        pathname: '', search: '', state: '', hash: '',
      },
      history: anyProp,
      match: anyProp,
    });
    aT.setState = jest.fn(() => true);
    const result = aT.handleKeyPress({ key: 'Escape' });
    expect(result).toBe(true);
    done();
  }));
  it('does not closes the mobile menu on clicking Enter key', () => new Promise<void>((done) => {
    const targetRef: any = {};
    const anyProp: any = {};
    const dFunc = () => { };
    const aT = new AppTemplate({
      width: 1300,
      children: {},
      targetRef: { current: targetRef },
      dispatch: dFunc,
      auth: {
        isAuthenticated: true,
        email: '',
        error: '',
        token: '',
        user: { userType: '' },
      },
      location: {
        pathname: '', search: '', state: '', hash: '',
      },
      history: anyProp,
      match: anyProp,
    });
    const result = aT.handleKeyPress({ key: 'Enter' });
    expect(result).toBe(null);
    done();
  }));
  it('toggles the mobile menu on clicking Enter key', () => new Promise<void>((done) => {
    const targetRef: any = {};
    const anyProp: any = {};
    const dFunc = () => { };
    const aT = new AppTemplate({
      width: 1300,
      children: {},
      targetRef: { current: targetRef },
      dispatch: dFunc,
      auth: {
        isAuthenticated: true,
        email: '',
        error: '',
        token: '',
        user: { userType: '' },
      },
      location: {
        pathname: '', search: '', state: '', hash: '',
      },
      history: anyProp,
      match: anyProp,
    });
    aT.toggleMobileMenu = () => true;
    const result = aT.handleKeyMenu({ key: 'Enter' });
    expect(result).toBe(true);
    done();
  }));
  it('does not toggle the mobile menu on clicking Escape key', () => new Promise<void>((done) => {
    const targetRef: any = {};
    const anyProp: any = {};
    const dFunc = () => { };
    const aT = new AppTemplate({
      width: 1300,
      children: {},
      targetRef: { current: targetRef },
      dispatch: dFunc,
      auth: {
        isAuthenticated: true,
        email: '',
        error: '',
        token: '',
        user: { userType: '' },
      },
      location: {
        pathname: '', search: '', state: '', hash: '',
      },
      history: anyProp,
      match: anyProp,
    });
    aT.toggleMobileMenu = () => true;
    const result = aT.handleKeyMenu({ key: 'Escape' });
    expect(result).toBe(null);
    done();
  }));
  it('toggles the mobile menu', () => {
    const { wrapper } = setup();
    wrapper.instance().setState = jest.fn();
    wrapper.instance().toggleMobileMenu();
    expect(wrapper.instance().setState).toHaveBeenCalledWith({ menuOpen: true });
  });
  it('calls the mobile menu', () => {
    const { wrapper } = setup();
    wrapper.instance().makeMenuLink = jest.fn();
    wrapper.update();
    wrapper.instance().mobileMenu();
    expect(wrapper.instance().makeMenuLink).toHaveBeenCalled();
  });
  it('calls the mobile menu through navLinks', () => {
    const { wrapper } = setup();
    wrapper.instance().mobileMenu = jest.fn();
    wrapper.update();
    wrapper.instance().navLinks(300);
    expect(wrapper.instance().mobileMenu).toHaveBeenCalled();
  });
  it('makes a call us text link', () => {
    const { wrapper } = setup();
    wrapper.instance().callText = jest.fn();
    wrapper.update();
    wrapper.instance().callUs();
    expect(wrapper.instance().callText).toHaveBeenCalled();
  });
});

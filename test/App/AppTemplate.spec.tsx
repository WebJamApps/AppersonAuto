import React from 'react';
import { shallow } from 'enzyme';
import { AppTemplate } from '../../src/App/AppTemplate';

function setup() {
  const targetRef: any = {};
  const wrapper = shallow<AppTemplate>(
    <AppTemplate
      targetRef={targetRef}
      width={1200}
      height={1800}
      location={{ pathname: '/' }}
      auth={undefined}
      dispatch={undefined}
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
    document.body.innerHTML = '<button class="googleLogin"/><button class="googleLogout"/>';
    const aT = new AppTemplate({
      width: 1300, children: {}, targetRef: { current: null }, dispatch: '', height: 1300, auth: {}, location: { pathname: '' },
    });
    aT.setState = () => {};
    const result = aT.close();
    expect(result).toBe(true);
    done();
  }));
  it('closes the menu and logs in to google', () => new Promise<void>((done) => {
    document.body.innerHTML = '<button class="googleLogin"/><button class="googleLogout"/>';
    const aT = new AppTemplate({
      width: 1300, children: {}, targetRef: { current: null }, dispatch: '', height: 1300, auth: {}, location: { pathname: '' },
    });
    aT.setState = () => {};
    aT.changeNav = () => false;
    aT.loginGoogle = () => true;
    const result = aT.close();
    expect(result).toBe(true);
    done();
  }));
  it('closes the mobile menu on clicking escape key', () => new Promise<void>((done) => {
    const aT = new AppTemplate({
      width: 1300, children: {}, targetRef: { current: null }, dispatch: '', height: 1300, auth: {}, location: { pathname: '' },
    });
    aT.setState = jest.fn(() => true);
    const result = aT.handleKeyPress({ key: 'Escape' });
    expect(result).toBe(true);
    done();
  }));
  it('does not closes the mobile menu on clicking Enter key', () => new Promise<void>((done) => {
    const aT = new AppTemplate({
      width: 1300, children: {}, targetRef: { current: null }, dispatch: '', height: 1300, auth: {}, location: { pathname: '' },
    });
    const result = aT.handleKeyPress({ key: 'Enter' });
    expect(result).toBe(null);
    done();
  }));
  it('toggles the mobile menu on clicking Enter key', () => new Promise<void>((done) => {
    const aT = new AppTemplate({
      width: 1300, children: {}, targetRef: { current: null }, dispatch: '', height: 1300, auth: {}, location: { pathname: '' },
    });
    aT.toggleMobileMenu = () => true;
    const result = aT.handleKeyMenu({ key: 'Enter' });
    expect(result).toBe(true);
    done();
  }));
  it('does not toggle the mobile menu on clicking Escape key', () => new Promise<void>((done) => {
    const aT = new AppTemplate({
      width: 1300, children: {}, targetRef: { current: null }, dispatch: '', height: 1300, auth: {}, location: { pathname: '' },
    });
    aT.toggleMobileMenu = () => true;
    const result = aT.handleKeyMenu({ key: 'Escape' });
    expect(result).toBe(null);
    done();
  }));
  it('makes a call us text link', () => {
    const { wrapper } = setup();
    wrapper.instance().callText = jest.fn();
    wrapper.update();
    wrapper.instance().callUs();
    expect(wrapper.instance().callText).toHaveBeenCalled();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { AppTemplate } from '../../src/App/AppTemplate';
import { BrowserRouter } from 'react-router-dom';

describe('AppTemplate', () => {
  it('renders the component', () => {
    const targetRef: any = {};
    const anyProp: any = {};
    const dFunc = () => { };
    const result = renderer.create(<BrowserRouter><AppTemplate
      targetRef={targetRef}
      width={1200}
      location={{
        pathname: '/', search: '', state: '', hash: '',
      }}
      dispatch={dFunc}
      history={anyProp}
      match={anyProp}
 /></BrowserRouter>).toJSON();
    expect(result).toMatchSnapshot();
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
      location: {
        pathname: '', search: '', state: '', hash: '',
      },
      history: anyProp,
      match: anyProp,
    });
    aT.toggleMobileMenu = () => true;
    const result = aT.handleKeyMenu({ key: 'Enter' });
    expect(result).toBe(null);
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
    const targetRef: any = {};
    const anyProp: any = {};
    const dFunc = () => { };
    const result = renderer.create(<BrowserRouter><AppTemplate
      targetRef={targetRef}
      width={1200}
      location={{
        pathname: '/', search: '', state: '', hash: '',
      }}
      dispatch={dFunc}
      history={anyProp}
      match={anyProp}
 /></BrowserRouter>).root;
    expect(result.findByProps({ id: 'mobilemenutoggle' }).props.onClick()).toBe(true);
  });
  it('calls the mobile menu', () => {
    const targetRef: any = { current: null };
    const anyProp: any = {};
    const dFunc = () => { };
    const result: any = renderer.create(<BrowserRouter><AppTemplate
      targetRef={targetRef}
      width={300}
      location={{
        pathname: '/', search: '', state: '', hash: '',
      }}
      dispatch={dFunc}
      history={anyProp}
      match={anyProp}
 /></BrowserRouter>).toJSON();
    expect(result).toMatchSnapshot();
  });
});

import { withResizeDetector } from 'react-resize-detector';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import Footer from './Footer';
import MenuItems, { ImenuItem } from './menuItems';
import commonUtils from '../lib/commonUtils';
import { Component, RefObject } from 'react';

export interface AppTemplateProps extends RouteComponentProps {
  children?: React.ReactNode;
  width?: number;
  targetRef: RefObject<HTMLDivElement>;
}
interface AppTemplateState {
  menuOpen: boolean;
}

export class AppTemplate extends Component<AppTemplateProps, AppTemplateState> {
  authenticate: any;

  menus: { classname: string; type: string; iconClass: string; link: string; name: string; }[];

  children: any;

  authUtils: any;

  commonUtils: any;

  changeNav: (() => boolean) | undefined;

  loginGoogle: (() => boolean) | undefined;

  constructor(props: AppTemplateProps) {
    super(props);
    this.menus = MenuItems.menus;
    this.children = props.children;
    this.state = { menuOpen: false };
    this.close = this.close.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyMenu = this.handleKeyMenu.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.navLinks = this.navLinks.bind(this);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('', window.screen.width); }

  handleKeyPress(e: { key: string; }): (void | null) {
    if (e.key === 'Escape') return this.setState({ menuOpen: false });
    return null;
  }

  handleKeyMenu(e: { key: string; }): (void | null) {
    if (e.key === 'Enter') this.toggleMobileMenu();
    return null;
  }

  toggleMobileMenu(): boolean {
    const { menuOpen } = this.state;
    const mO = !menuOpen;
    this.setState({ menuOpen: mO });
    return mO;
  }

  close(): boolean {
    this.setState({ menuOpen: false });
    return true;
  }

  makeMenuLink(menu: ImenuItem, index: number): JSX.Element {
    return (
      <div key={index} className="menu-item">
        <Link to={menu.link} className="nav-link" onClick={this.close}>
          <i className={`${menu.iconClass}`} />
          &nbsp;
          <span className="nav-item">{menu.name}</span>
        </Link>
      </div>
    );
  }

  addressBlock(): JSX.Element { // eslint-disable-line class-methods-use-this
    return (
      <div className="menu-item" style={{ backgroundColor: 'black', margin: '8px' }}>
        <p style={{ color: '#fff', marginBottom: '2px' }}>
          <a href="https://goo.gl/maps/5G47ib81DGj7o2gk9" className="menu-hover" style={{ color: '#45c9ff', textDecoration: 'none' }}>
            <span>1601 Apperson Drive</span>
          </a>
          <br />
          Salem, VA 24153
        </p>
      </div>
    );
  }

  callText(): JSX.Element { // eslint-disable-line class-methods-use-this
    return (
      <a
        style={{
          display: 'block', color: '#fff', textDecoration: 'none', backgroundColor: '#881204', height: '72px', paddingTop: '4px', marginTop: '-1px',
        }}
        href="tel:5404447337"
      >
        <h4
          className="material-header-h4-call"
          style={{
            textAlign: 'center', marginRight: '280px', paddingBottom: 0, width: '200px',
          }}
        >
          Call
          <br />
          540-444-7337
        </h4>
      </a>
    );
  }

  mobileMenu(): JSX.Element {
    return (
      <div className="nav-list">
        {this.callText()}
        {this.addressBlock()}
        {this.menus.map((menu, index) => this.makeMenuLink(menu, index))}
      </div>
    );
  }

  navLinks(width: number): JSX.Element {
    if (width < 1162) return this.mobileMenu();
    return (
      <div className="nav-list">
        {this.addressBlock()}
        {this.menus.map((menu, index) => this.makeMenuLink(menu, index))}
      </div>
    );
  }

  headerSection(logoWidth: string, marginTop: string): JSX.Element { // eslint-disable-line class-methods-use-this
    return (
      <div id="header" className="material-header">
        <div className="headercontent" />
        <div>
          <div style={{ marginLeft: '5px', marginTop }}>
            <img
              width={logoWidth}
              id="ig"
              className="style-scope iron-image"
              alt="headerlogo"
              src="https://dl.dropboxusercontent.com/s/qg69q7f5so4aqsb/appAutoLogo.png?dl=0"
            />
          </div>
        </div>
      </div>
    );
  }

  callUs(): JSX.Element { // eslint-disable-line class-methods-use-this
    return (
      <div className="material-header x-scope paper-material-0 drawer" style={{ backgroundColor: '#881204' }}>
        {this.callText()}
      </div>
    );
  }

  render(): JSX.Element {
    const { width, targetRef } = this.props;
    let logoWidth = '742px', marginTop = '-15px';
    const { menuOpen } = this.state;
    if (width && width < 1232) { logoWidth = '272px'; marginTop = '1px'; }
    const style = `${menuOpen ? 'open' : 'close'}`;
    return (
      <div ref={targetRef} className="page-host">
        <div tabIndex={0} role="button" id="sidebar" onClick={this.close} onKeyPress={this.handleKeyPress} className={`${style} drawer-container`}>
          <div className="drawer" style={{ backgroundColor: '#505050' }}>
            {width && width > 1161 ? this.callUs() : null}
            {this.navLinks(width || 400)}
          </div>
        </div>
        <div className="main-panel">
          <span onClick={this.toggleMobileMenu} onKeyPress={this.handleKeyMenu} id="mobilemenutoggle" tabIndex={0} role="button">
            <i className="fas fa-bars fa-2x" />
          </span>
          <div className="mainPanel">
            <div className="swipe-area" />
            {this.headerSection(logoWidth, marginTop)}
            <div style={{ width: 'auto' }} id="contentBlock" className="content-block">
              {this.children}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withResizeDetector(AppTemplate));

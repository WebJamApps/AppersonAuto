import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import { connect } from 'react-redux';
import authUtils from './authUtils';
import mapStoreToProps from '../redux/mapStoreToProps';
import Footer from './Footer';
import menuUtils from './menuUtils';
import menuItems from './menuItems.json';

export class AppTemplate extends Component {
  constructor(props) {
    super(props);
    this.menus = menuItems.menus;
    this.menuUtils = menuUtils;
    this.children = props.children;
    this.state = { menuOpen: false, width: 320 };
    this.close = this.close.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyMenu = this.handleKeyMenu.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.navLinks = this.navLinks.bind(this);
    this.authUtils = authUtils;
    this.parentRef = React.createRef();
    this.onResize = this.onResize.bind(this);
  }

  onResize(width) { this.setState({ width }); }

  toggleMobileMenu() {
    const { menuOpen } = this.state;
    const mO = !menuOpen;
    this.setState({ menuOpen: mO });
  }

  close(e) {
    this.setState({ menuOpen: false });
    if (e.target.classList.contains('loginGoogle')) return this.loginGoogle();
    return true;
  }

  handleKeyPress(e) {
    if (e.key === 'Escape') return this.setState({ menuOpen: false });
    return null;
  }

  handleKeyMenu(e) {
    if (e.key === 'Enter') return this.toggleMobileMenu();
    return null;
  }

  makeMenuLink(menu, index) {
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

  navLinks() {
    return (
      <div className="nav-list">
        <p style={{ fontSize: '1px', marginBottom: '2px' }} />
        <div className="menu-item" style={{ backgroundColor: 'black' }}>
          <p style={{ color: '#fff', marginBottom: '2px' }}>
            <a href="https://goo.gl/maps/5G47ib81DGj7o2gk9" className="menu-hover" style={{ color: '#45c9ff' }}>
              <span>1601 Apperson Drive</span>
            </a>
            <br />
            Salem, VA 24153
          </p>
        </div>
        {this.menus.map((menu, index) => (this.menuUtils.menuItem(menu, index, this)))}
      </div>
    );
  }

  headerSection(logoWidth, marginTop) { // eslint-disable-line class-methods-use-this
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

  render() {
    let logoWidth = '742px', marginTop = '-15px';
    const { menuOpen, width } = this.state;
    if (width < 970) { logoWidth = '272px'; marginTop = '1px'; }
    const style = `${menuOpen ? 'open' : 'close'}`;
    return (
      <div className="page-host">
        <div tabIndex={0} role="button" id="sidebar" onClick={this.close} onKeyPress={this.handleKeyPress} className={`${style} drawer-container`}>
          <div className="drawer" style={{ backgroundColor: '#c0c0c0' }}>
            <div className="material-header x-scope paper-material-0 drawer" elevation="0" style={{ backgroundColor: '#881204' }}>
              <a style={{ display: 'block', color: '#fff', textDecoration: 'none' }} href="tel:5404447337">
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
            </div>
            { this.navLinks() }
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
              { this.children }
              <Footer />
            </div>
          </div>
        </div>
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} targetDomEl={this.parentRef.current} />
      </div>
    );
  }
}

AppTemplate.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  children: PropTypes.element.isRequired,
};
export default withRouter(connect(mapStoreToProps, null)(AppTemplate));

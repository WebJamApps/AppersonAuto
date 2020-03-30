import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import mapStoreToProps from '../../redux/mapStoreToProps';
import commonUtils from '../../lib/commonUtils';
import PicSlider from '../../components/pic-slider';
import slidesArr from '../../lib/slides';

export class General extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
    this.parentRef = React.createRef();
    this.onResize = this.onResize.bind(this);
    this.state = { width: 323 };
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('General Auto Repair', window.screen.width); }

  onResize(width) {
    this.setState({ width });
    this.commonUtils.setTitleAndScroll('General Auto Repair', width);
  }

  coupon() { // eslint-disable-line class-methods-use-this
    return (
      <div style={{ width: '295px', margin: 'auto' }}>
        <img alt="graphic coupon" src="../static/imgs/banner5.png" />
      </div>
    );
  }

  love() { // eslint-disable-line class-methods-use-this
    return (
      <div>
        <h4 style={{ marginTop: '30px' }}>Apperson Automotive - Salem, VA Vehicle Care</h4>
        <p><strong>You’ll love our general auto repair at competitive prices:</strong></p>
        <ul>
          <li>Starter repair / replacement</li>
          <li>Alternator repair / replacement</li>
          <li>Balancing</li>
          <li>Regulators service</li>
          <li>And much more</li>
        </ul>
        <p style={{ marginTop: '30px' }}><strong>Receive 12-month 12,000-mile warranty on our services:</strong></p>
        <ul>
          <li>Brake calipers</li>
          <li>Window motors</li>
          <li>Regulators</li>
          <li>Door locks</li>
        </ul>
        <p>We’ll provide you with our quality shuttle service, taking you to and from work.</p>
        <p style={{ marginBottom: '90px' }}>
          Quality general auto repair services including 12-month 12,000-mile warranty are available.
          {' '}
          To find out more about our services, call Apperson Automotive at
          {' '}
          <a style={{ textDecoration: 'none' }} href="tel:5404447337">540-444-7337</a>
          <br />
          You can also stop by at 1601 Apperson Drive, Salem VA 24153.
        </p>
      </div>
    );
  }

  pageText(marginLeft) { // eslint-disable-line class-methods-use-this
    return (
      <div className="col" style={{ top: '0', paddingRight: '6px', marginLeft }}>
        <h4 style={{ marginTop: '25px', fontWeight: 'bold', fontSize: '16pt' }}>
          General Auto Repair
        </h4>
        <div>
          <p>{' '}</p>
          <p>
            We know your vehicle is important to you. That’s why we’ll do our best to make sure your car is repaired properly the first time!
          </p>
          <p>
            We have more than
            {' '}
            <b>150 years of combined experience</b>
            , so you can count on our service to be trustworthy. Our rates are competitive.
          </p>
          <p>{' '}</p>
          <p>
            <b>FREE high mileage, vacation vehicle check over</b>
            .
          </p>
        </div>
        <p>{' '}</p>
        {this.love()}
      </div>
    );
  }

  mainPanel(marginLeft, width) {
    return (
      <div className="row">
        {this.pageText(marginLeft)}
        {this.commonUtils.widePics(width, slidesArr, PicSlider, this.coupon, '2.5in')}
      </div>
    );
  }

  render() {
    const { width } = this.state;
    return this.commonUtils.renderer(width, slidesArr, this, PicSlider, ReactResizeDetector);
  }
}

General.defaultProps = { homeContent: { title: '', comments: '' } };
General.propTypes = {
  homeContent: PropTypes.shape({
    title: PropTypes.string,
    comments: PropTypes.string,
  }),
};

export default connect(mapStoreToProps, null)(General);

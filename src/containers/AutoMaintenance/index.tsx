// @ts-nocheck
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withResizeDetector } from 'react-resize-detector';
import mapStoreToProps from '../../redux/mapStoreToProps';
import commonUtils from '../../lib/commonUtils';
import PicSlider from '../../components/pic-slider';
import slidesArr from '../../lib/slides';

export class AutoMaintenance extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Auto Maintenance', window.screen.width); }

  coupon() { // eslint-disable-line class-methods-use-this
    return (
      <div style={{ width: '295px', margin: 'auto' }}>
        <img id="coupon" alt="graphic coupon" src="../static/imgs/banner5.png" />
      </div>
    );
  }

  filters() {
    const { targetRef, width } = this.props;
    const marginBottom = width < 1162 ? '20px' : '40px';
    return (
      <div ref={targetRef}>
        <p><strong>We’ll replace your car’s filters:</strong></p>
        <ul>
          <li>Air filters replacement</li>
          <li>Fuel filters replacement</li>
          <li>Cabin air filter replacement</li>
        </ul>
        <p>Same day service may be available.</p>
        <p style={{ marginBottom }}>
          FREE high mileage / vehicle check over service
          <br />
          Our rates are competitive.
          <br />
          Call to set up your maintenance appointment
          <br />
          at Apperson Automotive
          {' '}
          <a style={{ textDecoration: 'none' }} href="tel:5404447337">540-444-7337</a>
        </p>
        {width < 1162 ? this.coupon() : null}
      </div>
    );
  }

  quality() { // eslint-disable-line class-methods-use-this
    return (
      <div>
        <h4 style={{ marginTop: '20px' }}>Apperson Automotive - Salem, VA Vehicle Care</h4>
        <p><strong>Quality service at a competitive price:</strong></p>
        <ul>
          <li>Tune ups</li>
          <li>Alignments</li>
          <li>Balancing</li>
          <li>Power steering flush</li>
          <li>And much more</li>
        </ul>
        <p><strong>Extend your car’s life with our maintenance service:</strong></p>
        <ul>
          <li>Oil changes</li>
          <li>Tune ups</li>
          <li>Brake flush</li>
          <li>Coolant flush</li>
        </ul>
        {this.filters()}
      </div>
    );
  }

  pageText(marginLeft) { // eslint-disable-line class-methods-use-this
    return (
      <div className="col" style={{ top: '0', paddingRight: '6px', marginLeft }}>
        <h4 className="pagetitle" style={{ marginTop: '25px', fontWeight: 'bold', fontSize: '16pt' }}>
          Auto Maintenance
        </h4>
        <p>{' '}</p>
        <div>
          <p>
            Are you looking to extend your car’s life? We can help.
            <br />
            Our maintenance service will help keep your car on the road.
          </p>
          <p>
            You’ll receive a
            {' '}
            <b>FREE high mileage / vacation vehicle check over</b>
            . You’ll also receive a
            {' '}
            <b>12-month 12,000-mile warranty</b>
            {' '}
            on all of our services.
          </p>
        </div>
        {this.quality()}
      </div>
    );
  }

  mainPanel(marginLeft) {
    const { width } = this.props;
    return (
      <div className="row">
        {this.pageText(marginLeft)}
        {this.commonUtils.widePics(width, slidesArr, PicSlider, this.coupon, '2.5in')}
      </div>
    );
  }

  render() {
    return this.commonUtils.renderer(slidesArr, this, PicSlider);
  }
}

AutoMaintenance.defaultProps = { homeContent: { title: '', comments: '' }, width: window.screen.width };
AutoMaintenance.propTypes = {
  homeContent: PropTypes.shape({
    title: PropTypes.string,
    comments: PropTypes.string,
  }),
  width: PropTypes.number,
  targetRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default connect(mapStoreToProps, null)(withResizeDetector(AutoMaintenance));

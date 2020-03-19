import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import mapStoreToProps from '../../redux/mapStoreToProps';
import commonUtils from '../../lib/commonUtils';
import PicSlider from '../../components/pic-slider';

export class Major extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
    this.parentRef = React.createRef();
    this.onResize = this.onResize.bind(this);
    this.state = { width: 320 };
    this.slides = [{ _id: '1', url: '../../static/imgs/photo1.png' },
      { _id: '2', url: '../../static/imgs/photo2.png' },
      { _id: '3', url: '../../static/imgs/photo3.png' },
      { _id: '4', url: '../../static/imgs/photo4.png' },
      { _id: '5', url: '../../static/imgs/photo5.png' },
      { _id: '6', url: '../../static/imgs/photo6.png' },
      { _id: '7', url: '../../static/imgs/photo7.png' },
      { _id: '8', url: '../../static/imgs/photo8.png' },
      { _id: '9', url: '../../static/imgs/photo9.png' },
    ];
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Major Auto Repair'); }

  onResize(width) { this.setState({ width }); }

  coupon() { // eslint-disable-line class-methods-use-this
    return (
      <div style={{ width: '295px', margin: 'auto' }}>
        <img alt="graphic coupon" src="../static/imgs/banner5.png" />
      </div>
    );
  }

  pageText(marginLeft) { // eslint-disable-line class-methods-use-this
    return (
      <div className="col" style={{ top: '0', paddingRight: '6px', marginLeft }}>
        <h4 style={{ marginTop: '25px', fontWeight: 'bold', fontSize: '16pt' }}>
          Major Auto Repair
        </h4>
        <p>{' '}</p>
        <p>
          If you’re experiencing problems with your vehicle then bring it to us for our excellent diagnostic service.
        </p>
        <p>
          Receive
          {' '}
          <b>5% OFF our mechanical repairs</b>
          {' '}
          when you present the coupon from this site.
          <br />
          <br />
          You’ll receive a
          {' '}
          <b>12-month 12,000-mile warranty</b>
          <br />
          for all of our services.
        </p>
        <div>
          <p>{' '}</p>
          <h4 style={{ marginTop: '40px' }}>Apperson Automotive - Salem, VA Serious Auto Repair</h4>
          <p><strong>Service you can count on:</strong></p>
          <ul>
            <li>Starter repair / replacement</li>
            <li>Transmission overhaul</li>
            <li>Intake gasket repairs</li>
            <li>4W drive system repairs</li>
            <li>And much more</li>
          </ul>
          <p>{' '}</p>
          <p style={{ marginTop: '40px' }}><strong>Receive 5% OFF mechanical repairs (must present coupon):</strong></p>
          <p>
            We’ll provide you with trustworthy service. We stand behind our work.
          </p>
          <p>
            You’ll receive a 12-month 12,000-mile warranty on all repairs.
            <br />
            Competitive rates are available. Call Apperson Automotive at
            <br />
            <a style={{ textDecoration: 'none' }} href="tel:5404447337">540-444-7337</a>
            {' '}
            to set up your appointment.
          </p>
        </div>
      </div>
    );
  }

  render() {
    const { width } = this.state;
    const marginLeft = width < 900 ? '5px' : '15px';
    return (
      <div className="container-fluid">
        {width < 900
          ? (
            <div className="col" style={{ padding: '1px', paddingRight: '0' }}>
              <div id="familySlideshowWide" style={{ display: 'flex', flexDirection: 'column' }}><PicSlider data={this.slides} /></div>
            </div>
          )
          : null}
        <div className="row">
          {this.pageText(marginLeft)}
          {width >= 900
            ? (
              <div className="col" style={{ padding: '1px', paddingRight: '0' }}>
                <div id="familySlideshowWide" style={{ display: 'flex', flexDirection: 'column' }}><PicSlider data={this.slides} /></div>
                <p style={{ height: '1.2in' }}>{' '}</p>
                {this.coupon()}
              </div>
            )
            : null}
        </div>
        {width < 900 ? this.coupon() : null}
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} targetDomEl={this.parentRef.current} />
      </div>
    );
  }
}

Major.defaultProps = { homeContent: { title: '', comments: '' } };
Major.propTypes = {
  homeContent: PropTypes.shape({
    title: PropTypes.string,
    comments: PropTypes.string,
  }),
};

export default connect(mapStoreToProps, null)(Major);

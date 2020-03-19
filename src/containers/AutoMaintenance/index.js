import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import mapStoreToProps from '../../redux/mapStoreToProps';
import commonUtils from '../../lib/commonUtils';
import PicSlider from '../../components/pic-slider';

export class AutoMaintenance extends Component {
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

  componentDidMount() { this.commonUtils.setTitleAndScroll('Auto Maintenance'); }

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
            <li>
              Oil changes
            </li>
            <li>
              Tune ups
            </li>
            <li>
              Brake flush
            </li>
            <li>
              Coolant flush
            </li>
          </ul>
          <p><strong>We’ll replace your car’s filters:</strong></p>
          <ul>
            <li>
              Air filters replacement
            </li>
            <li>
              Fuel filters replacement
            </li>
            <li>
              Cabin air filter replacement
            </li>
          </ul>
          <p>
            Same day service may be available.
          </p>
          <p>
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
                <p style={{ height: '2.5in' }}>{' '}</p>
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

AutoMaintenance.defaultProps = { homeContent: { title: '', comments: '' } };
AutoMaintenance.propTypes = {
  homeContent: PropTypes.shape({
    title: PropTypes.string,
    comments: PropTypes.string,
  }),
};

export default connect(mapStoreToProps, null)(AutoMaintenance);

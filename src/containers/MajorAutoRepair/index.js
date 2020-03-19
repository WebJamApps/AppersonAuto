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

  getToKnow() { // eslint-disable-line class-methods-use-this
    return (
      <div>
        <p><strong>Get to Know Apperson Automotive:</strong></p>
        <ul>
          <li>
            <a href="/auto-maintenance" title="Apperson Automotive Auto Maintenance">Auto Maintenance</a>
            {' '}
            – Let us handle your oil change, coolant flushes, alignments, and more
          </li>
          <li>
            <a href="/general-auto-repair" title="Apperson Automotive General Auto Repair">General Auto Repair</a>
            {' '}
            – General repairs for includes (not limited to) brake calipers, window motors, regulators, and starters
          </li>
          <li>
            <a href="/major-auto-repair" title="Apperson Automotive Major Auto Repair">Major Auto Repair</a>
            {' '}
            – We’ll handle your steering rack issues, intake gasket repairs, heat and air system problems, and much more
          </li>
        </ul>
        <p>We’ll repair any make or model vehicle you have.</p>
        <p>
          To schedule your FREE high mileage or vacation vehicle check over, call Apperson Automotive at
          {' '}
          <a href="tel:5404447337" style={{ textDecoration: 'none' }}>540-444-7337</a>
          <br />
          You can also stop by at 1601 Apperson Drive, Salem VA 24153.
        </p>
      </div>
    );
  }

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
          Your one stop auto shop where honesty, quality work, and fair pricing are guaranteed
        </h4>
        <p>{' '}</p>
        <div>
          <p>
            Are you looking for well qualified mechanics? Look no further!
            <br />
            We have more than
            {' '}
            <strong>150 years of combined experience</strong>
            !
          </p>
          <p>
            Take advantage of our
            <br />
            <strong>FREE high mileage / vacation vehicle check over</strong>
            .
          </p>
          <p>
            <br />
            Receive
            {' '}
            <strong>5% OFF mechanical repairs</strong>
            <br />
            when you present the coupon from this site.
          </p>
          <p>Shuttle service is available to you.</p>
        </div>
        <h4 style={{ marginTop: '40px' }}>Apperson Automotive - Salem, VA Auto Repair Service</h4>
        <p><strong>Quality service for your vehicle (not limited to):</strong></p>
        <ul>
          <li>State inspections</li>
          <li>Alignments</li>
          <li>Tune ups</li>
          <li>Oil changes</li>
          <li>Coolant flush</li>
        </ul>
        {this.getToKnow()}
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

Major.defaultProps = { homeContent: { title: '', comments: '' } };
Major.propTypes = {
  homeContent: PropTypes.shape({
    title: PropTypes.string,
    comments: PropTypes.string,
  }),
};

export default connect(mapStoreToProps, null)(Major);

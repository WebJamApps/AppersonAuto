import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withResizeDetector } from 'react-resize-detector';
import mapStoreToProps from '../../redux/mapStoreToProps';
import commonUtils from '../../lib/commonUtils';
import PicSlider from '../../components/pic-slider';
import slidesArr from '../../lib/slides';

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('', window.screen.width); }

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
        <img id="coupon" alt="graphic coupon" src="../static/imgs/banner5.png" />
      </div>
    );
  }

  mechanics() { // eslint-disable-line class-methods-use-this
    return (
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
    );
  }

  homeText(marginLeft) {
    const { width } = this.props;
    return (
      <div className="col" style={{ top: '0', paddingRight: '6px', marginLeft }}>
        <h4
          className="pagetitle"
          style={{ marginTop: '25px', fontWeight: 'bold', fontSize: '16pt' }}
        >
          Your one stop auto shop where honesty, quality work, and fair pricing are guaranteed
        </h4>
        <p>{' '}</p>
        {this.mechanics()}
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
        {width < 1162 ? this.coupon(targetRef) : null}
      </div>
    );
  }

  mainPanel(marginLeft) {
    const { width } = this.props;
    return (
      <div className="row">
        {this.homeText(marginLeft)}
        {this.commonUtils.widePics(width, slidesArr, PicSlider, this.coupon, '2.5in')}
      </div>
    );
  }

  render() {
    return this.commonUtils.renderer(slidesArr, this, PicSlider);
  }
}

Homepage.defaultProps = { homeContent: { title: '', comments: '' } };
Homepage.propTypes = {
  homeContent: PropTypes.shape({
    title: PropTypes.string,
    comments: PropTypes.string,
  }),
};

export default connect(mapStoreToProps, null)(withResizeDetector(Homepage));

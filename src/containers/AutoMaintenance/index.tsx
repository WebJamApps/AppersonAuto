import React, { Component, RefObject } from 'react';
import { withResizeDetector } from 'react-resize-detector';
import commonUtils from '../../lib/commonUtils';
import PicSlider from '../../components/pic-slider';
import slidesArr from '../../lib/slides';

interface AutoMaintenanceProps {
  width: number;
  targetRef: RefObject<HTMLDivElement>;
}

export class AutoMaintenance extends Component<AutoMaintenanceProps> {
  commonUtils: typeof commonUtils;

  static defaultProps: { homeContent: { title: string; comments: string; }; width: number; };

  constructor(props: AutoMaintenanceProps) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Auto Maintenance', window.screen.width); }

  filters(): JSX.Element {
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
      </div>
    );
  }

  quality(): JSX.Element { // eslint-disable-line class-methods-use-this
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

  pageText(marginLeft: string): JSX.Element { // eslint-disable-line class-methods-use-this
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

  mainPanel(marginLeft: string): JSX.Element {
    const { width } = this.props;
    return (
      <div className="row">
        {this.pageText(marginLeft)}
      </div>
    );
  }

  render(): JSX.Element {
    return this.commonUtils.renderer(slidesArr, this, PicSlider);
  }
}

export default withResizeDetector(AutoMaintenance);

import React, { type Ref } from 'react';
import CommonUtils from 'src/lib/commonUtils';
import { PicSlider } from 'src/components/pic-slider';
import slidesArr from 'src/lib/slides';
import { useWindowWidth } from 'src/lib/useWindowWidth';

interface MajorAutoProps {
  targetRef?: Ref<HTMLDivElement>;
  width?: number;
}
export class Major extends React.Component<MajorAutoProps, unknown> {
  commonUtils = CommonUtils;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: MajorAutoProps) { super(props); }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Major Auto Repair', window.screen.width); }

  coupon() { // eslint-disable-line class-methods-use-this
    return (
      <div style={{ width: '295px', margin: 'auto' }}>
        <img id="coupon" alt="graphic coupon" src="../static/imgs/banner5.png" />
      </div>
    );
  }

  service() {
    const { targetRef, width } = this.props;
    const marginBottom = width && width < 1162 ? '20px' : '190px';
    return (
      <div ref={targetRef}>
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
        <p>
          We’ll provide you with trustworthy service. We stand behind our work.
        </p>
        <p style={{ marginBottom }}>
          You’ll receive a 12-month 12,000-mile warranty on all repairs.
          <br />
          Competitive rates are available. Call Apperson Automotive at
          <br />
          <a style={{ textDecoration: 'none' }} href="tel:5404447337">540-444-7337</a>
          {' '}
          to set up your appointment.
        </p>
      </div>
    );
  }

  majorPageText(marginLeft: string) { // eslint-disable-line class-methods-use-this
    return (
      <div className="col" style={{ top: '0', paddingRight: '6px', marginLeft }}>
        <h4
          className="pagetitle"
          style={{ marginTop: '25px', fontWeight: 'bold', fontSize: '16pt' }}
        >
          Major Auto Repair
        </h4>
        <p>{' '}</p>
        <p>
          If you’re experiencing problems with your vehicle then bring it to us for our excellent diagnostic service.
        </p>
        <p>
          <br />
          You’ll receive a
          {' '}
          <b>12-month 12,000-mile warranty</b>
          <br />
          for all of our services.
        </p>
        {this.service()}
      </div>
    );
  }

  mainPanel(marginLeft: string) {
    const { targetRef, width } = this.props;
    return (
      <div ref={targetRef}>
        <div className="row">
          {this.majorPageText(marginLeft)}
          {this.commonUtils.widePics(width || 400, slidesArr, PicSlider, this.coupon, '2.5in')}
        </div>
        {width && width < 1162 ? (
          <div>
            {this.coupon()}
          </div>
        ) : null}
      </div>
    );
  }

  render() {
    return this.commonUtils.renderer(slidesArr, this, PicSlider);
  }
}

function MajorWithResize() {
  const width = useWindowWidth();
  return <Major width={width || 0} />;
}
export default MajorWithResize;
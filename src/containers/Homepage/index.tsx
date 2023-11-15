import { withResizeDetector } from 'react-resize-detector';
import CommonUtils from 'src/lib/commonUtils';
import { PicSlider } from 'src/components/pic-slider';
import slidesArr from 'src/lib/slides';
import { Component, RefObject } from 'react';

interface HomepageProps {
  targetRef?: RefObject<HTMLDivElement>;
  width?: number;
}
export class Homepage extends Component<HomepageProps, unknown> {
  commonUtils = CommonUtils;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props:HomepageProps) { super(props); }

  componentDidMount():void { this.commonUtils.setTitleAndScroll('', window.screen.width); }

  getToKnow():JSX.Element { // eslint-disable-line class-methods-use-this
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

  coupon():JSX.Element { // eslint-disable-line class-methods-use-this
    return (
      <div style={{ width: '295px', margin: 'auto' }}>
        <img id="coupon" alt="graphic coupon" src="../static/imgs/banner5.png" />
      </div>
    );
  }

  mechanics():JSX.Element { // eslint-disable-line class-methods-use-this
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
        <p>Shuttle service is available to you.</p>
      </div>
    );
  }

  homeText(marginLeft: string):JSX.Element {
    const { targetRef, width } = this.props;
    return (
      <div ref={targetRef} className="col" style={{ top: '0', paddingRight: '6px', marginLeft }}>
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
        {width && width < 1162 ? this.coupon() : null}
      </div>
    );
  }

  mainPanel(marginLeft:string):JSX.Element {
    const { targetRef, width } = this.props;
    return (
      <div ref={targetRef} className="row">
        {this.homeText(marginLeft)}
        {this.commonUtils.widePics(width || 300, slidesArr, PicSlider, this.coupon, '2.5in')}
      </div>
    );
  }

  render():JSX.Element {
    return this.commonUtils.renderer(slidesArr, this, PicSlider);
  }
}

export default withResizeDetector(Homepage);

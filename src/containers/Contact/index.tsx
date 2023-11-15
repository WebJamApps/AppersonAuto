import { Component, RefObject } from 'react';
import DefaultWideMap from './WideMap';
import DefaultNarrowMap from './NarrowMap';
import commonUtils from 'src/lib/commonUtils';
import { withResizeDetector } from 'react-resize-detector';

interface ContactProps {
  width?: number;
  targetRef: RefObject<HTMLDivElement>;
}

export class Contact extends Component<ContactProps> {
  commonUtils: typeof commonUtils;

  static defaultProps: { width: number; };

  constructor(props: ContactProps) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Contact', window.screen.width); }

  render(): JSX.Element {
    const { targetRef, width } = this.props;
    return (
      <div ref={targetRef} style={{ flexGrow: 1 }}>
        {width && width >= 1266
          ? (
            <div className="page-content">
              <DefaultWideMap />
              <p style={{ fontSize: '6pt', marginBottom: '0' }}>&nbsp;</p>
            </div>
          )
          : (
            <div className="page-content">
              <DefaultNarrowMap />
            </div>
          )}
      </div>
    );
  }
}

export default withResizeDetector(Contact);

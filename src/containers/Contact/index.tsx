import { Component, type Ref } from 'react';
import DefaultWideMap from './WideMap';
import DefaultNarrowMap from './NarrowMap';
import commonUtils from 'src/lib/commonUtils';
import { useWindowWidth } from 'src/lib/useWindowWidth';

interface ContactProps {
  width?: number;
  targetRef?: Ref<HTMLDivElement>;
}

export class Contact extends Component<ContactProps> {
  commonUtils: typeof commonUtils;

  static defaultProps: { width: number; };

  constructor(props: ContactProps) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Contact', window.screen.width); }

  render() {
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

function ContactWithResize() {
  const width = useWindowWidth();
  return <Contact width={width || 0} />;
}
export default ContactWithResize;
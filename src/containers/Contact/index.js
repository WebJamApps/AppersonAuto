import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import DefaultWideMap from './WideMap';
import DefaultNarrowMap from './NarrowMap';
import commonUtils from '../../lib/commonUtils';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
    this.onResize = this.onResize.bind(this);
    this.state = { width: 320 };
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Contact', window.screen.width); }

  onResize(width) {
    this.setState({ width });
    this.commonUtils.setTitleAndScroll('Contact', width);
  }

  render() {
    const { width } = this.state;
    return (
      <div>
        {width >= 1004
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
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} targetDomEl={this.parentRef.current} />
      </div>
    );
  }
}

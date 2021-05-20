import React, { Component } from 'react';
import { withResizeDetector } from 
  'react-resize-detector';
import PropTypes from 'prop-types';
import DefaultWideMap from './WideMap';
import DefaultNarrowMap from './NarrowMap';
import commonUtils from '../../lib/commonUtils';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Contact', window.screen.width); }

  render() {
    const { targetRef, width } = this.props;
    return (
      <div ref={targetRef} style={{ flexGrow: 1 }}>
        {width >= 1266
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

Contact.propTypes = {
  width: PropTypes.number.isRequired,
  targetRef: PropTypes.shape({ current: PropTypes.element }).isRequired,
};

export default withResizeDetector(Contact);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import WideAbout from './Widescreen/WideAbout';
import mapStoreToProps from '../../redux/mapStoreToProps';
import commonUtils from '../../lib/commonUtils';

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
    this.parentRef = React.createRef();
    this.onResize = this.onResize.bind(this);
    this.state = { width: 100 };
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll(''); }

  onResize(width) { this.setState({ width }); }

  coupon() { // eslint-disable-line class-methods-use-this
    return (
      <div style={{ width: '295px', margin: 'auto' }}>
        <img alt="graphic coupon" src="../static/imgs/banner5.png" />
      </div>
    );
  }

  render() {
    const { width } = this.state;
    const { homeContent } = this.props;
    return (
      <div>
        {width >= 1004
          ? (
            <div className="page-content">
              <WideAbout homeContent={homeContent} width={width} />
              <hr />
              <p style={{ fontSize: '6pt', marginBottom: '0' }}>&nbsp;</p>
            </div>
          )
          : (
            <div className="page-content">
              <WideAbout homeContent={homeContent} width={width} />
              <hr />
              <p style={{ fontSize: '6pt', marginBottom: '0' }}>&nbsp;</p>
              <p style={{ fontSize: '6pt', marginBottom: '0' }}>&nbsp;</p>
            </div>
          )}
        {this.coupon()}
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} targetDomEl={this.parentRef.current} />
      </div>
    );
  }
}

Homepage.defaultProps = { homeContent: { title: '', comments: '' } };
Homepage.propTypes = {
  homeContent: PropTypes.shape({
    title: PropTypes.string,
    comments: PropTypes.string,
  }),
};

export default connect(mapStoreToProps, null)(Homepage);

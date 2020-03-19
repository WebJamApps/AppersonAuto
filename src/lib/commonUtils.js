import React from 'react';

const setTitleAndScroll = (pageTitle) => {
  if (pageTitle !== '') pageTitle += ' | ';// eslint-disable-line no-param-reassign
  document.title = `${pageTitle}Apperson Automotive`;
  const top = document.getElementsByClassName('page-content')[0];
  if (top !== undefined && typeof top.scrollIntoView === 'function') {
    top.scrollIntoView();
  }
};

const cellPics = (width, slides, PicSlider) => {
  if (width < 900) {
    return (
      <div className="col" style={{ padding: '1px', paddingRight: '0' }}>
        <div id="familySlideshowWide" style={{ display: 'flex', flexDirection: 'column' }}><PicSlider data={slides} /></div>
      </div>
    );
  }
  return null;
};

const widePics = (width, slides, PicSlider, coupon, height) => {
  if (width >= 900) {
    return (
      <div className="col" style={{ padding: '1px', paddingRight: '0' }}>
        <div id="familySlideshowWide" style={{ display: 'flex', flexDirection: 'column' }}><PicSlider data={slides} /></div>
        <p style={{ height }}>{' '}</p>
        {coupon()}
      </div>
    );
  }
  return null;
};

const renderer = (width, slidesArr, view, PicSlider, ReactResizeDetector) => {
  const marginLeft = width < 900 ? '5px' : '15px';
  return (
    <div className="container-fluid">
      {cellPics(width, slidesArr, PicSlider)}
      {view.mainPanel(marginLeft, width)}
      {width < 900 ? view.coupon() : null}
      <ReactResizeDetector handleWidth handleHeight onResize={view.onResize} targetDomEl={view.parentRef.current} />
    </div>
  );
};
export default {
  setTitleAndScroll, cellPics, widePics, renderer,
};

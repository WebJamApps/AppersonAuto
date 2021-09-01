import React from 'react';

const setTitleAndScroll = (pageTitle: string, width: number): void => {
  if (pageTitle !== '') pageTitle += ' | ';// eslint-disable-line no-param-reassign
  document.title = `${pageTitle}Web Jam LLC`;
  let getClass = 'page-content';
  if (width !== undefined && width < 1004) getClass = 'headercontent';
  const top = document.getElementsByClassName(getClass)[0];
  if (top !== undefined && typeof top.scrollIntoView === 'function') top.scrollIntoView();
};

const cellPics = (width: number, slides: any, PicSlider: any): JSX.Element | null => {
  if (width < 1162) {
    return (
      <div className="col" style={{ padding: '0' }}>
        <div
          id="familySlideshowWide"
          style={{
            display: 'flex', flexDirection: 'column', maxWidth: '100%',
          }}
        >
          <PicSlider data={slides} />
        </div>
      </div>
    );
  }
  return null;
};

const widePics = (width: number, slides: any, PicSlider: any, coupon: () => JSX.Element, height: string): JSX.Element | null => {
  if (width >= 1162) {
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

const renderer = (slidesArr: any, view: any, PicSlider: any): JSX.Element => {
  const { targetRef, width } = view.props;
  const marginLeft = width < 1162 ? '5px' : '15px';
  return (
    <div ref={targetRef}>
      {width < 1162 ? (
        <div>
          {cellPics(width, slidesArr, PicSlider)}
        </div>
      ) : null}
      <div className="container-fluid">
        {view.mainPanel(marginLeft, width)}
      </div>
    </div>
  );
};
export default {
  setTitleAndScroll, cellPics, widePics, renderer,
};

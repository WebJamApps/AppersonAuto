import ReactResizeDetector from 'react-resize-detector';
import commonUtils from '../../src/lib/commonUtils';
import PicSlider from '../../src/components/pic-slider';

describe('commonUtils', () => {
  let r;
  it('calls scrollIntoView', () => {
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    document.body.innerHTML = '<div class="container-fluid"></div>';
    commonUtils.setTitleAndScroll('home');
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });
  it('cell pics returns null when with is not less than 900', () => {
    r = commonUtils.cellPics(1000);
    expect(r).toBe(null);
  });
  it('widePics returns the slideshow when width is greater than 899', () => {
    r = commonUtils.widePics(900, [], PicSlider, () => null, '10px');
    expect(r.type).toBe('div');
  });
  it('sets the page content for widescreen rendering', () => {
    r = commonUtils.renderer(900, [], { coupons: () => null, mainPanel: () => null, parentRef: { current: null } }, PicSlider, ReactResizeDetector);
    expect(r.type).toBe('div');
  });
});

import commonUtils from '../../src/lib/commonUtils';
import PicSlider from '../../src/components/pic-slider';

describe('commonUtils', () => {
  let r;
  it('calls scrollIntoView', () => {
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    document.body.innerHTML = '<div class="page-content material-header pagetitle"></div>';
    commonUtils.setTitleAndScroll('home');
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });
  it('cell pics returns null when with is not less than 1162', () => {
    r = commonUtils.cellPics(1300);
    expect(r).toBe(null);
  });
  it('widePics returns the slideshow when width is greater than 1161', () => {
    r = commonUtils.widePics(1162, [], PicSlider, () => null, '10px');
    expect(r.type).toBe('div');
  });
  // it('sets the page content for widescreen rendering', () => {
  //   r = commonUtils.renderer(1162, [], { coupons: () => null, mainPanel: () => null }, PicSlider);
  //   expect(r.type).toBe('div');
  // });
});

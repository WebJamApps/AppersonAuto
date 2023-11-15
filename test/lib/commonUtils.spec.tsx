import commonUtils from '../../src/lib/commonUtils';
import { PicSlider } from '../../src/components/pic-slider';

describe('commonUtils', () => {
  let r: any;
  it('calls scrollIntoView', () => {
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    document.body.innerHTML = '<div class="page-content material-header top"></div>';
    commonUtils.setTitleAndScroll('home', 1300);
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });
  it('cell pics returns null when width is not less than 1162', () => {
    r = commonUtils.cellPics(1300, [{}], PicSlider);
    expect(r).toBe(null);
  });
  it('widePics returns the slideshow when width is greater than 1161', () => {
    r = commonUtils.widePics(1162, [{}], PicSlider, () => <div />, '10px');
    expect(r.type).toBe('div');
  });
});

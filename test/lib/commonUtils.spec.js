import commonUtils from '../../src/lib/commonUtils';

describe('forms', () => {
  it('calls scrollIntoView', () => {
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    document.body.innerHTML = '<div class="container-fluid"></div>';
    commonUtils.setTitleAndScroll('home');
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });
});

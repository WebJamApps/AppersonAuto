import { render } from '@testing-library/react';
import { PicSlider } from 'src/components/pic-slider';

describe('picture slider component test', () => {
  it('renders the component', () => {
    const data:any = [
      { _id: 1, url: '../static/imgs/ohaf/slideshow2.png', comments: 'showCaption' },
      { _id: 2, url: '../static/imgs/ohaf/slideshow3.png' },
      { _id: 3, url: '../static/imgs/ohaf/slideshow4.png' },
      { _id: 4, url: '../static/imgs/ohaf/slideshow5.png' },
      { _id: 5, url: '../static/imgs/ohaf/slideshow6.png' },
    ];
    const result = render(<PicSlider data={data} />).container;
    expect(result).toMatchSnapshot();
  });
  it('renders a div when data items have no useful fields', () => {
    const data = [{} as any];
    const result = render(<PicSlider data={data} />).container;
    expect(result.firstChild?.nodeName).toBe('DIV');
  });
});

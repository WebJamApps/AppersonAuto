import renderer from 'react-test-renderer';
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
    const result = renderer.create(<PicSlider data={data} />).toJSON();
    expect(result).toMatchSnapshot();
  });
  it('renders null when no array of data', () => {
    const data = [{} as any];
    const result:any = renderer.create(<PicSlider data={data} />).toJSON();
    expect(result.type).toBe('div');
  });
});

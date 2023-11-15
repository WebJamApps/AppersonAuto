import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Caption from './PicSlider/caption';

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
};
export interface IpicData {
  _id: string, url: string, title: string, comments: string
}
export function PicSlider({ data }: { data: IpicData[] }): JSX.Element {
  return (
    <div>
      <Slider {...settings}>
        {
          Array.isArray(data) ? data.map((d) => (
            <div key={d._id}>
              {' '}
              <img className="slide-images" src={d.url} alt={d.title} />
              {' '}
              {d.comments === 'showCaption' ? <Caption caption={d.title} /> : null}
            </div>
          ))
            : null
        }
      </Slider>
    </div>
  );
}


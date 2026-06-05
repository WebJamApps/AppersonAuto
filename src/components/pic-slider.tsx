import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Caption from './PicSlider/caption';

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  // even out the first slide's interval (react-slick fade+autoplay quirk
  // makes the first photo otherwise linger longer than the rest)
  waitForAnimate: false,
};
export interface IpicData {
  _id: string, url: string, title: string, comments: string
}
export function PicSlider({ data }: { data: IpicData[] }) {
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


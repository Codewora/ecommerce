import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CustomSlider } from './styledComponent';

type Props = {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  dots?: boolean;
  infinite?: boolean;
  lazyLoad?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  centerMode?: boolean;
  showButton?: boolean
}

const SliderComp = ({
  children,
  dots,
  infinite,
  lazyLoad,
  speed,
  slidesToShow,
  slidesToScroll,
  centerMode,
  showButton
}: Props) => {

  const settings:any = {
    dots: dots,
    autoplay: true,
    infinite: infinite || false,
    lazyLoad: lazyLoad || true,
    speed: speed || 500,
    slidesToShow: slidesToShow || 3,
    slidesToScroll: slidesToScroll || 3,
    centerMode: centerMode || false,
  };

  return (
    <CustomSlider showButton={showButton} {...settings}>
      {children}
    </CustomSlider>
  )

}

export default SliderComp;
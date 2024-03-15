import './ButtonSlider.scss';

import { useSwiper } from 'swiper/react';
import { Icon } from '../../Icon/Icon';


export const SlideNextButton = () => {
   const swiper = useSwiper();

   return (
      <button className="slide-next-button" onClick={() => swiper.slideNext()}>
         <Icon id="arrow-slider" className="svg-arrow-slider" />
      </button>
   );
}

export const SlidePrevButton = () => {
   const swiper = useSwiper();

   return (
      <button className="slide-prev-button" onClick={() => swiper.slidePrev()}>
         <Icon id="arrow-slider" className="svg-arrow-slider" />
      </button>
   );
}
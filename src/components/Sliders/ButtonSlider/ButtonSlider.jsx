import './ButtonSlider.scss';

import { useEffect } from 'react';
import { useSwiper } from 'swiper/react';
import { Icon } from '../../Icon/Icon';


export const SlideNextButton = () => {
   const swiper = useSwiper();

   useEffect(() => {
      if (!swiper) return;

      const slideNext = () => {
         swiper.slideNext();
      };

      document.querySelector('.slide-next-button').addEventListener('click', slideNext);

      return () => {
         document.querySelector('.slide-next-button').removeEventListener('click', slideNext);
      };
   }, [swiper]);

   return (
      <button className="slide-next-button">
         <Icon id="arrow-slider" className="svg-arrow-slider" />
      </button>
   );
}


export const SlidePrevButton = () => {
   const swiper = useSwiper();

   useEffect(() => {
      if (!swiper) return;

      const slidePrev = () => {
         swiper.slidePrev();
      };

      document.querySelector('.slide-prev-button').addEventListener('click', slidePrev);

      return () => {
         document.querySelector('.slide-prev-button').removeEventListener('click', slidePrev);
      };
   }, [swiper]);

   return (
      <button className="slide-prev-button">
         <Icon id="arrow-slider" className="svg-arrow-slider" />
      </button>
   );
}
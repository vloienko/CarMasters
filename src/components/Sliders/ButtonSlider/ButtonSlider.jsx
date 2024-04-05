/* eslint-disable react/prop-types */
import './ButtonSlider.scss';

import { useEffect } from 'react';
import { useSwiper } from 'swiper/react';
import { Icon } from '../../Icon/Icon';


export const SlideNextButton = ({ color }) => {
   const swiper = useSwiper();

   useEffect(() => {
      if (!swiper) return;

      const slideNext = () => {
         swiper.slideNext();
      };

      const slideNextButton = document.querySelector('.slide-next-button');
      if (slideNextButton) {
         slideNextButton.addEventListener('click', slideNext);
      }

      return () => {
         if (slideNextButton) {
            slideNextButton.removeEventListener('click', slideNext);
         }
      };
   }, [swiper]);


   return (
      <button className="slide-next-button">
         <Icon id="arrow-slider" className={`svg-arrow-slider ${color}`} />
      </button>
   );
}


export const SlidePrevButton = ({ color }) => {
   const swiper = useSwiper();

   useEffect(() => {
      if (!swiper) return;

      const slidePrev = () => {
         swiper.slidePrev();
      };

      const slidePrevButton = document.querySelector('.slide-prev-button');
      if (slidePrevButton) {
         slidePrevButton.addEventListener('click', slidePrev);
      }

      return () => {
         if (slidePrevButton) {
            slidePrevButton.removeEventListener('click', slidePrev);
         }
      };
   }, [swiper]);


   return (
      <button className="slide-prev-button">
         <Icon id="arrow-slider" className={`svg-arrow-slider ${color}`} />
      </button>
   );
}
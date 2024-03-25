import './MainSlider.scss';

import car_1 from '../../../assets/images/cars-slider/car-1.png';
import car_2 from '../../../assets/images/cars-slider/car-2.png';
import car_3 from '../../../assets/images/cars-slider/car-3.png';
import car_4 from '../../../assets/images/cars-slider/car-4.png';


// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideNextButton, SlidePrevButton } from '../ButtonSlider/ButtonSlider';

// Import Swiper styles
import 'swiper/css';


const cars = [car_1, car_2, car_3, car_4];

export const MainSlider = () => {
   return (
      <div className="main-slider">
         <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            grabCursor={true}
            // loop={true}
            navigation={{
               nextEl: ".slide-next-button",
               prevEl: ".slide-prev-button",
            }}
         >
            {cars.map((car, index) => (
               <SwiperSlide key={index}>
                  <img src={car} alt="Image car" />
               </SwiperSlide>
            ))}
         </Swiper>
         
         <SlideNextButton color={'white'} />
         <SlidePrevButton color={'white'} />
      </div>
   );
};
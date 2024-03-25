import './SliderWithButtons.scss';

import client_1 from '../../../assets/images/client/client-1.jpg';


// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideNextButton, SlidePrevButton } from '../ButtonSlider/ButtonSlider';
import { useState, useEffect } from 'react';


// Import Swiper styles
import 'swiper/css';


const clients = [
   { image: client_1, name: 'Laura Chaisson', review: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.' },
   { image: client_1, name: 'Laura Chaisson', review: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.' },
];


export const SliderWithButtons = () => {

   // Створюємо стан для відстеження ширини вікна
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   // Функція для оновлення ширини вікна при зміні розміру екрану
   const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
   };

   // Підписка на подію розміру вікна при завантаженні компонента
   useEffect(() => {
      window.addEventListener('resize', updateWindowWidth);
      return () => window.removeEventListener('resize', updateWindowWidth);
   }, []);

   // Перевірка ширини вікна
   const isMobileCustom = windowWidth <= 639.98;


   const renderSlideButtons = () => {
      return (
         <>
            <SlideNextButton color='purple' />
            <SlidePrevButton color='purple' />
         </>
      )
   };


   return (
      <div className="slider-buttons">
         <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            grabCursor={true}
            // loop={true}
            navigation={{
               nextEl: ".slide-next-button",
               prevEl: ".slide-prev-button",
            }}
         >
            {clients.map((client, index) => (
               <SwiperSlide key={index}>
                  <div className="client-say__slide">
                     <div className="client-say__image">
                        <img src={client.image} alt="Image client" />
                        { isMobileCustom && renderSlideButtons() }
                     </div>
                     <div className="client-say__info">
                        <span className="client-say__name">
                           {client.name}
                        </span>
                        <p className="client-say__review">
                           {client.review}
                        </p>
                     </div>
                  </div>
               </SwiperSlide>
            ))}

            { !isMobileCustom && renderSlideButtons() }
           
         </Swiper>

      </div>
   );
};
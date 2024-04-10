/* eslint-disable react/prop-types */
import './CardCar.scss';

// import Swiper core and required modules
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/scrollbar';


export const CardCar = ({ images, title, price, carYear, carClass, carTransmission, carKilometers }) => {
   return (
      <div className="card-car">
         <div className="card-car__images">
            <Swiper
               modules={[Scrollbar]}
               spaceBetween={5}
               slidesPerView={1}
               grabCursor={true}
               scrollbar={{
                  hide: false,
               }}
            >
               {images.map((image, index) => (
                  <SwiperSlide key={index}>
                     <img src={image} alt="Image car" />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         <div className="card-car__info">
            <h2 className="card-car__title">{title}</h2>
            <div className="card-car__wrap">
               <span className="card-car__price">$ {price}</span>
               <ul className="card-car__items">
                  <li className="card-car__item">{carYear} year</li>
                  <li className="card-car__item">{carClass}</li>
                  <li className="card-car__item">{carTransmission}</li>
                  <li className="card-car__item">{carKilometers}</li>
               </ul>
            </div>
         </div>
      </div>
   );
}
import './MainMap.scss';
import { MainSlider } from '../../Sliders/MainSlider/MainSlider';
import { RequestButtonChoice } from '../../Buttons/Buttons';
import { useState, useEffect } from 'react';


export const MainMap = () => {

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
   const isMobile = windowWidth <= 991.98;


   return (
      <section className="main-map">
         <div className="main-map__container">
            <div className="main-map__body">
               <div className="main-map__info">
                  <h1 className="main-map__title">The easiest way to buy a car in Canada</h1>
                  {isMobile ? null : <RequestButtonChoice />}
               </div>

               <MainSlider />
               {isMobile && <RequestButtonChoice />}
            </div>
         </div>
      </section>
   );
};
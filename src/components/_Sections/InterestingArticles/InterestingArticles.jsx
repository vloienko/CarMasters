import './InterestingArticles.scss';

import { Article } from '../../Article/Article';
import { AllArticlesLink } from '../../Buttons/Buttons';
import { HeadingH2 } from '../../_Items/Items';
import { MobileCustomIsFalse, MobileCustomIsTrue } from '../../_WindowWidth/WidthIsTrueOrFalse';

import image_1 from '@images/article-preview/image-1.jpg';
import image_2 from '@images/article-preview/image-2.jpg';
import image_3 from '@images/article-preview/image-3.jpg';


// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideNextButton, SlidePrevButton } from '../../Sliders/ButtonSlider/ButtonSlider';


// Import Swiper styles
import 'swiper/css';


const articlesData = [
   { image: image_1, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },
   { image: image_2, date: '10 May, 2020', title: 'How fast can you order a car in Canada?' },
   { image: image_3, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' }
];

export const InterestingArticles = () => {
   const title = 'Interesting to read';

   const renderAllArticlesLink = () => {
      return (
         <AllArticlesLink />
      )
   };

   const renderSlideButtons = () => {
      return (
         <>
            <SlideNextButton color='purple' />
            <SlidePrevButton color='purple' />
         </>
      )
   };


   return (
      <section className="interest-articles">
         <div className="interest-articles__container">
            <div className="interest-articles__body">
               <div className="interest-articles__top">
                  <HeadingH2 title={title} />

                  {/* Відображення кнопки All articles на розширенні яке більше за 639.98 */}
                  <MobileCustomIsFalse nameFunction={renderAllArticlesLink} />
               </div>

               <div className="interest-articles__bottom">
                  <Swiper
                     // resizeObserver={true}
                     // observer={true}
                     modules={[Navigation]}
                     spaceBetween={20}
                     grabCursor={true}
                     navigation={{
                        nextEl: ".slide-next-button",
                        prevEl: ".slide-prev-button",
                     }}

                     breakpoints={{
                        320: {
                           slidesPerView: 1,
                        },
                        639.98: {
                           slidesPerView: 2,
                        },
                        991.98: {
                           slidesPerView: 3,
                        },
                     }}
                  >
                  {articlesData.map((article, index) => (
                     <SwiperSlide key={index}>
                        <Article
                           date={article.date}
                           title={article.title}
                           image={article.image}
                        />
                     </SwiperSlide>
                  ))}

                  {/* Відображення кнопок слайдера на розширенні - 639.98 */}
                  <MobileCustomIsTrue nameFunction={renderSlideButtons} />

               </Swiper>
            </div>

            {/* Відображення кнопки All articles на розширенні - 639.98 */}
            <MobileCustomIsTrue nameFunction={renderAllArticlesLink} />
         </div>
      </div>
      </section >
   );
}
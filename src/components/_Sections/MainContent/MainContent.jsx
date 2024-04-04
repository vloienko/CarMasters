/* eslint-disable react/prop-types */
import './MainContent.scss';

import { HeadingH2 } from '../../_Items/Items';
import { RequestButton } from '../../Buttons/Buttons';


export const MainContent = ({ data }) => {
   const { title, text, image } = data;

   return (
      <section className="main-content">
         <div className="main-content__container">
            <div className="main-content__body">
               <div className="main-content__box">
                  <HeadingH2 title={title} />
                  <p className="main-content__text">
                     {text}
                  </p>
                  <RequestButton />
               </div>
               <div className="main-content__image">
                  <img src={image} alt="Image car" />
               </div>
            </div>
         </div>
      </section>
   );
};
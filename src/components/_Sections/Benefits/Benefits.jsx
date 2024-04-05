import './Benefits.scss';

import ford from '@images/all-cars/ford.png';

import { HeadingH2, TextSecondary16 } from '../../_Items/Items';
import { PurpleButton } from '../../Buttons/Buttons';


export const Benefits = () => {
   const title = 'Benefits of getting an auto loan with CM';
   const text = 'For many people getting a reasonable auto loan is the best way for them to get a new car. However, the benefits of getting the right loan go beyond just being able to drive a nice vehicle.';


   return (
      <section className="benefits">
         <div className="benefits__container">
            <div className="benefits__body">
               <div className="benefits__info">
                  <HeadingH2 title={title} />
                  <TextSecondary16 text={text} />
                  <p className="benefits__descr">
                     When you work with CM, there are never any hidden costs or fees! We lay out all the terms and conditions so that you know exactly what details of the loan are before you sign anything.
                  </p>
                  <PurpleButton name={'Request a Car'} />
               </div>
               <div className="benefits__image">
                  <img src={ford} alt="Image car" />
               </div>
            </div>
         </div>
      </section>
   );
}
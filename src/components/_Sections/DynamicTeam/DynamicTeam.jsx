import './DynamicTeam.scss';

import image_1 from '@images/about/image-1.jpg';

import { HeadingH2 } from '../../_Items/Items';


export const DynamicTeam = () => {
   const title = "We're dynamic team of creative people with innovative mind";

   return (
      <section className="dynamic-team">
         <div className="dynamic-team__container">
            <div className="dynamic-team__body">
               <div className="dynamic-team__info">
                  <HeadingH2 title={title} />
                  <div className="dynamic-team__box">
                     <span>Our History</span>
                     <p className="dynamic-team__text">
                        We founded CM because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.
                     </p>
                  </div>
                  <div className="dynamic-team__box">
                     <span>Our Goal</span>
                     <p className="dynamic-team__text">
                        Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.
                     </p>
                  </div>
               </div>
               <div className="dynamic-team__image">
                  <img src={image_1} alt="Image working" />
               </div>
            </div>
         </div>
      </section>
   );
}
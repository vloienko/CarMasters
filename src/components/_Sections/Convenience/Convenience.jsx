import './Convenience.scss';

import { HeadingH2, TextSecondary16 } from '../../_Items/Items';

import nissan from '@images/all-cars/nissan.png'


export const Convenience = () => {
   const title = 'CM is convenience and transparency';

   const paragraphFirst = 'We want to make simple for you to find the car you want. We also want to make sure you are 100% comfortable with the terms of the conditions of your auto loan.';
   const paragraphSecond = 'Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.';


   return (
      <section className="convenience">
         <div className="convenience__container">
            <div className="convenience__body">
               <div className="convenience__image">
                  <img src={nissan} alt="Image car" />
               </div>
               <div className="convenience__info">
                  <HeadingH2 title={title} />
                  <TextSecondary16 text={paragraphFirst} />
                  <TextSecondary16 text={paragraphSecond} />
               </div>
            </div>
         </div>
      </section>
   );
}
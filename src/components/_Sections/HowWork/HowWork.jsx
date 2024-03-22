import './HowWork.scss';

import honda from '../../../assets/images/honda.png';
import lexus from '../../../assets/images/lexus.png';


export const HowWork = () => {
   

   return (
      <section className="how-work">
         <div className="how-work__container">
            <img className="left" src={honda} alt="Honda car" />
            <img className="right" src={lexus} alt="Lexus car" />
            <div className="how-work__body">
               <div className="how-work__block">
                  <h2 className="how-work__title">How does it work?</h2>
                  <span className="how-work__sub-title">From your Phone to your Home</span>
                  <p className="how-work__descr">
                     We make it easy for you to buy your dream car from your phone without ever having to step into a dealership! We deliver your vehicle to your home for you to test drive before you sign anything.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};
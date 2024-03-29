import './HowMuch.scss';

import { HeadingH2 } from '../../_Items/Items';
import LoanCalculator from '../../Calculator/Calculator';


export const HowMuch = () => {
   const title = 'Let’s figure out how much you can afford';

   return (
      <section className="how-much">
         <div className="how-much__container">
            <div className="how-much__wrap">
               <HeadingH2 title={title} />
               <p className="how-much__text">
                  Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.
               </p>
            </div>
            <LoanCalculator />
         </div>
      </section>
   );
}
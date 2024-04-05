import './BestPrices.scss';

import { PurpleButton } from '../../Buttons/Buttons';
import { Heading4, HeadingH2, TextSecondary16 } from '../../_Items/Items';


export const BestPrices = () => {
   const title = 'Get a car at the best prices and conditions';

   const paragraphFirst = 'Not only is buying a car with CM easy, it’s also the best way to save money. We have partnerships with Canada’s largest lenders. That allows us to help you secure loans at the best interest rates available.';
   const paragraphSecond = 'Because convenience and transparency are our founding principles, we take the time to answer all of your questions about the vehicle and the auto loan. We will send you pictures and videos of any part of the car you like before you request a test drive.';

   const subTitle = 'We think that CM is the best way to buy a car in Canada. Try it for yourself and see how much time and money you can save.';

   const description = 'There are never any hidden fees or costs. We never ask you to sign anything until we have explained it clearly and you have had a chance to read it.';

   
   return (
      <section className="best-prices">
         <div className="best-prices__container">
            <div className="best-prices__body">
               <div className="best-prices__info">
                  <HeadingH2 title={title} />
                  <TextSecondary16 text={paragraphFirst} />
                  <TextSecondary16 text={paragraphSecond} />
               </div>
               <div className="best-prices__block">
                  <Heading4 title={subTitle} />
                  <TextSecondary16 text={description} />
                  <PurpleButton name={'Request a Car'} />
               </div>
            </div>
         </div>
      </section>
   );
}
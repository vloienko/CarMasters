import './InterestRates.scss';

import iconPercent from '@images/icons/percent.svg';
import iconTime from '@images/icons/time.svg';

import { HeadingH2 } from '../../_Items/Items';
import { InterestItem } from '../../InterestItem/InterestItem';


export const InterestRates = () => {
   const title = 'Interest rates and loan terms';

   const itemsData = [
      {
         icon: iconPercent,
         title: 'What are my interest rate options?',
         text: 'We work to secure customized auto loans from Canada’s largest lenders. Your interest rate is critical for determining the total cost of your auto financing. Interest rates are based on many factors including the loan amount, your credit score, and your budget. We help you find the lowest interest rates available for your auto loan.'
      },
      {
         icon: iconTime,
         title: 'How long will my loan term be?',
         text: 'Our goal is to find the right car and the right loan for you. Because we have relationships with so many different lenders, we can help you find the right term length for your budget. The longer the loan is, often the lower the monthly payments will be—but the more expensive the loan will be overall. Most of the loans we secure for our clients are between 36 and 72 months.'
      }
   ]

   
   return (
      <section className="interest-rates">
         <div className="interest-rates__container">
            <HeadingH2 title={title} />
            <div className="interest-rates__body">
               {itemsData.map((item, index) => (
                  <InterestItem key={index}
                     icon={item.icon}
                     title={item.title}
                     text={item.text}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}
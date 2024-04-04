/* eslint-disable no-undef */
import './GetCar.scss';

import { HeadingH2, TextSecondary16 } from '../../_Items/Items';
import { EasyStep } from '../../EasyStep/EasyStep';


export const GetCar = () => {
   const title = 'Get your dream car';

   const paragraphFirst = 'We founded CM because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.';
   const paragraphSecond = 'We also hated how choosing a car and figuring out the financing for the vehicle were treated as totally separate processes! Instead of dealing with a salesperson, then being handed off to a closer, and then shuffled over to a finance manager, we wanted to create a way for people to buy a car and only deal with a single person for the entire process.';

   const stepsData = [
      { number: '1', title: 'Quickly', text: 'You do not spend a lot of your time going to car dealerships' },
      { number: '2', title: 'Simply', text: 'You can order your dream car just by talking to our specialist by phone' },
      { number: '3', title: 'Conveniently', text: 'We will deliver the car directly to the doorstep of your home or office' }
   ];

   
   return (
      <section className="get-car">
         <div className="get-car__container">
            <div className="get-car__body">
               <div className="get-car__info">
                  <HeadingH2 title={title} />
                  <TextSecondary16 text={paragraphFirst} />
                  <TextSecondary16 text={paragraphSecond} />
               </div>
               <div className="get-car__content">
                  {stepsData.map((step, index) => (
                     <EasyStep
                        key={index}
                        number={step.number}
                        title={step.title}
                        text={step.text}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
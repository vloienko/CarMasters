import './PerfectCar.scss';

import phoneLogo from '../../../assets/images/easy-steps/phone-1.png';
import phoneMap from '../../../assets/images/easy-steps/phone-2.png';


import { EasyStep } from '../../EasyStep/EasyStep';


export const PerfectCar = () => {
   
   const stepsData = [
      { number: '1', title: 'First Contact', text: 'Tell us what your dream vehicle is.' },
      { number: '2', title: 'Vehicle Selection', text: 'One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.' },
      { number: '3', title: 'Secure Financing', text: 'You work with a dedicated Qualified Agent to secure financing on your terms.' },
      { number: '4', title: 'Vehicle Delivery', text: 'We deliver your car to your home or office for you to test drive.' },
      { number: '5', title: 'Getting Vehicle', text: 'If you love the vehicle, you sign the paperwork and keep the car.' }
   ];

   return (
      <section className="perfect-car">
         <div className="perfect-car__container">
            <h3 className="perfect-car__title">Your perfect car in 5 easy steps</h3>
            <div className="perfect-car__body">
               <div className="perfect-car__steps">
                  {stepsData.map((step, index) => (
                     <EasyStep
                        key={index}
                        number={step.number}
                        title={step.title}
                        text={step.text}
                     />
                  ))}
               </div>
               
               <div className="perfect-car__content">
                  <div className="perfect-car__image">
                     <img src={phoneLogo} alt="Image phone" />
                  </div>
                  <div className="perfect-car__image">
                     <img src={phoneMap} alt="Image phone" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

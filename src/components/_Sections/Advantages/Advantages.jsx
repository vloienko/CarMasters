import './Advantages.scss';

import { TriangleBlock } from '../../TriangleBlock/TriangleBlock';


export const Advantages = () => {

   const triangleBlockData = [
      { icon: 'delivery', title: 'Vehicle Delivery', text: 'We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.' },
      { icon: 'finance', title: 'Auto Financing', text: 'We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%' },
      { icon: 'car', title: 'Huge Inventory', text: 'We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you' }
   ];

   return (
      <section className="advantages">
         <div className="advantages__container">
            <h4 className="advantages__title">Advantages of working with us</h4>
            <div className="advantages__body">

               {triangleBlockData.map((block, index) => (
                  <TriangleBlock
                     key={index}
                     icon={block.icon}
                     title={block.title}
                     text={block.text}
                  />
               ))}

            </div>
         </div>
      </section>
   );
};
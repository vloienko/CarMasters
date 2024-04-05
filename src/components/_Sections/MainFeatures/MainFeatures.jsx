import './MainFeatures.scss';

import image_2 from '@images/about/image-2.jpg';

import { HeadingH2, TextSecondary16 } from '../../_Items/Items';
import { CustomersItem } from '../../CustomersItem/CustomersItem';


export const MainFeatures = () => {
   const title = 'Main features';
   const text = 'We are your one stop shop. We believe that vehicle shopping should be a fun and painless process and with years of experience, we make it just that.';

   const customerData = [
      { number: '7,988+', text: 'Sold Cars' },
      { number: '123', text: 'Working Experts' },
      { number: '1560+', text: 'Happy Clients' }
   ];

   return (
      <section className="main-features">
         <div className="main-features__container">
            <div className="main-features__body">
               <div className="main-features__image">
                  <img src={image_2} alt='Image working' />
               </div>
               <div className="main-features__info">
                  <HeadingH2 title={title} />
                  <TextSecondary16 text={text} />
                  <div className="main-features__items">
                     {customerData.map((customer, index) => (
                        <CustomersItem
                           key={index}
                           number={customer.number}
                           text={customer.text}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
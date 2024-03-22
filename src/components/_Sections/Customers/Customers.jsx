import './Customers.scss';

import { RequestButton } from '../../Buttons/Buttons';
import { HeadingH2 } from '../../_Items/Items';
import { CustomersItem } from '../../CustomersItem/CustomersItem';
import { useState, useEffect } from 'react';


export const Customers = () => {
   const title = 'Happy customers';

   const customerData = [
      { number: '7,988+', text: 'Sold Cars' },
      { number: '16,974+', text: 'Vehicles To Choose From' },
      { number: '123', text: 'Experts Across Canada' }
   ];


   // Створюємо стан для відстеження ширини вікна
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   // Функція для оновлення ширини вікна при зміні розміру екрану
   const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
   };

   // Підписка на подію розміру вікна при завантаженні компонента
   useEffect(() => {
      window.addEventListener('resize', updateWindowWidth);
      return () => window.removeEventListener('resize', updateWindowWidth);
   }, []);

   // Перевірка ширини вікна
   const isMobile = windowWidth <= 991.98;

   
   const renderCustomersItems = () => {
      return (
         <div className="customers__items">
            {customerData.map((customer, index) => (
               <CustomersItem
                  key={index}
                  number={customer.number}
                  text={customer.text}
               />
            ))}
         </div>
      )
   };


   return (
      <section className="customers">
         <div className="customers__container">
            <div className="customers__body">

               <div className="customers__info">
                  <div className="customers__block">
                     <HeadingH2 title={title} />
                     <p className="customers__text">
                        Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes.
                     </p>
                  </div>

                  { isMobile && renderCustomersItems() }

                  <div className="customers__holder">
                     <span className="customers__subtitle">
                        What are you waiting? Get started right now!
                     </span>
                     <RequestButton />
                  </div>
               </div>

               {!isMobile && renderCustomersItems() }
               
            </div>
         </div>
      </section>
   );
};
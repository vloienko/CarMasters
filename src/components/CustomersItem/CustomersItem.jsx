/* eslint-disable react/prop-types */
import './CustomersItem.scss';


export const CustomersItem = ({ number, text }) => {

   return (
      <div className="customers-item">
         <span className="customers-item__number">{number}</span>
         <span className="customers-item__text">{text}</span>
      </div>
   );
};
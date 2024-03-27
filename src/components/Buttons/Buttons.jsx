/* eslint-disable react/prop-types */
import './Buttons.scss';


export const InventoryButton = ({ color }) => {
   return (
      <button className={`button-inventory ${color}`} type="button">Inventory</button>
   );
};

export const RequestButton = () => {
   return (
      <button className='button-request' type="button">Request a car</button>
   );
};

export const RequestButtonChoice = () => {
   return (
      <button className='button-request-choice' type="button">Request a suv</button>
   );
};

export const AllArticlesLink = () => {
   return (
      <a className="button-link" href="#">All articles</a>
   );
};
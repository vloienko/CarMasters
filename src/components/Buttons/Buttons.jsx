import './Buttons.scss';


export const InventoryButton = () => {
   return (
      <button className='button-inventory' type="button">Inventory</button>
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

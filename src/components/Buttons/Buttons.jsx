/* eslint-disable react/prop-types */
import './Buttons.scss';

import { useState } from 'react';


export const PurpleButton = ({ name }) => {
   return (
      <button className='purple-button' type="button">{name}</button>
   );
};

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


// CreditScoreButtons.jsx
const CreditScoreButtons = ({ onCreditChange }) => {
   const [activeButton, setActiveButton] = useState('Poor');

   const handleButtonClick = (newLoanAmount, newInterestRate, buttonName) => {
      setActiveButton(buttonName);
      onCreditChange(newLoanAmount, newInterestRate);
   };

   return (
      <div className="credit-score-buttons">
         <button
            className={`credit-score-buttons__button white ${activeButton === 'Poor' ? 'active' : ''}`}
            onClick={() => handleButtonClick(150000, 0.05, 'Poor')}
         >
            Poor
         </button>
         <button
            className={`credit-score-buttons__button white ${activeButton === 'Average' ? 'active' : ''}`}
            onClick={() => handleButtonClick(150000, 0.035, 'Average')}
         >
            Average
         </button>
         <button
            className={`credit-score-buttons__button white ${activeButton === 'Good' ? 'active' : ''}`}
            onClick={() => handleButtonClick(150000, 0.02, 'Good')}
         >
            Good
         </button>
      </div>
   );
};

export default CreditScoreButtons;
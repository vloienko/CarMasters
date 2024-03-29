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


// CreditScoreButtons.jsx
const CreditScoreButtons = ({ onCreditChange }) => {
   return (
      <div className="credit-score-buttons">
         <button className="credit-score-buttons__button white" onClick={() => onCreditChange(150000, 0.05)}>Poor</button>
         <button className="credit-score-buttons__button white" onClick={() => onCreditChange(200000, 0.035)}>Average</button>
         <button className="credit-score-buttons__button white" onClick={() => onCreditChange(250000, 0.02)}>Good</button>
      </div>
   );
};

export default CreditScoreButtons;

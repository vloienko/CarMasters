import './Calculator.scss';

import { useState, useEffect } from 'react';
import CreditScoreButtons from '../Buttons/Buttons'; // Замініть шляхом до вашого файлу


const LoanCalculator = () => {
   const [loanAmount, setLoanAmount] = useState(150000);
   const [interestRate, setInterestRate] = useState(0.05); // Початкова ставка для 'Poor'
   const [loanDuration, setLoanDuration] = useState(18);
   const [paymentSchedule, setPaymentSchedule] = useState({
      weekly: '',
      biWeekly: '',
      monthly: '',
   });

   useEffect(() => {
      calculatePayments();
   }, []); // Додаємо useEffect для виклику calculatePayments при монтуванні компоненту

   const calculatePayments = () => {
      const weeksInYear = 52;
      const monthsInYear = 12;

      const monthlyInterestRate = Math.pow(1 + interestRate, 1 / monthsInYear) - 1;
      const weeklyInterestRate = Math.pow(1 + interestRate, 1 / weeksInYear) - 1;
      const loanDurationInWeeks = loanDuration * (monthsInYear / weeksInYear);

      const monthlyPayment = Math.ceil(
         loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanDuration))
      );
      const weeklyPayment = Math.ceil(
         loanAmount * weeklyInterestRate / (1 - Math.pow(1 + weeklyInterestRate, -loanDurationInWeeks))
      );
      const biWeeklyPayment = weeklyPayment * 2;

      setPaymentSchedule({
         weekly: weeklyPayment,
         biWeekly: biWeeklyPayment,
         monthly: monthlyPayment,
      });
   };

   const handleCreditChange = (newLoanAmount, newInterestRate) => {
      setLoanAmount(newLoanAmount);
      setInterestRate(newInterestRate);
      calculatePayments(); // Викликаємо розрахунок платежів після зміни кредитного рейтингу
   };

   function formatNumber(number) {
      return number.toLocaleString('en-US', { maximumFractionDigits: 0 }).replace(/,/g, ' ');
   }

   return (
      <div className="calculator">
         <div className="calculator__choice">
            <CreditScoreButtons onCreditChange={handleCreditChange} />
            <div className="calculator__controls">
               <div className="calculator__control">
                  <label className="calculator__label">Loan Amount</label>
                  <span className="calculator__value">$ {formatNumber(loanAmount)}</span>
                  <input
                     className="calculator__slider"
                     type="range"
                     min="5000"
                     max="500000"
                     value={loanAmount}
                     onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
               </div>
               <div className="calculator__control">
                  <label className="calculator__label">Loan Duration</label>
                  <span className="calculator__value">{loanDuration} <span className="small">month</span></span>
                  <input
                     className="calculator__slider"
                     type="range"
                     min="1"
                     max="60"
                     value={loanDuration}
                     onChange={(e) => setLoanDuration(Number(e.target.value))}
                  />
               </div>
            </div>
         </div>
         <div className="calculator__result">
            <div className="calculator__payment-wrap">
               <div className="calculator__payment">
                  <label>Bi-Weekly Payment:</label>
                  <span className="purple">$ {formatNumber(paymentSchedule.biWeekly)}</span>
               </div>
               <div className="calculator__payment-block">
                  <div className="calculator__payment">
                     <label>Monthly Payment:</label>
                     <span>$ {formatNumber(paymentSchedule.monthly)}</span>
                  </div>
                  <div className="calculator__payment">
                     <label>Weekly Payment:</label>
                     <span>$ {formatNumber(paymentSchedule.weekly)}</span>
                  </div>
               </div>
            </div>
            <button className="calculator__button button-request" onClick={calculatePayments}>
               Request a car
            </button>
         </div>
      </div>
   );
};

export default LoanCalculator;
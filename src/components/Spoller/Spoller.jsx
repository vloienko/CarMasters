/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import './Spoller.scss';


export const Spoller = ({ title, text }) => {
   return (
      <details className="spoller">
         <summary className="spoller__title">{title}</summary>
         <div className="spoller__body">
            <p className="spoller__text">
               {text}
            </p>
         </div>
      </details>
   );
}
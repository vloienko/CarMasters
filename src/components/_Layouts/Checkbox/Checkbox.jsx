/* eslint-disable react/prop-types */
import './Checkbox.scss';


export const Checkbox = ({ isChecked, onChange, icon, type }) => {
   return (
      <label className="checkbox">
         <input
            type="checkbox"
            className="checkbox__element"
            checked={isChecked}
            onChange={() => onChange((prev) => !prev)}
         />
         <div className="checkbox__custom"></div>
         <div className="checkbox__content">
            <img src={icon} alt="Car type" />
            <span>{type}</span>
         </div>
      </label>
   );
}


export const CheckboxEmpty = ({ isChecked, onChange, type }) => {
   return (
      <label className="checkbox">
         <input
            type="checkbox"
            className="checkbox__element"
            checked={isChecked}
            onChange={() => onChange((prev) => !prev)}
         />
         <div className="checkbox__custom"></div>
         <div className="checkbox__content">
            {type}
         </div>
      </label>
   );
}
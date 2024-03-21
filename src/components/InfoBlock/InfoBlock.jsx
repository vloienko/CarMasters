/* eslint-disable react/prop-types */
import './InfoBlock.scss';

import { InventoryButton } from '../Buttons/Buttons';


export const InfoBlock = ({ title, text }) => {

   const color = "purple";

   return (
      <div className="info-block">
         <h2 className="info-block__title">{title}</h2>
         <p className="info-block__text">
            {text}
         </p>
         <InventoryButton color={color} />
      </div>
   );
};
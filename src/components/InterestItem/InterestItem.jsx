/* eslint-disable react/prop-types */
import './InterestItem.scss';

import { Heading4, TextSecondary16 } from '../_Items/Items';


export const InterestItem = ({ icon, title, text }) => {
   return (
      <div className="interest-item">
         <div className="interest-item__box">
            <img src={icon} alt="Image icon" />
            <Heading4 title={title} />
         </div>
         <TextSecondary16 text={text} />
      </div>
   );
}
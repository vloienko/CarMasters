/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import './Spollers.scss';

import { Spoller } from '../Spoller/Spoller';


export const Spollers = ({ data }) => {

   return (
      <div className="spollers">
         <div className="spollers__container">
            <div className="spollers__body">
               {data.map((spoller, index) => (
                  <Spoller key={index}
                     title={spoller.title}
                     text={spoller.text}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

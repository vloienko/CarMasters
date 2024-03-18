/* eslint-disable react/prop-types */

import './EasyStep.scss';

import { Icon } from '../Icon/Icon';


export const EasyStep = ({ number, title, text }) => {
   return (
      <div className="easy-step">
         <div className="easy-step__triangle">
            <Icon id='triangle' className='svg-triangle' />
            <span>{number}</span>
         </div>
         <div className="easy-step__info">
            <span className="easy-step__title">{title}</span>
            <p className="easy-step__text">{text}</p>
         </div>
      </div>
   );
};
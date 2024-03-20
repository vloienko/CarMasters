/* eslint-disable react/prop-types */

import './TriangleBlock.scss';

import { Icon } from '../Icon/Icon';


export const TriangleBlock = ({ icon, title, text }) => {
   return (
      <div className="triangle-block-wrap">
         <div className="triangle-block">
            <Icon id='triangle-big' className='triangle-block__main svg-triangle-big' />
            <div className="triangle-block__info">
               <Icon id={icon} className='svg-triangle-icon' />
               <span className="triangle-block__title">{title}</span>
               <p className="triangle-block__text">
                  {text}
               </p>
            </div>
         </div>
      </div>
   );
};
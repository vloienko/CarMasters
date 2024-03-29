/* eslint-disable react/prop-types */
import Icons from '../../assets/images/icons/icons.svg';


export const Icon = ({ id, className }) => {
   return (
      <svg className={className}>
         <use xlinkHref={`${Icons}#${id}`} />
      </svg>
   );
};
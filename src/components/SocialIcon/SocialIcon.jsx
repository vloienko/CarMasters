import './SocialIcon.scss';

import { Icon } from '../Icon/Icon';


export const SocialIcon = () => {
   return (
      <ul className="social-icon">
         <li>
            <a className="social-icon__link" href="#">
               <Icon id='instagram' className='svg-instagram' />
            </a>
         </li>
         <li>
            <a className="social-icon__link" href="#">
               <Icon id='facebook' className='svg-facebook' />
            </a>
         </li>
         <li>
            <a className="social-icon__link" href="#">
               <Icon id='youtube' className='svg-youtube' />
            </a>
         </li>
      </ul>
   );
};
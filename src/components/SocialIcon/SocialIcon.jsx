import './SocialIcon.scss';
import { Icon } from '../Icon/Icon';


// масив для зберігання даних іконок
const socialIcons = [
   { id: 'instagram', className: 'svg-instagram' },
   { id: 'facebook', className: 'svg-facebook' },
   { id: 'youtube', className: 'svg-youtube' }
];


// використання методу map
export const SocialIcon = () => {
   return (
      <ul className="social-icon">
         {socialIcons.map(icon => (
            <li key={icon.id}>
               <a className="social-icon__link" href="#">
                  <Icon id={icon.id} className={icon.className} />
               </a>
            </li>
         ))}
      </ul>
   );
};
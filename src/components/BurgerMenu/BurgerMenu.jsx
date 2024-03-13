import './BurgerMenu.scss';

import { Icon } from '../Icon/Icon';


export const BurgerMenu = () => {
   return (
      <div className="header__menu menu">
         <button type="button" className="menu__icon icon-menu">
            <Icon id='burger-menu' className='svg-burger-menu' />
         </button>
         <nav className="menu__body">
            <ul className="menu__list">
               <li className="menu__item"><a href="" className="menu__link"></a></li>
            </ul>
         </nav>
      </div>
   );
};
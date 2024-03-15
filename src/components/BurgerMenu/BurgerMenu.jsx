import './BurgerMenu.scss';

import Menu from '../Menu/Menu';
import { useState } from 'react';


export const BurgerMenu = () => {

   const [menuActive, setMenuActive] = useState(false);

   return (
      <div className="burger-menu">
         <button
            type="button"
            className={menuActive ? 'icon-menu active' : 'icon-menu'}
            onClick={() => setMenuActive(!menuActive)}>
            <span></span>
         </button>

         <div className={ menuActive ? 'bg-opacity active' : 'bg-opacity' }>
            <nav className={ menuActive ? 'navigation active' : 'navigation' }>
               <Menu />
            </nav>
         </div>
      </div>
   );
};
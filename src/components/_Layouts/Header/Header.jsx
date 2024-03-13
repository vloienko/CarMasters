// React
// eslint-disable-next-line no-unused-vars
import React from 'react';

import Logo from '../../Logo/Logo';
import { InventoryButton, RequestButton } from '../../Buttons/Buttons';
import { BurgerMenu } from '../../BurgerMenu/BurgerMenu';


// Import
import "./Header.scss";


function Header() {

   return (
      <header className="header">
         <div className="header__container">
            <div className="header__body">
               <Logo/>

               <div className="header__block">
                  <div className="header__button-box">
                     <InventoryButton/>
                     <RequestButton/>
                  </div>
                  
                  <BurgerMenu/>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;
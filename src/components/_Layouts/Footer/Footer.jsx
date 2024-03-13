// React
// eslint-disable-next-line no-unused-vars
import React from 'react';


// Import
import "./Footer.scss";
import { SocialIcon } from '../../SocialIcon/SocialIcon';
import Logo from '../../Logo/Logo';
import { Rules } from '../../Rules/Rules';


function Footer() {

   return (
      <footer className="footer">
         <div className="footer__container">
            <div className="footer__body">
               <div className="footer__main">
                  <Logo />
                  <Rules />
               </div>
               <SocialIcon />
               <span className="footer__copyright-title">Created by</span>
               <p className="footer__copyright">©Copyright, 2020. Car Masters</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer;
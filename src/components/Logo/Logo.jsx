import './Logo.scss';

import logo from '../../assets/images/logo.svg';


function Logo() {

   return (
      <a className="logo" href="#">
         <img src={logo} alt="Logo" />
         <span>CarMasters</span>
      </a>
   )
}

export default Logo;
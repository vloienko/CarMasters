import './Logo.scss';


import { Icon } from '../Icon/Icon';


function Logo() {

   return (
      <a className="logo" href="#">
         <div className="logo__image">
            <Icon id='logo' className='svg-logo' />
            <Icon id='logo' className='svg-logo' />
         </div>
         <span className='pc'>CarMasters</span>
         <span className='mobile'>CM</span>
      </a>
   )
}

export default Logo;
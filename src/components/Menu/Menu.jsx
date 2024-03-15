import './Menu.scss';
import { SocialIcon } from '../SocialIcon/SocialIcon';

const Menu = () => {

   const items = [
      { id: 1, value: 'Contact us', href: '/CarMasters/contact-us' },
      { id: 2, value: 'About CM', href: '/' },
      { id: 3, value: 'Loan Rates', href: '/' },
      { id: 4, value: 'Video', href: '/' },
      { id: 5, value: 'Blog', href: '/' },
      { id: 6, value: 'Calculate', href: '/' }
   ]

   return (
      <div className="menu">
         <div className="menu__content">
            <ul className="menu__list">
               {items.map(item =>
                  <li key={item.id}>
                     <a href={item.href}>{item.value}</a>
                  </li>
               )}
            </ul>

            <SocialIcon/>
         </div>
      </div>
   );
}

export default Menu;

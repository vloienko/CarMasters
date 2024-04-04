import { BgTitle } from '../components/BgTitle/BgTitle';
import { MainContent } from '../components/_Sections/MainContent/MainContent';

import kia from '../assets/images/all-cars/kia.png';


export function About() {
   const title = 'About CM ';

   const mainData = {
      title: 'Our mission',
      text: 'Our mission at CM is to help you find the perfect car at the perfect price and with the perfect auto loan. We make buying a car simple. You can complete the entire process from home—we’ll even deliver the car to you!',
      image: kia
   };

   return (
      <>
         <BgTitle title={title} />
         <MainContent data={mainData} />
      </>
   );
}
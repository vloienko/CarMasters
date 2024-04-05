import kia from '../assets/images/all-cars/kia.png';

import { BgTitle } from '../components/BgTitle/BgTitle';
import { MainContent } from '../components/_Sections/MainContent/MainContent';
import { GetCar } from '../components/_Sections/GetCar/GetCar';
import { Convenience } from '../components/_Sections/Convenience/Convenience';
import { OurQualified } from '../components/_Sections/OurQualified/OurQualified';
import { BestPrices } from '../components/_Sections/BestPrices/BestPrices';
import { ClientSay } from '../components/_Sections/ClientSay/ClientSay';
import { DynamicTeam } from '../components/_Sections/DynamicTeam/DynamicTeam';
import { MainFeatures } from '../components/_Sections/MainFeatures/MainFeatures';
import { HowMuch } from '../components/_Sections/HowMuch/HowMuch';


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
         <GetCar />
         <Convenience />
         <BestPrices />
         <OurQualified />
         <ClientSay />
         <DynamicTeam />
         <MainFeatures />
         <HowMuch className={'section about'} />
      </>
   );
}
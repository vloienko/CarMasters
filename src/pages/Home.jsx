import { Advantages } from '../components/_Sections/Advantages/Advantages';
import { ClientSay } from '../components/_Sections/ClientSay/ClientSay';
import { Customers } from '../components/_Sections/Customers/Customers';
import { HowWork } from '../components/_Sections/HowWork/HowWork';
import { InterestingArticles } from '../components/_Sections/InterestingArticles/InterestingArticles';
import { MainMap } from '../components/_Sections/MainMap/MainMap';
import { PerfectCar } from '../components/_Sections/PerfectCar/PerfectCar';
import { YourDream } from '../components/_Sections/YourDream/YourDream';


export function Home() {
   return (
      <>
         <MainMap />
         <HowWork />
         <PerfectCar />
         <Advantages />
         <YourDream />
         <Customers />
         <ClientSay />
         
         <InterestingArticles />
      </>
   );
}
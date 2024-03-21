import { Advantages } from '../components/Sections/Advantages/Advantages';
import { HowWork } from '../components/Sections/HowWork/HowWork';
import { MainMap } from '../components/Sections/MainMap/MainMap';
import { PerfectCar } from '../components/Sections/PerfectCar/PerfectCar';
import { YourDream } from '../components/Sections/YourDream/YourDream';


export function Home() {
   return (
      <>
         <MainMap />
         <HowWork />
         <PerfectCar />
         <Advantages />
         <YourDream />
      </>
   );
}
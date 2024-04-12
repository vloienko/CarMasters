/* eslint-disable no-undef */
import { BgTitle } from '../components/BgTitle/BgTitle';
import { AllVideos } from '../components/_Sections/AllVideos/AllVideos';


export function VehicleVideos() {
   const title = 'Vehicle videos';
   
   return (
      <>
         <BgTitle title={title} />
         <AllVideos />
      </>
   );
}
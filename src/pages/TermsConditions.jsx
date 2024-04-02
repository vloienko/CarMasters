import { BgTitle } from '../components/BgTitle/BgTitle';
import { Spollers } from '../components/Spollers/Spollers';


export function TermsConditions() {
   const title = 'Terms & Conditions';

   return (
      <>
         <BgTitle title={title} />
         <Spollers />
      </>
   );
}
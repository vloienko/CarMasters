import { BgTitle } from '../components/BgTitle/BgTitle';
import { HowMuch } from '../components/_Sections/HowMuch/HowMuch';


export function Calculator() {
   const title = 'Use our free calculator!'

   return (
      <>
         <BgTitle title={title} />
         <HowMuch className={'distance'} />
      </>
   );
}
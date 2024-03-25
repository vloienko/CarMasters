import './ClientSay.scss';

import { HeadingH2 } from '../../_Items/Items';
import { SliderWithButtons } from '../../Sliders/SliderWithButtons/SliderWithButtons';


export const ClientSay = () => {

   const title = 'What our client say about us!';

   return (
      <section className="client-say">
         <div className="client-say__container">
            <HeadingH2 title={title} />
            <SliderWithButtons />
         </div>
      </section>
   );
}
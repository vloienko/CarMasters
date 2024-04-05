import './OurQualified.scss';

import { PurpleButton } from '../../Buttons/Buttons';
import { HeadingH2, HeadingH3, TextSecondary16 } from '../../_Items/Items';


export const OurQualified = () => {
   const title = 'Our qualified agents';

   const paragraphFirst = 'The true secret to success of CM isn’t our streamlined purchasing and financing processes. The real reason CM is the easiest and best way to buy a car in Canada is because of our outstanding Qualified Agents.';
   const paragraphSecond = 'Our team provides you with the best customer experience in the automotive industry. You work with a dedicated representative throughout the process. They are able to answer any questions you have about any of our vehicles or the financing. Are you interested in seeing pictures or videos of a car? Your qualified agent will send them to you.';

   const subTitle = 'Contact us today and speak with one of our qualified agents';


   return (
      <section className="our-qualified">
         <div className="our-qualified__container">
            <div className="our-qualified__body">
               <div className="our-qualified__info">
                  <HeadingH2 title={title} />
                  <TextSecondary16 text={paragraphFirst} />
                  <TextSecondary16 text={paragraphSecond} />
               </div>
               <div className="our-qualified__block">
                  <HeadingH3 title={subTitle} />
                  <PurpleButton name={'Contact Us Now'} />
               </div>
            </div>
         </div>
      </section>
   );
}
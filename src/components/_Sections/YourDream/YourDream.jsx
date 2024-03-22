import './YourDream.scss';

import { InfoBlock } from '../../InfoBlock/InfoBlock';

import twoCars from '../../../assets/images/cars-group.png';


export const YourDream = () => {

   const title = "Сhoose your dream vehicle in our catalog";
   const text = "In our catalogue there are many models of vehicles. Choose your car to your liking.";

   return (
      <section className="your-dream">
         <div className="your-dream__container">
            <div className="your-dream__body">
               <div className="your-dream__image">
                  <img src={twoCars} alt="Image two cars" />
               </div>
               <InfoBlock title={title} text={text} />
            </div>
         </div>
      </section>
   );
};
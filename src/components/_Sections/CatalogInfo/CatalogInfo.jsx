import './CatalogInfo.scss';

import { Sidebar } from '../../Sidebar/Sidebar';
import { AllCars } from '../AllCars/AllCars';


export function CatalogInfo() {

   return (
      <div className="catalog-info">
         <div className="catalog-info__container">
            <Sidebar />

            <div className="catalog-info__right">
               <AllCars />

            </div>
         </div>
      </div>
   );
}

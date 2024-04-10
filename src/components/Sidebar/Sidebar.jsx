import './Sidebar.scss';

import { Dropdown } from '../_Layouts/DropdownLists/DropdownLists';


const options = [
   { value: 1, label: 'Porsche' },
   { value: 2, label: 'Mercedes-Benz' },
   { value: 3, label: 'Mitsubishi' },
   { value: 4, label: 'Audi' },
   { value: 5, label: 'Toyota' },
];


export const Sidebar = () => {
   return (
      <aside className="sidebar">
         <h2 className="sidebar__title">Detailed search</h2>
         <div className="sidebar__spollers">
            <details className="sidebar__spoller">
               <summary className="sidebar__spoller-label">Make, Model</summary>
               <div className="sidebar__spoller-body">
                  <Dropdown options={options} />

               </div>
            </details>
            <details className="sidebar__spoller">
               <summary className="sidebar__spoller-label">Body type</summary>
               <div className="sidebar__spoller-body">

               </div>
            </details>
            <details className="sidebar__spoller">
               <summary className="sidebar__spoller-label">Transmission</summary>
               <div className="sidebar__spoller-body">

               </div>
            </details>
            <details className="sidebar__spoller">
               <summary className="sidebar__spoller-label">Price</summary>
               <div className="sidebar__spoller-body">

               </div>
            </details>
            <details className="sidebar__spoller">
               <summary className="sidebar__spoller-label">Year</summary>
               <div className="sidebar__spoller-body">

               </div>
            </details>
            <details className="sidebar__spoller">
               <summary className="sidebar__spoller-label">Kilometres</summary>
               <div className="sidebar__spoller-body">

               </div>
            </details>

         </div>
      </aside>
   );
}
/* eslint-disable no-undef */
import './Sidebar.scss';

import { SidebarSpoller } from '../SidebarSpoller/SidebarSpoller';
import { DropdownWrapMake, DropdownWrapModel } from '../DropdownWrap/DropdownWrap';
import { CheckboxData, CheckboxDataTransmission } from '../CheckboxData/CheckboxData';


export const Sidebar = () => {

   return (
      <aside className="sidebar">
         <h2 className="sidebar__title">Detailed search</h2>
         <div className="sidebar__spollers">
            <SidebarSpoller
               title={'Make, Model'}
               bodyComponent={
                  <>
                     <DropdownWrapMake />
                     <DropdownWrapModel />
                  </> 
               }
            />
            <SidebarSpoller
               title={'Body type'}
               bodyComponent={<CheckboxData />}
            />
            <SidebarSpoller
               title={'Transmission'}
               bodyComponent={<CheckboxDataTransmission />}
            />
            <SidebarSpoller
               title={'Price'}
               bodyComponent={''}
            />
            <SidebarSpoller
               title={'Year'}
               bodyComponent={''}
            />
            <SidebarSpoller
               title={'Kilometres'}
               bodyComponent={''}
            />
         </div>
      </aside>
   );
}
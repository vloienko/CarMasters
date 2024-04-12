/* eslint-disable react/prop-types */
import './SidebarSpoller.scss';


export const SidebarSpoller = ({ title, bodyComponent }) => {
   return (
      <details className="sidebar-spoller">
         <summary className="sidebar-spoller__label">{title}</summary>
         <div className="sidebar-spoller__body">
            {bodyComponent}
         </div>
      </details>
   );
}
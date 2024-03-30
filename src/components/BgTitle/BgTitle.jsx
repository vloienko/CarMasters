/* eslint-disable react/prop-types */
import './BgTitle.scss';


export const BgTitle = ({ title }) => {
   return (
      <div className="bg-title">
         <div className="bg-title__container">
            <h1 className="bg-title__title">{title}</h1>
         </div>
      </div>
   );
}
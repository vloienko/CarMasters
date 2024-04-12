/* eslint-disable react/prop-types */
import './Preloader.scss';

import ClipLoader from "react-spinners/ClipLoader";


export const Preloader = ({ loading, children }) => {
   return (
      <div className="preloader">
         {loading ? (
            <ClipLoader
               color={'#7481FF'}
               loading={loading}
               size={150}
               aria-label="Loading Spinner"
               data-testid="loader"
            />
         ) : (
            children
         )}
      </div>
   );
}
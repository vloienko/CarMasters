/* eslint-disable react/prop-types */
import './Pagination.scss';


export const Pagination = ({ itemsData, itemsPerPage, handleClick, currentPage }) => {
   return (
      <div className="pagination">
         {Array.from({ length: Math.ceil(itemsData.length / itemsPerPage) }, (_, i) => (
            <button key={i} onClick={() => handleClick(i + 1)} className={currentPage === i + 1 ? 'active' : ''} />
         ))}
      </div>
   );
}
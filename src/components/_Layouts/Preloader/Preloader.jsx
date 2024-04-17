/* eslint-disable react/prop-types */
import './Preloader.scss';

import { useRef, useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";


export const Preloader = ({ loading, children }) => {

   const contentRef = useRef(null);
   const [minHeight, setMinHeight] = useState(0);

   useEffect(() => {
      // Встановлення мінімальної висоти при ініціалізації
      if (contentRef.current) {
         setMinHeight(contentRef.current.offsetHeight);
      }
   }, [children]); // Викликається, коли контент оновлюється

   useEffect(() => {
      // Плавний скрол до контенту після завантаження
      if (!loading && contentRef.current) {
         const yOffset = - (80 + 200); // висота фіксованої шапки
         const y = contentRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

         window.scrollTo({ top: y, behavior: 'smooth' });
      }
   }, [loading]); // Викликається при зміні стану loading


   return (
      <div className="preloader" style={{ minHeight: loading ? minHeight : 'auto' }}>
         {loading ? (
            <ClipLoader
               color={'#7481FF'}
               loading={loading}
               size={150}
               aria-label="Loading Spinner"
               data-testid="loader"
            />
         ) : (
            <div ref={contentRef} style={{ alignSelf: 'flex-start' }}>
               {children}
            </div>
         )}
      </div>
   );
}
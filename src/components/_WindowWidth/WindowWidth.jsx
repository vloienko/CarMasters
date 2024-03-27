import { useState, useEffect } from 'react';


const useWindowWidth = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
   };

   useEffect(() => {
      window.addEventListener('resize', updateWindowWidth);
      return () => window.removeEventListener('resize', updateWindowWidth);
   }, []);

   return windowWidth;
};

const useIsMobile = (maxWidth) => {
   const windowWidth = useWindowWidth();
   return windowWidth <= maxWidth;
};

export default useIsMobile;
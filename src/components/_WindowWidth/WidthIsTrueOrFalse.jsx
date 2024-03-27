/* eslint-disable react/prop-types */
import useIsMobile from './WindowWidth';


export const MobileIsTrue = ({ nameFunction }) => {
   const isMobile = useIsMobile(767.98);

   return (
      <>
         {isMobile && nameFunction()}
      </>
   );
};
export const MobileIsFalse = ({ nameFunction }) => {
   const isMobile = useIsMobile(767.98);

   return (
      <>
         {!isMobile && nameFunction()}
      </>
   );
};


export const MobileCustomIsTrue = ({ nameFunction }) => {
   const isMobile = useIsMobile(639.98);

   return (
      <>
         {isMobile && nameFunction()}
      </>
   );
};
export const MobileCustomIsFalse = ({ nameFunction }) => {
   const isMobile = useIsMobile(639.98);

   return (
      <>
         {!isMobile && nameFunction()}
      </>
   );
};


export const MobileSmallIsTrue = ({ nameFunction }) => {
   const isMobile = useIsMobile(479.98);

   return (
      <>
         {isMobile && nameFunction()}
      </>
   );
};
export const MobileSmallIsFalse = ({ nameFunction }) => {
   const isMobile = useIsMobile(479.98);

   return (
      <>
         {!isMobile && nameFunction()}
      </>
   );
};

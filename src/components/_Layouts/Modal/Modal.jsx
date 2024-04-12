/* eslint-disable react/prop-types */
import './Modal.scss';

import { useEffect } from 'react';


export const Modal = ({ children, isOpen, onClose }) => {

   useEffect(() => {
      const handleKeyDown = (event) => {
         if (event.key === 'Escape') {
            onClose();
         }
      };

      // Блокування скролу при відкритому модальному вікні
      if (isOpen) {
         document.body.style.overflow = 'hidden';
         window.addEventListener('keydown', handleKeyDown);
      } else {
         document.body.style.overflow = 'unset';
      }

      // Очищення стилів та обробників подій при закритті
      return () => {
         document.body.style.overflow = 'unset';
         window.removeEventListener('keydown', handleKeyDown);
      };
   }, [isOpen, onClose]);

   if (!isOpen) return null;


   return (
      <div className="modal" onClick={onClose}>
         {children}
      </div>
   );
};
/* eslint-disable react/prop-types */
import './CardVideo.scss';

import { useState } from 'react';

import { Modal } from '../_Layouts/Modal/Modal';

import play from '@images/icons/play.svg';


export const CardVideo = ({ videoId, thumbnail, alt, title }) => {
   
   const [isOpen, setIsOpen] = useState(false);

   const handleClose = () => {
      setIsOpen(false);
   };

   const src = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1&mute=1`;


   return (
      <>
         <div className="card-video">
            <div className="video" onClick={() => setIsOpen(true)}>
               <img src={thumbnail} alt={alt} className="video__preview" />
               <button className="video__play-btn" aria-label="Play video">
                  <img src={play} alt="Play video" />
               </button>
            </div>
            <h4 className="card-video__title">{title}</h4>
         </div>
        
         <Modal isOpen={isOpen} onClose={handleClose}>
            <iframe
               src={src}
               frameBorder="0"
               allow="autoplay; encrypted-media"
               allowFullScreen
            ></iframe>
         </Modal>
      </>
   );
};
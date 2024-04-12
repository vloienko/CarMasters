/* eslint-disable react/prop-types */
import './CardVideo.scss';

import { useState, useEffect } from 'react';


// export const CardVideo = () => {
//    return (
//       <div className="card-video">

//       </div>
//    );
// }


// Модальне вікно для відео
const VideoModal = ({ id, onClose }) => {
   useEffect(() => {
      const handleKeyDown = (event) => {
         if (event.key === 'Escape') {
            onClose();
         }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
         window.removeEventListener('keydown', handleKeyDown);
      };
   }, [onClose]); // Цей ефект завжди викликається, незалежно від умов

   // Раннє повернення null, якщо id не існує, повинно йти після виклику хуків
   if (!id) return null;

   const src = `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1&mute=1`;

   return (
      <div className="modal" onClick={onClose}>
         <iframe
            width="560"
            height="315"
            src={src}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
         ></iframe>
      </div>
   );
};

const Video = ({ videoId, thumbnail, alt }) => {
   const [showModal, setShowModal] = useState(false);

   const handleClick = () => {
      setShowModal(true);
   };

   const handleCloseModal = () => {
      setShowModal(false);
   };

   return (
      <>
         <div className="video" onClick={handleClick}>
            <img src={thumbnail} alt={alt} className="video__img video__bg" />
            <button className="video-guide__button video__button" aria-label="Play">
               {/* SVG або іконка тут */}
               Кнопка
            </button>
         </div>
         {showModal && <VideoModal id={videoId} onClose={handleCloseModal} />}
      </>
   );
};

export const App = () => {
   // Приклад використання компоненти Video з hard-coded даними
   // Можна динамічно отримувати ці дані, наприклад, з API або стейта вашого додатку
   return (
      <div className="app">
         <Video
            videoId="2bCOaXFJhjw"
            thumbnail="https://i.ytimg.com/vi/2bCOaXFJhjw/maxresdefault.jpg"
            alt="Опис відео"
         />
      </div>
   );
};

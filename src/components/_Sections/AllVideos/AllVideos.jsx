import './AllVideos.scss';

import { useState } from 'react';

import { CardVideo } from '../../CardVideo/CardVideo';
import { Pagination } from '../../_Layouts/Pagination/Pagination';

import preview_1 from '@images/video-preview/preview-1.jpg';
import preview_2 from '@images/video-preview/preview-2.jpg';
import preview_3 from '@images/video-preview/preview-3.jpg';
import preview_4 from '@images/video-preview/preview-4.jpg';


const videosData = [
   {
      videoId: "nT2mjvWC3e8",
      thumbnail: preview_1,
      alt: "Car video",
      title: "CM's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback"
   },
   {
      videoId: "nT2mjvWC3e8",
      thumbnail: preview_2,
      alt: "Car video",
      title: "CM's Vehicle Shoot #11: Toyota Highlander"
   },
   {
      videoId: "nT2mjvWC3e8",
      thumbnail: preview_3,
      alt: "Car video",
      title: "CM's Vehicle Shoot #09: 2019 Mazda CX-5"
   },
   {
      videoId: "nT2mjvWC3e8",
      thumbnail: preview_4,
      alt: "Car video",
      title: "Some Vehicles CM Offers!"
   },

   {
      videoId: "nT2mjvWC3e8",
      thumbnail: "https://i.ytimg.com/vi/nT2mjvWC3e8/maxresdefault.jpg",
      alt: "Car video",
      title: "CM's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback"
   },
   {
      videoId: "nT2mjvWC3e8",
      thumbnail: "https://i.ytimg.com/vi/RDknro9TCEQ/maxresdefault.jpg",
      alt: "Car video",
      title: "CM's Vehicle Shoot #11: Toyota Highlander"
   },
   {
      videoId: "nT2mjvWC3e8",
      thumbnail: "https://i.ytimg.com/vi/RDknro9TCEQ/maxresdefault.jpg",
      alt: "Car video",
      title: "CM's Vehicle Shoot #09: 2019 Mazda CX-5"
   },
   {
      videoId: "nT2mjvWC3e8",
      thumbnail: "https://i.ytimg.com/vi/nT2mjvWC3e8/maxresdefault.jpg",
      alt: "Car video",
      title: "Some Vehicles CM Offers!"
   },

   {
      videoId: "nT2mjvWC3e8",
      thumbnail: "https://i.ytimg.com/vi/q3LE8cl0IwE/maxresdefault.jpg",
      alt: "Car video",
      title: "CM's Vehicle Shoot #09: 2019 Mazda CX-5"
   },
   {
      videoId: "nT2mjvWC3e8",
      thumbnail: "https://i.ytimg.com/vi/35FriPVFftw/maxresdefault.jpg",
      alt: "Car video",
      title: "Some Vehicles CM Offers!"
   }
];


export const AllVideos = () => {
   const videosPerPage = 4; // Кількість відео на сторінці
   const [currentPage, setCurrentPage] = useState(1);

   // Обрахування даних для поточної сторінки
   const indexOfLastArticle = currentPage * videosPerPage;
   const indexOfFirstArticle = indexOfLastArticle - videosPerPage;
   const currentVideos = videosData.slice(indexOfFirstArticle, indexOfLastArticle);

   const handleClick = (page) => {
      setCurrentPage(page);
   };

   return (
      <div className="all-videos">
         <div className="all-videos__container">
            <div className="all-videos__body">
               {currentVideos.map((video, index) => (
                  <CardVideo
                     key={index}
                     videoId={video.videoId}
                     thumbnail={video.thumbnail}
                     alt={video.alt}
                     title={video.title}
                  />
               ))}
            </div>

            <Pagination
               itemsData={videosData}
               itemsPerPage={videosPerPage}
               handleClick={handleClick}
               currentPage={currentPage}
            />
         </div>
      </div>
   );
}
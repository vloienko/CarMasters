import './BlogContent.scss';

import { Article } from '../../Article/Article';
import { useState, useEffect } from 'react';

import image_1 from '@images/article-preview/image-1.jpg';
import image_2 from '@images/article-preview/image-2.jpg';
import image_3 from '@images/article-preview/image-3.jpg';
import image_4 from '@images/article-preview/image-4.jpg';
import image_5 from '@images/article-preview/image-5.jpg';
import image_6 from '@images/article-preview/image-6.jpg';
import image_7 from '@images/article-preview/image-7.jpg';
import image_8 from '@images/article-preview/image-8.jpg';
import image_9 from '@images/article-preview/image-9.jpg';


const articlesData = [
   { image: image_1, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },
   { image: image_2, date: '10 May, 2020', title: 'How fast can you order a car in Canada?' },
   { image: image_3, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },

   { image: image_4, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },
   { image: image_5, date: '10 May, 2020', title: 'How fast can you order a car in Canada?' },
   { image: image_6, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },

   { image: image_7, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },
   { image: image_8, date: '10 May, 2020', title: 'How fast can you order a car in Canada?' },
   { image: image_9, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },

   // 2га сторінка
   { image: image_7, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },
   { image: image_8, date: '10 May, 2020', title: 'How fast can you order a car in Canada?' },
   { image: image_9, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },
   { image: image_4, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },
   { image: image_5, date: '10 May, 2020', title: 'How fast can you order a car in Canada?' },
   { image: image_6, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },
   { image: image_1, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },
   { image: image_2, date: '10 May, 2020', title: 'How fast can you order a car in Canada?' },
   { image: image_3, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },

   // 3тя сторінка
   { image: image_4, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },
   { image: image_5, date: '10 May, 2020', title: 'How fast can you order a car in Canada?' },
   { image: image_6, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },
   { image: image_1, date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us' },
];


export const BlogContent = () => {
   const [articlesPerPage, setArticlesPerPage] = useState(9); // Default value

   useEffect(() => {
      function handleResize() {
         if (window.innerWidth <= 991.98 && window.innerWidth > 639.98) {
            setArticlesPerPage(8);
         } else if (window.innerWidth <= 639.98) {
            setArticlesPerPage(6);
         } else {
            setArticlesPerPage(9);
         }
      }

      // Додавання обробника подій для визначення змін розміру вікна
      window.addEventListener('resize', handleResize);

      // Виклик функції обробки для встановлення початкового значення
      handleResize();

      // Видалення обробника подій при розмонтуванні компонента
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const [currentPage, setCurrentPage] = useState(1);

   const handleClick = (page) => {
      setCurrentPage(page);
   };

   const indexOfLastArticle = currentPage * articlesPerPage;
   const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
   const currentArticles = articlesData.slice(indexOfFirstArticle, indexOfLastArticle);


   return (
      <div className="blog-content">
         <div className="blog-content__container">
            <div className="blog-content__body">
               {currentArticles.map((article, index) => (
                  <Article key={index}
                     date={article.date}
                     title={article.title}
                     image={article.image}
                  />
               ))}
            </div>
            {/* Пагінація */}
            <div className="pagination">
               {Array.from({ length: Math.ceil(articlesData.length / articlesPerPage) }, (_, i) => (
                  <button key={i} onClick={() => handleClick(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
                     {i + 1}
                  </button>
               ))}
            </div>
         </div>
      </div>
   );
};
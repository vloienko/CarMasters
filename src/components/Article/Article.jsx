/* eslint-disable react/prop-types */
import './Article.scss';


export const Article = ({ image, date, title }) => {

   return (
      <article className="article">
         <a className="article__link" href="#">
            <div className="article__image">
               <img src={image} alt="Article image" />
            </div>
            <div className="article__info">
               <span className="article__date">{date}</span>
               <h6 className="article__title">{title}</h6>
            </div>
         </a>
      </article> 
   );
}
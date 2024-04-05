/* eslint-disable react/prop-types */
import './Items.scss';


export const HeadingH2 = ({ title }) => {

   return (
      <h2 className="heading-h2">{title}</h2>
   );
};


export const HeadingH3 = ({ title }) => {

   return (
      <h3 className="heading-h3">{title}</h3>
   );
};

export const Heading4 = ({ title }) => {

   return (
      <h4 className="heading-h4">{title}</h4>
   );
};


export const TextSecondary16 = ({ text }) => {

   return (
      <p className="text-secondary">{text}</p>
   );
};
import './AllCars.scss';

import { useState, useEffect } from 'react';

import { CardCar } from '../../CardCar/CardCar';
import { Pagination } from '../../_Layouts/Pagination/Pagination';


// Porsche
import porsche_1 from '@images/catalog-car/porsche.jpg';
import porsche_2 from '@images/catalog-car/porsche.jpg';
import porsche_3 from '@images/catalog-car/porsche.jpg';
import porsche_4 from '@images/catalog-car/porsche.jpg';

// Mitsubishi
import mitsubishi_1 from '@images/catalog-car/mitsubishi.jpg';

// Mercedes CLA
import mercedes_cla_1 from '@images/catalog-car/mercedes-cla.jpg';

// Mercedes W124
import mercedes_w124_1 from '@images/catalog-car/mercedes-w.jpg';

// Mercedes E-Class
import mercedes_e_1 from '@images/catalog-car/mercedes-e-class.jpg';

// Audi A7
import audi_a7 from '@images/catalog-car/audi-a7.jpg';


const carsData = [
   // Porsche
   {
      images: [porsche_1, porsche_2, porsche_3, porsche_4],
      title: 'Porsche Panamera II Turbo S E-Hybrid',
      price: 150000,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },
   // Mitsubishi
   {
      images: [mitsubishi_1, mitsubishi_1, mitsubishi_1, mitsubishi_1],
      title: 'Mitsubishi Outlander III Restyling 3 More detail information',
      price: 23500,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },
   // Mercedes CLA
   {
      images: [mercedes_cla_1, mercedes_cla_1, mercedes_cla_1, mercedes_cla_1],
      title: 'Mercedes - Benz CLA I (C117, X117) 200 More information',
      price: 150000,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },
   // Mercedes W124
   {
      images: [mercedes_w124_1, mercedes_w124_1, mercedes_w124_1, mercedes_w124_1],
      title: 'Mercedes-Benz W124 420',
      price: 23500,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },
   // Mercedes E-Class
   {
      images: [mercedes_e_1, mercedes_e_1, mercedes_e_1, mercedes_e_1],
      title: 'Mercedes-Benz E-Class III (W211, S211) Restyling 230',
      price: 150000,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },
   // Audi A7
   {
      images: [audi_a7, audi_a7, audi_a7, audi_a7],
      title: 'Audi A7 I (4G) S-tronic',
      price: 23500,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },

   // 2га сторінка

   // Porsche
   {
      images: [porsche_1, porsche_2, porsche_3, porsche_4],
      title: 'Porsche Panamera II Turbo S E-Hybrid',
      price: 150000,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },
   // Mitsubishi
   {
      images: [mitsubishi_1, mitsubishi_1, mitsubishi_1, mitsubishi_1],
      title: 'Mitsubishi Outlander III Restyling 3 More detail information',
      price: 23500,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },
   // Mercedes CLA
   {
      images: [mercedes_cla_1, mercedes_cla_1, mercedes_cla_1, mercedes_cla_1],
      title: 'Mercedes - Benz CLA I (C117, X117) 200 More information',
      price: 150000,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },
   // Mercedes W124
   {
      images: [mercedes_w124_1, mercedes_w124_1, mercedes_w124_1, mercedes_w124_1],
      title: 'Mercedes-Benz W124 420',
      price: 23500,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },
   // Mercedes E-Class
   {
      images: [mercedes_e_1, mercedes_e_1, mercedes_e_1, mercedes_e_1],
      title: 'Mercedes-Benz E-Class III (W211, S211) Restyling 230',
      price: 150000,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },
   // Audi A7
   {
      images: [audi_a7, audi_a7, audi_a7, audi_a7],
      title: 'Audi A7 I (4G) S-tronic',
      price: 23500,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },

   // 3тя сторінка
   
   // Porsche
   {
      images: [porsche_1, porsche_2, porsche_3, porsche_4],
      title: 'Porsche Panamera II Turbo S E-Hybrid',
      price: 150000,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },
   // Audi A7
   {
      images: [audi_a7, audi_a7, audi_a7, audi_a7],
      title: 'Audi A7 I (4G) S-tronic',
      price: 23500,
      carYear: 2012,
      carClass: 'Sedan',
      carTransmission: 'Transmission',
      carKilometers: 'Kilometres'
   },
]


export const AllCars = () => {
   const [carsPerPage, setCarsPerPage] = useState(6); // Default value

   useEffect(() => {
      function handleResize() {
         if (window.innerWidth <= 639.98) {
            setCarsPerPage(4);
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

   const indexOfLastArticle = currentPage * carsPerPage;
   const indexOfFirstArticle = indexOfLastArticle - carsPerPage;
   const currentCars = carsData.slice(indexOfFirstArticle, indexOfLastArticle);


   return (
      <div className="all-cars">
         <div className="all-cars__body">
            {currentCars.map((car, index) => (
               <CardCar key={index}
                  images={car.images}
                  title={car.title}
                  price={car.price.toLocaleString()}
                  carYear={car.carYear}
                  carClass={car.carClass}
                  carTransmission={car.carTransmission}
                  carKilometers={car.carKilometers}
               />
            ))}
         </div>

         <Pagination
            itemsData={carsData}
            itemsPerPage={carsPerPage}
            handleClick={handleClick}
            currentPage={currentPage}
         />
      </div>
   );
}
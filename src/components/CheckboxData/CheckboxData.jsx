/* eslint-disable no-undef */
import { useState } from 'react';

import { Checkbox, CheckboxEmpty } from '../_Layouts/Checkbox/Checkbox';

import carIcon1 from '@images/icons/cars-icon/car-icon-1.svg';
import carIcon2 from '@images/icons/cars-icon/car-icon-2.svg';
import carIcon3 from '@images/icons/cars-icon/car-icon-3.svg';
import carIcon4 from '@images/icons/cars-icon/car-icon-4.svg';
import carIcon5 from '@images/icons/cars-icon/car-icon-5.svg';
import carIcon6 from '@images/icons/cars-icon/car-icon-6.svg';
import carIcon7 from '@images/icons/cars-icon/car-icon-7.svg';


// Масив даних про машини
const carIcons = [carIcon1, carIcon2, carIcon3, carIcon4, carIcon5, carIcon6, carIcon7];
const carData = ['Trucks', 'SUV', 'Sedan', 'Hatchback', 'Coupe', 'Convertible', 'VAN'];


export const CheckboxData = () => {

   // Ініціалізуємо стан для кожного чекбокса окремо
   const [checkedStates, setCheckedStates] = useState(carData.reduce((acc, _, index) => {
      acc[index] = false; // Всі чекбокси спочатку не вибрані
      return acc;
   }, {}));

   // Оновлюємо конкретний чекбокс
   const handleChange = index => {
      setCheckedStates(prevStates => ({
         ...prevStates,
         [index]: !prevStates[index] // Переключаємо стан конкретного чекбокса
      }));
   };


   return (
      <>
         {carData.map((type, index) => (
            <Checkbox
               key={index}
               isChecked={checkedStates[index]}
               onChange={() => handleChange(index)} // Тепер передаємо індекс, щоб знати, який саме чекбокс змінити
               icon={carIcons[index]}
               type={type}
            />
         ))}
      </>
   );
}


const transmissionData = ['Automatic', 'Manual'];

export const CheckboxDataTransmission = () => {

   // Ініціалізуємо стан для кожного чекбокса окремо
   const [checkedStates, setCheckedStates] = useState(transmissionData.reduce((acc, _, index) => {
      acc[index] = false; // Всі чекбокси спочатку не вибрані
      return acc;
   }, {}));

   // Оновлюємо конкретний чекбокс
   const handleChange = index => {
      setCheckedStates(prevStates => ({
         ...prevStates,
         [index]: !prevStates[index] // Переключаємо стан конкретного чекбокса
      }));
   };


   return (
      <>
         {transmissionData.map((type, index) => (
            <CheckboxEmpty
               key={index}
               isChecked={checkedStates[index]}
               onChange={() => handleChange(index)} // Тепер передаємо індекс, щоб знати, який саме чекбокс змінити
               type={type}
            />
         ))}
      </>
   );
}
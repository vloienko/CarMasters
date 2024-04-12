/* eslint-disable react/prop-types */
import './DropdownLists.scss';

import Select from 'react-dropdown-select';


export const DropdownMulti = ({ options, search }) => {
   return (
      <Select
         options={options}
         multi
         placeholder={search}
      />
   );
}
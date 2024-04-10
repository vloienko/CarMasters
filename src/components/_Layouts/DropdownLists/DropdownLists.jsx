/* eslint-disable react/prop-types */
import './DropdownLists.scss';

import Select from 'react-dropdown-select';


export const Dropdown = ({ options }) => {
   return (
      <Select
         options={options}
         multi
      />
   );
}
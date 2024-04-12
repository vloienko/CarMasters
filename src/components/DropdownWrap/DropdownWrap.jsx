import './DropdownWrap.scss';

import { DropdownMulti } from '../_Layouts/DropdownLists/DropdownLists';


const optionsMake = [
   { value: 1, label: 'Porsche' },
   { value: 2, label: 'Mercedes-Benz' },
   { value: 3, label: 'Mitsubishi' },
   { value: 4, label: 'Audi' },
   { value: 5, label: 'Toyota' },
];

const optionsModel = [
   { value: 1, label: 'Panamera' },
   { value: 2, label: '911' },
   { value: 3, label: 'Cayman' },
   { value: 4, label: 'Cayane' },
   { value: 5, label: 'Boxter' },
];


export const DropdownWrapMake = () => {
   return (
      <div className="dropdown-wrap">
         <span className="dropdown-wrap__label">Make</span>
         <DropdownMulti options={optionsMake} search={'Search Make...'} />
      </div>
   );
}

export const DropdownWrapModel = () => {
   return (
      <div className="dropdown-wrap">
         <span className="dropdown-wrap__label">Make</span>
         <DropdownMulti options={optionsModel} search={'Search Model...'} />
      </div>
   );
}
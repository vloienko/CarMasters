/* eslint-disable react/prop-types */
import ReactSlider from 'react-slider';

import './ReactSlider.scss';


export const ReactSliderCalculator = ({ min, max, defaultValue, onChange }) => {
   return (
      <ReactSlider
         className="horizontal-slider"
         thumbClassName="example-thumb"
         trackClassName="example-track"
         renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
         min={min}
         max={max}
         defaultValue={defaultValue}
         onChange={onChange}
      />
   );
}
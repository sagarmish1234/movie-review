import React from 'react';
import './dropdown.css';

function Dropdown({ options }) {
  return (
    <div className="dropdownContainer">
      {options.map((option, index) => {
        return (
          <div key={index} className="dropdownOption">
            {option}
          </div>
        );
      })}
    </div>
  );
}

export default Dropdown;

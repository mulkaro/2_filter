import React from 'react';
import './Toolbar.css';

function Toolbar(typesList,selected,onSelectFilter) {
    return (
      <div className='toolbar'>
        {typesList.map((item, index) => {
          return (
            <button
              onClick={onSelectFilter}
              key={index}
              className={item === selected ? 'active' : ''}>
              {item}
            </button>
          )
          }
        )})
      </div>
    );
  }
  
export default Toolbar;

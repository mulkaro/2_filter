import React from 'react';
import './Toolbar.css';

function Toolbar(typesList,selected,onSelectFilter) {
  function MakeTools(list,selected,onSelectFilter) {
    let resList=[];
    let key=0;
    for (let item of list) {
      this.resList.push(
        <button 
          onClick={onSelectFilter}
          key={key}
          className={item === selected ? 'active' : 'button'}>
          {item}
        </button>
      );
      key++;
    };
    return resList
  }
  
  return (
    <div className='toolbar'>
      <MakeTools list={typesList} selected={selected} onSelectFilter={onSelectFilter} />
    </div>
  )
    
}
  
export default Toolbar;

import React from 'react';
import './ProjectList.css';

function ProjectList({ projects }) {
    let index = 0;
  
    return ( 
      projects.map((item) => {
        return ( 
          <div className='column' key={index++}>
            <img src={item.img} alt='' />
          </div>
        )
      })
    
    );
  }

export default ProjectList;

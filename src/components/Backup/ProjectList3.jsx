import React from 'react';
import './ProjectList.css';

function ProjectList({ projects }) {
  //let index = 0;
  function Image(img_ref) {
    return (
      <div>
        <img src={img_ref} alt='' />
      </div>
    )
  }

  /*function Images(data) {

  }*/
    
return ( 
  <div className="container">
  {
    projects.map((item, index) => {
      return (<Image img_ref={item.img} key={index} />)
    })
  }
  </div>
  )
}

export default ProjectList;

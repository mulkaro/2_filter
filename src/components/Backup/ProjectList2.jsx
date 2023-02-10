import React from 'react';
import './ProjectList.css';
import Math from 'math';

function ProjectList({ projects }) {
  /*let index = 0;*/
  let limit = 3;
  let count = Math.floor(projects.length/limit);
    
  const sublists = [];
  while (projects.length > 0) {
    var sublist = projects.splice(0, count);
      sublists.push(sublist);
  };

  return ( 
    <div class="row">
      {sublists.map((sublist) => {
        return (
          <div class="column">
            {sublist.map((item, index) => {
              return (
                <img src={item.img} alt='' key={index} />
              )
            }
            )}
          </div>
        )
        }
        )
      }
    </div>
  );
}

export default ProjectList;

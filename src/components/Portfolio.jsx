import { useState } from "react"
import './Portfolio.css';
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";
//import {render} from 'react-dom';

function Portfolio ({ projectList }) {
  const typesList = ["All", "Websites", "Flayers", "Business Cards"];
  const [filteredTypes, setFilteredTypes] = useState("All");        
  const [filteredProjects, setFilteredProjects] = useState(projectList);

  function handleFilter (e) {
    return function(e) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((item) => item.classList.remove('active'));
    e.target.classList.add('active');
    const myselected = e.target.textContent;
    if (myselected === 'All') {
      setFilteredProjects(projectList);
    } else {
      setFilteredProjects(
        projectList.filter((item) => item.category === myselected)
      );
    }
    setFilteredTypes(myselected);
    //console.log(myselected);
    }
  }

  return(
    <div>
      <Toolbar typesList={typesList} selected={filteredTypes} onSelectFilter={handleFilter} />
      <ProjectList projects={filteredProjects} />

    </div> 
  )
}

export default Portfolio;

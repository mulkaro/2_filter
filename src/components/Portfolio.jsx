import { useState } from "react"
import './Portfolio.css';
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";
import {render} from 'react-dom';

function Portfolio ({ projectList }) {
  const typesList=["All", "Websites", "Flayers", "Business Cards"];
  const [filteredTypes, setFilteredTypes] = useState("All");        
  const [filteredProjects, setFilteredProjects] = useState(projectList);

  const filter = (e) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((item) => item.classList.remove('active'));
    e.target.classList.add('active');
    const myselected = e.target.textContent;
    if (myselected === 'All') {
      setFilteredProjects(projectList);
    } else {
      setFilteredProjects(
        projectList.filter(item => item.category === myselected)
      );
    }
    setFilteredTypes(myselected);
    console.log(myselected);
  }
        render()
        {
          return(
            <div>
              <ProjectList projects={filteredProjects}/>
              <Toolbar filters={typesList}
                selected={filteredTypes}
                onSelectFilter={filter}/>
            </div> 
          )
        }
}

export default Portfolio;

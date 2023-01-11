import { useState } from "react"
import './Portfolio.css';
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

function Portfolio ({ projectList }) {
  const typesList=["All", "Websites", "Flayers", "Business Cards"];
  let [filteredTypes, setFilteredTypes] = useState("All");        
  let [filteredProjects, setFilteredProjects] = useState(projectList);

  const filter = (e) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((item) => item.classList.remove('active'));
    e.target.classList.add('active');
    const select = e.target.textContent;
    if (select === 'All') {
      setFilteredProjects(projectList);
    } else {
      setFilteredProjects(
        projectList.filter(item => item.category === select)
      );
    }
    setSelected(select);
    console.log(select);
  }
        render()
        {
          return(
            <div>
              <ProjectList projects={filteredProjects}/>
              <Toolbar filters={typesList}
                selected={selected}
                onSelectFilter={filter}/>
            </div> 
          )
        }
}

export default Portfolio;

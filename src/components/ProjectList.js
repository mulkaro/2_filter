class ProjectList {
    constructor(projects) {}

    render()
        {
        return(
                <div>
                {this.projects.map(item => (
                    <img src={item.img} alt={item.category}/>))
                }
                </div>
              )
        }

}

export default ProjectList;
    
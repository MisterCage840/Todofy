const projectsContainer = function() {
    let projectArray = []

    const addProject = (project) => projectArray.push(project)
    const removeProject = (project) =>{
        for(let i=0; i<projectArray.length; i++){
            if(project.getProjectName() == projectArray[i].getProjectName()){
                projectArray.splice(i,1)
            }
        }
    }

    const getProjects = () => projectArray
    
    return {addProject, removeProject, getProjects}
}

export {projectsContainer}
import {projectsContainer1} from './index.js'

const removeProjectClick = function(projectName) {
    let projectsArray = projectsContainer1.getProjects()
    projectsArray.forEach(project => {
        if(project.getProjectName() == projectName){
            projectsContainer1.removeProject(project)
        }
    })
}

export {removeProjectClick}
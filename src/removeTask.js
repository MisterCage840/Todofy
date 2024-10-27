import {projectsContainer1} from './index.js'

const removeTaskClick = function(tasktoRemove, selectedProject) {

    let projectsArray = projectsContainer1.getProjects()
    projectsArray.forEach(project => {
        if(project.getProjectName() == selectedProject){
            project.removeFromtoDoList(tasktoRemove)
        }
    })
}


export {removeTaskClick}
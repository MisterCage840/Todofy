import {project} from './project.js'
import {projectsContainer} from './projectsContainer.js'

const newProjectClick = function () {
    const newProjectContainer = document.createElement('div')
    newProjectContainer.classList.add('newProjectContainer')

    const projectLabel = document.createElement('p')
    const labelText = document.createTextNode('Project Name')
    projectLabel.appendChild(labelText)

    const projectInput = document.createElement('input')
    projectInput.classList.add('projectInput')

    const addProjectBtn = document.createElement('button')
    const addProjectBtnText = document.createTextNode('Add Project')
    addProjectBtn.appendChild(addProjectBtnText)
    addProjectBtn.classList.add('addProjectBtn')

    newProjectContainer.appendChild(projectLabel)
    newProjectContainer.appendChild(projectInput)
    newProjectContainer.appendChild(addProjectBtn)

    return newProjectContainer
}

const addProjectBtnClick = function () {
    const projectInput = document.querySelector('.projectInput')
    let projectName = projectInput.value
    let project1 = new project(projectName)
    return project1
}

export {newProjectClick, addProjectBtnClick}
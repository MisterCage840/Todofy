import {projectsContainer1} from './index.js'
import { project } from './project.js'


const viewClick = function() {
    const viewContainer = document.createElement('div')

    const viewHeader = document.createElement('h2')
    const viewHeaderText = document.createTextNode('My Todofy List')
    viewHeader.classList.add('viewHeader')
    viewHeader.appendChild(viewHeaderText)
    viewContainer.appendChild(viewHeader)

    let projectsArray = projectsContainer1.getProjects()
    console.log(projectsArray)
    for(let i=0; i< projectsArray.length; i++){
        const projectNameDiv = document.createElement('div')
        const projectName = document.createElement('h3')
        const projectNameText = document.createTextNode(projectsArray[i].getProjectName())
        const projectNameBtnPar = document.createElement('p')
        const projectNameBtn = document.createElement('button')
        projectNameBtn.classList.add('projectNameBtn')
        projectNameBtn.textContent = 'X'
        projectNameBtnPar.appendChild(projectNameBtn)
        projectNameDiv.classList.add('projectName')
        projectName.appendChild(projectNameText)
        projectNameDiv.appendChild(projectName)
        projectNameDiv.appendChild(projectNameBtnPar)

        viewContainer.appendChild(projectNameDiv)

        
        let projectTaskArray = projectsArray[i].gettoDoList()
        console.log(projectTaskArray);
        projectTaskArray.forEach(task => {
            console.log(projectsArray[i])
            const taskName = document.createElement('p')
            const taskNameTextPar = document.createElement('p')
            const taskNameText = document.createTextNode(task.getTaskName())
            taskNameTextPar.appendChild(taskNameText)
            const taskNameBtn = document.createElement('button')
            taskNameBtn.classList.add('taskNameBtn')
            taskNameBtn.textContent = 'X'
            taskNameBtn.classList.add('taskNameBtn')
            taskName.appendChild(taskNameTextPar)
            taskName.appendChild(taskNameBtn)
            taskName.classList.add('taskName')
            viewContainer.appendChild(taskName)
        })
    }

    return viewContainer
}

export {viewClick}
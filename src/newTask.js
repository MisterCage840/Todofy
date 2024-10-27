import {toDoTask} from './task.js'
import {projectsContainer1} from './index.js'

//populate dropdown list
const populate = (array,select)=> {            
    for(var i = 0; i < array.length; i++) {
        var prio = array[i]
        var el = document.createElement("option")
        el.textContent = prio
        el.value = prio  
        select.appendChild(el)
    }
}

//populate Projects
const populateProjects = (array,select)=> {            
    for(var i = 0; i < array.length; i++) {
        var proj = array[i]
        var el = document.createElement("option")
        el.textContent = proj.getProjectName()
        el.value = proj.getProjectName()  
        select.appendChild(el)
    }
}

const newTaskClick = function() {
    const priorityList = ['Low', 'Medium', 'High']

    const newTaskInfoContainer = document.createElement('div')
    newTaskInfoContainer.classList.add('newTaskInfoContainer')
    
    const taskNameContainer = document.createElement('div')
    taskNameContainer.classList.add('taskNameContainer')
    const taskNameLabel = document.createElement('p')
    const taskNameText = document.createTextNode('Task Name')
    taskNameLabel.appendChild(taskNameText)
    const taskNameInput = document.createElement('input')
    taskNameContainer.appendChild(taskNameLabel)
    taskNameContainer.appendChild(taskNameInput)

    const dueDateContainer = document.createElement('div')
    dueDateContainer.classList.add('dueDateContainer')
    const dueDateLabel = document.createElement('p')
    const dueDateText = document.createTextNode('Due Date')
    dueDateLabel.appendChild(dueDateText)
    const dueDateInput = document.createElement('input')
    dueDateInput.setAttribute('type','date')
    dueDateContainer.appendChild(dueDateLabel)
    dueDateContainer.appendChild(dueDateInput)

    const priorityContainer = document.createElement('div')
    priorityContainer.classList.add('priorityContainer')
    const priorityLabel = document.createElement('p')
    const priorityText = document.createTextNode('Priority')
    priorityLabel.appendChild(priorityText)
    const priorityInput = document.createElement('select')
    populate(priorityList,priorityInput)
    priorityContainer.appendChild(priorityLabel)
    priorityContainer.appendChild(priorityInput)

    const projectNameContainer = document.createElement('div')
    projectNameContainer.classList.add('projectNameContainer')
    const projectNameLabel = document.createElement('p')
    const projectNameText = document.createTextNode('Project')
    projectNameLabel.appendChild(projectNameText)
    const projectNameInput = document.createElement('select')
    let projectsArray = projectsContainer1.getProjects()
    populateProjects(projectsArray,projectNameInput)
    projectNameContainer.appendChild(projectNameLabel)
    projectNameContainer.appendChild(projectNameInput)

    const addTaskBtnContainer = document.createElement('div')
    const addTaskBtn = document.createElement('button')
    const addTaskBtnText = document.createTextNode('Add Task')
    addTaskBtn.appendChild(addTaskBtnText)
    addTaskBtn.classList.add('addTaskBtn')
    addTaskBtnContainer.appendChild(addTaskBtn)

    newTaskInfoContainer.appendChild(taskNameContainer)
    newTaskInfoContainer.appendChild(dueDateContainer)
    newTaskInfoContainer.appendChild(priorityContainer)
    newTaskInfoContainer.appendChild(projectNameContainer)
    newTaskInfoContainer.appendChild(addTaskBtnContainer)



    return newTaskInfoContainer
}

export {newTaskClick}


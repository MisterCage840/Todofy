import './style.css'
import { toDoTask } from './task'
import { project } from './project'
import {newProjectClick, addProjectBtnClick} from './newProject.js'
import { projectsContainer } from './projectsContainer'
import {logErrorMessage} from './errorLog.js'
import {newTaskClick} from './newTask.js'
import {newTaskInputChecker} from './newTaskInputChecker.js'
import {viewClick} from './view.js'
import {removeTaskClick} from './removeTask.js'
import {removeProjectClick} from './removeProject.js'

//HTML selectors
const newProjectBtn = document.querySelector('.newProjectBtn')
const userUIContainer = document.querySelector('.userUIContainer')
const hiddenMessage = document.querySelector('.hiddenMessage')
const newTaskBtn = document.querySelector('.newTaskBtn')
const viewBtn = document.querySelector('.viewBtn')


//default and only Projects Container
export const projectsContainer1 = new projectsContainer()
//default and only Error message logger
const logErrorMessage1 = new logErrorMessage();


//clear input values
const clearInput = (inputContainer) => {
    inputContainer.value = ''
}

//check Input Values for errors or empty values
const checkInput = (inputs)=> {
    for(let i=0; i<inputs.length; i++){
        if(!inputs.value)
            return 0
    }
    return 1
}

//new Project Btn click event Listener
newProjectBtn.addEventListener('click', ()=>{
    userUIContainer.innerHTML = ''
    userUIContainer.appendChild(newProjectClick())
    const addProjectBtn = document.querySelector('.addProjectBtn')
    const projectInput = document.querySelector('.projectInput')
    
    addProjectBtn.addEventListener('click', (event)=> {
        if(projectInput.value){
            logErrorMessage1.clearErrorMessage()
            event.preventDefault()
            projectsContainer1.addProject(addProjectBtnClick())
            clearInput(projectInput)
            // console.log(projectsContainer1.getProjects());
        }else{
            logErrorMessage1.newProjectError()
        }
    })
})

//new Task Button Event Handler
newTaskBtn.addEventListener('click', () => {
    userUIContainer.innerHTML = ''
    userUIContainer.appendChild(newTaskClick())
    const addTaskBtn = document.querySelector('.addTaskBtn')

    addTaskBtn.addEventListener('click', (event) => {
        event.preventDefault()

        const taskNameInput = document.querySelector('.taskNameContainer>input')
        const dueDateInput = document.querySelector('.dueDateContainer>input')
        const priorityInput = document.querySelector('.priorityContainer>select')
        const projectNameInput = document.querySelector('.projectNameContainer>select')
        //if all fields are filled up
        if(newTaskInputChecker() == 1){
            let newTask = new toDoTask(taskNameInput.value, dueDateInput.value, priorityInput.value , 'Pending', projectNameInput.value)
            let newArray = projectsContainer1.getProjects()
            newArray.forEach(project => {
              if(project.getProjectName() == newTask.getProject()){
                project.addtoDoList(newTask)
                hiddenMessage.textContent = 'Task added successfully!'
                clearInput(taskNameInput)
                clearInput(dueDateInput)
              }  
            })
        }else{
            hiddenMessage.textContent = newTaskInputChecker()
        }
    })
})


//view Btn Event Click Handler
viewBtn.addEventListener('click', ()=> {
    hiddenMessage.textContent = ''
    userUIContainer.innerHTML = ''
    userUIContainer.appendChild(viewClick())

    //remove Task Btn
    let newArray = projectsContainer1.getProjects()
    const removeTaskBtns = document.querySelectorAll('.taskNameBtn')
    const removeProjectBtns = document.querySelectorAll('.projectNameBtn')

    removeProjectBtns.forEach(removeProjectBtn => {
        removeProjectBtn.addEventListener('click', () => {
            const projecttoRemove = removeProjectBtn.parentElement.parentElement.querySelector('h3').textContent
            removeProjectClick(projecttoRemove)
            hiddenMessage.textContent = ''
            userUIContainer.innerHTML = ''
            userUIContainer.appendChild(viewClick())
        })
    })

    removeTaskBtns.forEach(removeTaskBtn => {
        removeTaskBtn.addEventListener('click', ()=> {
            const tasktoRemove = removeTaskBtn.parentElement.querySelector('p').textContent
            const removedTaskProject = removeTaskBtn.parentElement.parentElement.querySelector('h3').textContent
            removeTaskClick(tasktoRemove, removedTaskProject)
            hiddenMessage.textContent = ''
            userUIContainer.innerHTML = ''
            userUIContainer.appendChild(viewClick())
        })
    })
})







// //testing from here
// const project1 = new project('skl')
// console.log(project1.getProjectName())
// console.log(project1.setProjectName('home'))
// console.log(project1.gettoDoList())

// const task1 = new toDoTask('shower', '01/01/2024', 'Low', 'Pending', project1)
// console.log(task1.getTaskName())
// console.log(task1.setTaskName('HW'))
// console.log(task1.getdueDate())
// console.log(task1.setdueDate('01/01/2025'))
// console.log(task1.getPriority())
// console.log(task1.setPriority('High'))
// console.log(task1.getProject())

// console.log('~~~~~~~~~~~~')

// project1.addtoDoList(task1)
// project1.gettoDoList().forEach(task => {
//     console.log(task.getTaskName())
// });

// const project2 = new project('sklFR')

// task1.setProject(project2)
// console.log(task1.getProject())


// console.log('~~~~~~~~~~~~~~~~')

// const task2 = new toDoTask('Journal', '01/02/2024', 'High', 'Pending', project2)
// project2.addtoDoList(task2)
// project2.removeFromtoDoList(task1)

// project2.gettoDoList().forEach(task => {
//     console.log(task.getTaskName())
// });

//to here

// console.log(task1.setProject(project2))
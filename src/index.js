import './style.css'
import { toDoTask } from './task'
import { project } from './project'
import {newProjectClick, addProjectBtnClick} from './newProject.js'
import { projectsContainer } from './projectsContainer'
import {logErrorMessage} from './errorLog.js'

//HTML selectors
const newProjectBtn = document.querySelector('.newProjectBtn')
const userUIContainer = document.querySelector('.userUIContainer')
const hiddenMessage = document.querySelector('.hiddenMessage')


//default and only Projects Container
const projectsContainer1 = new projectsContainer()
//default and only Error message logger
const logErrorMessage1 = new logErrorMessage();


//clear input values
const clearInput = (inputContainer) => {
    inputContainer.value = ''
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
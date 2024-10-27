import project from './project.js'

const toDoTask = function (taskName, dueDate, priority, status, Taskproject){
    const getTaskName = () => taskName
    const setTaskName = (newTaskName) => taskName = newTaskName

    const getdueDate = () => dueDate
    const setdueDate = (newDate) => dueDate = newDate

    const getPriority = () => priority
    const setPriority = (newPriority) => priority = newPriority

    const getStatus = () => status
    const toggleStatus = () => {
        let newStatus = (status = 'done') ? 'Pending' : 'done'
        return newStatus
    }
    
    const getProject = () => Taskproject
    const setProject = (newProject) => Taskproject = newProject

    return {getTaskName, setTaskName, getdueDate, setdueDate, getPriority, setPriority, getStatus, toggleStatus, getProject, setProject}
}

export {toDoTask}
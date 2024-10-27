import toDoTask from './task.js'

const project = function(projectName) {
    let toDoList = []
    
    const getProjectName = ()=> projectName
    const setProjectName = (newProjectName) => projectName = newProjectName

    const gettoDoList = ()=> toDoList
    const addtoDoList = (task) => {
        toDoList.push(task)
    }
    const removeFromtoDoList = (tasktoRemove) => {
        for(let i=0; i<toDoList.length; i++){
            if(toDoList[i].getTaskName() == tasktoRemove)
                toDoList.splice(i,1) 
        }
        return toDoList
    }

    const removeAllTasks = (project) => {
        for(let i=0; i < project.gettoDoList(); i++){
            project.removeFromtoDoList()
        }
    }


    return {getProjectName, setProjectName, gettoDoList, addtoDoList, removeFromtoDoList}
}

export {project}
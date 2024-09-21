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
            if(toDoList[i].getTaskName() == tasktoRemove.getTaskName())
                toDoList.splice(i,1) 
        }
        return toDoList
    }


    return {getProjectName, setProjectName, gettoDoList, addtoDoList, removeFromtoDoList}
}

export {project}
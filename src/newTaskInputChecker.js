const newTaskInputChecker = () => {

    const taskNameInput = document.querySelector('.taskNameContainer>input')
    const dueDateInput = document.querySelector('.dueDateContainer>input')
    const priorityInput = document.querySelector('.priorityContainer>select>option')
    const projectNameInput = document.querySelector('.projectNameContainer>select>option')

    if(!taskNameInput.value)
        return 'Please fill in a task name'
    else if(!dueDateInput.value)
        return 'Please fill in a date'
    else if(!priorityInput.value)
        return 'Please fill in a priority level'
    else if(!projectNameInput.value)
        return 'Please fill in a project for your task'
    else 
        return 1
}

export {newTaskInputChecker}
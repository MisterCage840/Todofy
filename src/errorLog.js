const hiddenMessage = document.querySelector('.hiddenMessage')

const logErrorMessage = function () {
    
    const newProjectError = () => hiddenMessage.innerHTML = 'Please Enter a valid project name'
    
    const clearErrorMessage = () => hiddenMessage.innerHTML = ''

    return {newProjectError, clearErrorMessage}
}


export {logErrorMessage}
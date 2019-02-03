export const register = (data) => {
    return {
        type: 'REGISTER',
        data: data
    }
}

export const registrationSuccessful = () => {
    return {
        type: 'REGISTRATION_SUCCESSFUL'
    }
}

export const registrationFailed = () => {
    return {
        type: 'REGISTRATION_FAILED'
    }
}

export const showPopup = (message) => {
    return {
        type: 'SHOW_POPUP',
        message: message
    }
}

export const hidePopup = () => {
    return {
        type: 'HIDE_POPUP',
    }
}
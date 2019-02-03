const initState = {
    registration: {
        firstName: null,
        lastName: null,
        email: null,
        eventDate: null,
        status: null,
    },
    popup: {
        show: false,
        message: null
    }
}

export const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'REGISTER':
            return {
                ...state,
                registration: {
                    ...action.data,
                    status: 'PENDING'
                }
            }
        case 'REGISTRATION_SUCCESSFUL':
            return {
                ...state,
                registration: {
                    ...state.registration,
                    status: 'SUCCESSFUL'
                }
            }
        case 'REGISTRATION_FAILED':
            return {
                ...state,
                registration: {
                    ...state.registration,
                    status: 'FAILED'
            }
        }
        case 'SHOW_POPUP': {
            return {
                ...state,
                popup: {
                    show: true,
                    message: action.message
                }
            }
        }
        case 'HIDE_POPUP': {
            return {
                ...state,
                popup: {
                    show: false,
                    message: null
                }
            }
        }
        default:
            return state;
    }
}
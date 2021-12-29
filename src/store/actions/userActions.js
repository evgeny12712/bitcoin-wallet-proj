import { userService } from "../../services/userService"

export function signUp(user) {
    return async (dispatch) => {
        try {
            userService.signup(user)
            dispatch({ type: 'SET_LOGGEDIN_USER', user: user })
        } catch (err) {
            console.log(err);
        }
    }
}

export function login(user) {
    return async (dispatch) => {
        try {
            const isValid = userService.login(user)
            if (isValid) dispatch({ type: 'SET_LOGGEDIN_USER', user: user })
            return isValid
        } catch (err) {
            console.log(err);
        }
    }
}

export function logout() {
    return async (dispatch) => {
        try {
            userService.logout()
            dispatch({ type: 'SET_LOGGEDIN_USER', user: null })
        } catch (err) {
            console.log(err);
        }
    }
}

export function getLoggedinUser() {
    return async (dispatch) => {
        try {
            const loggedinUser = userService.getLoggedinUser()
            dispatch({ type: 'SET_LOGGEDIN_USER', user: loggedinUser })
            return loggedinUser
        } catch (err) {
            console.log(err);
        }
    }
}

export function getEmptyUser() {
    return () => {
        return userService.getEmptyUser()
    }
}

// export function transfer(amount, toContactId) {
//     return async (dispatch) => {
//         try {
//             let user = userService.transfer(amount, toContactId)
//             dispatch({ type: 'SET_LOGGEDIN_USER', user: user })
//         } catch (err) {
//             console.log(err);
//         }
//     }
// }

export function getUsers() {
    return async () => {
        try {
            return await userService.getUsers()
        } catch (error) {
            console.log('error', error)
        }
    }
}

export function transferCoins(amount, contact) {
    return async (dispatch) => {
        try {
            const user = await userService.transferCoins(amount, contact)
            dispatch({ type: 'SET_LOGGEDIN_USER', user })
        } catch (error) {
            console.log(error);
        }
    }
}

//----------------------CONTACTS--------------------------//

export function loadContacts() {
    return async (dispatch, getState) => {
        const { filterBy } = getState().userModule
        try {
            const contacts = await userService.getContacts(filterBy)
            dispatch({ type: 'SET_CONTACTS', contacts })
        } catch (err) {
            console.log(err);
        }
    }
}


export function removeContact(contactId) {
    return async (dispatch) => {
        try {
            const user = await userService.deleteContact(contactId)
            dispatch({ type: 'SET_LOGGEDIN_USER', user })
        } catch (err) {
            console.log(err);
        }
    }
}

export function saveContact(contact) {
    return async (dispatch) => {
        try {
            const user = await userService.saveContact(contact)
            dispatch({ type: 'SET_LOGGEDIN_USER', user })
        } catch (err) {
            console.log(err);
        }
    }
}

export function setFilterBy(filterBy) {
    return async (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}

export function getContactById(contactId) {
    return async () => {
        return await userService.getContactById(contactId)
    }
}

export function getEmptyContact() {
    return () => {
        return userService.getEmptyContact()
    }
}

export function saveUser() {

}

// export function removeContact(contactId) {
//     return async (dispatch) => {
//         try {
//             await userService.deleteContact(contactId)
//             dispatch({ type: 'REMOVE_CONTACT', contactId })
//         } catch (err) {
//             console.log(err);
//         }
//     }
// }

// export function saveContact(contact) {
//     return async (dispatch) => {
//         try {
//             await userService.saveContact(contact)
//             if (contact._id) dispatch({ type: 'UPDATE_CONTACT', contact })
//             else dispatch({ type: 'ADD_CONTACT', contact })
//         } catch (err) {
//             console.log(err);
//         }
//     }
// }

// export function setFilterBy(filterBy) {
//     return async (dispatch) => {
//         dispatch({ type: 'SET_FILTER_BY', filterBy })
//     }
// }

// export function getContactById(contactId) {
//     return async () => {
//         return await userService.getContactById(contactId)
//     }
// }

// export function getEmptyContact() {
//     return () => {
//         return userService.getEmptyContact()
//     }
// }
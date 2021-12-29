const INITIAL_STATE = {
    users: [],
    loggedinUser: null,
    contacts: []
}

export function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_LOGGEDIN_USER':
            return {
                ...state,
                loggedinUser: { ...action.user }
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: [...action.contacts]
            };
        default:
            return state;
    }
}
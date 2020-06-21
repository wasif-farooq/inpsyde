import {
    SHOW_LOADING,
    HIDE_LOADING,
    SET_USERS,
    SET_USER,
    SET_COLUMNS,
    TOGGLE_COLUMN,
    SET_CURRENT_USER_ID
} from './contants'




const reducer = (state, action) => {
    const { type, payload } = action

    console.log("type :", type)
    switch (type) {
        case SHOW_LOADING:
            return {
                ...state,
                loading: true
            }
        case HIDE_LOADING:
            return {
                ...state,
                loading: false
            }
        case SET_USERS:
            return {
                ...state,
                users: {
                    ...state.users,
                    list: [...payload]
                }
            }
        case SET_USER:
            return {
                ...state,
                users: {
                    ...state.users,
                    byId: {
                        ...state.users.byId,
                        [payload.id]: {...payload}
                    }
                }
            }
        case SET_COLUMNS:
            return {
                ...state,

            }
        case SET_CURRENT_USER_ID:
            return {
                ...state,
                current: payload
            }
        case TOGGLE_COLUMN:
            console.log("payload : ", payload)
            return {
                ...state,
                columns: {
                    ...state.columns,
                    [payload.column]: {
                        ...state.columns[payload.column],
                        visible: payload.visible
                    }
                }
            }
        default:
            console.log("state1:", state)
            return state
    }

}

export default reducer
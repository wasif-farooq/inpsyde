import create from '../utils/action-creator'
import {
    USERS_LIST_FETCH,
    USERS_LIST_FETCH_SUCCESS,
    USERS_LIST_FETCH_ERROR,
    USER_GET,
    USER_GET_SUCCESS,
    USER_GET_ERROR
} from '../constants';

export default {
    users: {
        list: {
            fetch: {
                start: create(USERS_LIST_FETCH),
                success: create(USERS_LIST_FETCH_SUCCESS),
                error: create(USERS_LIST_FETCH_ERROR)
            }
        }
    },
    user: {
        get: {
            start: create(USER_GET),
            success: create(USER_GET_SUCCESS),
            error: create(USER_GET_ERROR)
        }
    }
}
import { clone } from '../utils/clone';
import actions from '../actions';

const initial = {
    list: [],
    ById: {}
}

const users = (state = initial, action) => {
    const { type, payload } = action;
    console.log("payload : ", payload)
    switch (type) {
        case actions.users.list.fetch.success.type:
            return {
                ...state,
                list: clone(payload)
            }
        case actions.user.get.success.type:
            return {
                ...state,
                ById: {
                    ...state.ById,
                    [payload.id]: clone(payload)
                }
            }
    }
    return state;
}

export default users;
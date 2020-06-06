import actions from '../actions';
import service from '../services/user';

const user = store => next => action => {

    const { type, payload } = action;
    if (type !== actions.user.get.start.type) {
        return next(action);
    }

    const state = store.getState();
    if (state.users.ById[payload]) {
        return next(action);
    }

    actions.general.loading.toggle.dispatch();
    service.get(payload)
        .then(actions.user.get.success.dispatch)
        .catch(actions.user.get.error.dispatch)
        .finally(actions.general.loading.toggle.dispatch)

}

export default user;
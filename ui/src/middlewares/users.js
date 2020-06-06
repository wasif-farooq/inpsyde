import service from '../services/user';
import actions from '../actions';

const users = store => next => action => {

    const { type, payload } = action;
    if (type !== actions.users.list.fetch.start.type) {
        return next(action);
    }

    actions.general.loading.toggle.dispatch()
    service.list()
        .then(actions.users.list.fetch.success.dispatch)
        .catch(actions.users.list.fetch.error.dispatch)
        .finally(actions.general.loading.toggle.dispatch)
}

export default users;
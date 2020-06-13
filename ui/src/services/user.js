import http from '../core/http';
//import config from '../config';
const config = {};

class UserService {

    static instance;

    constructor(config) {
        if (!UserService.instance) {
            UserService.instance = this;
        }

        //this.uri = config.api.url + '/users';
        this.uri = 'http://jsonplaceholder.typicode.com/users'
        return UserService.instance;
    }

    list = async () => {
        try {
            const response = await http.get(this.uri);
            return response;
        } catch (error) {
            throw (error.response || error.message);
        }
    }

    get = async id => {
        try {
            const response = await http.get(`${this.uri}/${id}`);
            return response;
        } catch (error) {
            throw (error.response || error.message);
        }
    }
}

const instance = new UserService(config);
export default instance;

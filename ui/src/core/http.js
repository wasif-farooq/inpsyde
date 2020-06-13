import axios from "axios";
import { tokenInterceptor, successInterceptor, errorInterceptor } from "./interceptor";

let instance = null;

class Http {

    async get(url, conf = {}) {
        try {
            const respponse = await fetch(url);
            return respponse.json();
        } catch (err) {
            throw err;
        }
    }
}

export default new Http();

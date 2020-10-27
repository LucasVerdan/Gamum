import axios from 'axios';

export default class HttpService {
    constructor(props){

        this.service = axios.create({
            baseURL: 'http://localhost:8080'
        });

        this.service.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        this.service.interceptors.response.use(response => {
            return response;
        });
    }

    get(path, config = null){
        return this.service.get(path, config);
    }

    put(path, data, config = null){
        return this.service.post(path, data, config);
    }

    post(path, data, config = null){
        return this.service.post(path, data, config);
    }

    delete(path, config = null){
        return this.service.delete(path, config);
    }

}
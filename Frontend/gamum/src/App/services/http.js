import axios from 'axios';

export default class HttpService {
    
    constructor(props){
        console.log(props);
        this.service = axios.create({
            headers: {
                'Content-Type': 'application/json',
            }
        });

        this.service.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        this.service.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log(error);
            if (error.response) {
                props.history.push('/login');
            }
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
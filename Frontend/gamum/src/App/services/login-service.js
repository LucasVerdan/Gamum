import HttpService from './http';

export default class LoginService {
    constructor(props){
        this.service = new HttpService(props);
    }

    login(username, password){
        this.service.post('/login', {username: username, password: password})
    }

}
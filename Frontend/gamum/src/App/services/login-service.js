import HttpService from './http';

export default class LoginService {
    constructor(props){
        this.service = new HttpService(props);
    }

    login(username, password){
        return this.service.get('/login', {username: username, password: password});     
    }

}
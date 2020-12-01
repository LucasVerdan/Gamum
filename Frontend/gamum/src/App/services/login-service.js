import HttpService from './http';

export default class LoginService {
    constructor(props){
        this.service = new HttpService(props);
    }

    login(username, password){
        return this.service.post('/auth', {username: username, password: password});     
    }

    signUp(username, password, email, completeName){
        return this.service.post('/register', {username: username, password: password, email: email, completeName: completeName});
    }

}
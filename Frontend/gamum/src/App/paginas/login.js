import React from 'react';
import '../styles/login.css'

import LoginService from '../services/login-service';

export default class Login extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.loginService = new LoginService(props);
    }

    handleClick(){
        let {username, password} = this.state;
        this.loginService.login(username, password);
    }

    render(){
        return (
            <body className='frameStyle'>
                <h1 className='logoStyle'>GAMUN</h1>
                <h2 className='textStyle'>Faça o login</h2>

                <input type="text" onChange={(event) => this.setState({ username: event.target.value}) }/>
                <input type="password" onChange={(event) => this.setState({ password: event.target.value}) }/>
                <button onClick={() => this.handleClick()}>Login</button>
            </body>

        );
    }

} 
// import React from 'react'
// import '../styles/modal.css'
import LoginService from '../services/login-service'
// import { withRouter } from 'react-router-dom';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function RegisterForm(props) {

    const [completeName, setCompleteName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    const classes = useStyles();

    const loginService = new LoginService(props);

    function onSubmit(e) {
        e.preventDefault()

        console.log(completeName, email, username, password);
        if (completeName && email && username && password) {
            loginService.signUp(username, password, email, completeName)
                .then(e => {
                    loginService.login(username, password)
                        .then(response => {
                            let { data } = response;
                            alert('registrado e logado com sucesso!!!');
                            history.push('/posts')
                            localStorage.setItem('userId', data._id)
                        })
                        .catch(err => alert(err))
                })
        } else {
            setError('Por favor preencha todos os campos');
        }
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>

                {error && <p className="warning">{error}</p>}

                <form className={classes.form} onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Name"
                                autoFocus
                                onChange={(e) => setCompleteName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}





// class RegisterForm extends React.Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             completeName: '',
//             email:'',
//             userName: '',
//             password: '',
//             error: '',
//         }

//         this.loginService = new LoginService(props);

//     }
//     onCompleteNameChange = (e) => {
//         const completeName = e.target.value
//         this.setState(() => ({ completeName }));
//     }

//     onEmailChange = (e) => {
//         const email = e.target.value
//         this.setState(() => ({ email }))
//     }

//     onUserNameChange = (e) => {
//         const userName = e.target.value
//         this.setState(() => ({ userName }))
//     }

//     onPasswordChange = (e) => {
//         const password = e.target.value
//         this.setState(() => ({ password }))
//     }

//     onSubmit = (e) => {
//         e.preventDefault()
//         let {completeName,email,userName,password} = this.state
//         if(completeName && email && userName && password){
//             this.loginService.signUp(userName, password )
//                 .then(e => { alert('registrado com sucesso!'); this.props.history.push('/login')})
//         } else {
//             this.setState(() => ( alert('{error: Por favor preencha todos os campos}')))
//         }

//     }

//     render () {
//         return(
//         <div>
//          {this.state.error && <p className="warning">{this.state.error}</p>}
//          <form onSubmit={this.onSubmit}>
//             <h1 className="modal-title">Cadastre-se</h1>
//             <input className="input-form" type='text' onChange={this.onCompleteNameChange} placeholder='Digite o seu nome completo' value={this.state.completeName}/>
//             <input className="input-form" type='text' onChange={this.onEmailChange} placeholder='Digite seu email' value={this.state.email}/>
//             <input className="input-form" type='text' onChange={this.onUserNameChange} placeholder='Digite seu username' value={this.state.userName}/>
//             <input className="input-form"onChange={this.onPasswordChange} placeholder='Digite sua senha' value = {this.state.password}/>

//             <button variant="contained" size="large" color="primary">
//                CADASTRAR
//             </button>

//          </form>
//         </div>
//         )
//     }
// }
// export default withRouter(RegisterForm)
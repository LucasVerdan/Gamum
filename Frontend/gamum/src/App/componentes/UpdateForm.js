// import React from 'react'
// import '../styles/modal.css'
import LoginService from '../services/login-service'
// import { withRouter } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
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

export default function UpdateForm(props) {




    const [completeName, setCompleteName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    const classes = useStyles();

    const loginService = new LoginService(props);

    useEffect(() => {
        loginService.getUser(localStorage.getItem("userId"))
        .then(response => { setUsername(response.data.username); setPassword(response.data.password); setEmail(response.data.email); setCompleteName(response.data.completeName)});
    },[setEmail, setPassword]) 


    // function onSubmit(e) {
    //     e.preventDefault()

    //     console.log(completeName, email, username, password);
    //     if (completeName && email && username && password) {
    //         loginService.signUp(username, password)
    //             .then(e => {
    //                 loginService.login(username, password)
    //                     .then(response => {
    //                         let { data } = response;
    //                         alert('registrado e logado com sucesso!!!');
    //                         history.push('/posts')
    //                         localStorage.setItem('userId', data._id)
    //                     })
    //                     .catch(err => alert(err))
    //             })
    //     } else {
    //         setError('Por favor preencha todos os campos');
    //     }
    // }

    const handleEdit = () => {
            loginService.updateUser(username,password,email, completeName, localStorage.getItem("userId"))
                .then(response => { setUsername(response.data.username); setPassword(response.data.password); setEmail(response.data.email); setCompleteName(response.data.completeName);});
    }

    const handleDelete = async () => {
         loginService.deleteUser(localStorage.getItem("userId"));
         localStorage.removeItem("userId")
        history.push("/");
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                {console.log(email)}
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Edit User
                </Typography>

                {error && <p className="warning">{error}</p>}

                <form className={classes.form} >
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
                                value={completeName}
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
                                value={email}
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
                                value={username}
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
                                value={password}
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
                        onClick={handleEdit}
                    >
                        Edit
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                        onClick={handleDelete}
                    >
                        Delete Account
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}



import React from 'react';
import CreatePostModal from '../componentes/CreatePostModal';
import UserPostList from '../componentes/UserPostList'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



import Header from '../componentes/Header'



const sections = [
    { title: 'Mobile', url: '#' },
    { title: 'Console', url: '#' },
    { title: 'PC', url: '#' },
    { title: 'Virtual Reality', url: '#' },

  ];

  const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

const UserPosts = (props) => {
  const classes = useStyles();
    return (
        <React.Fragment>
        <Header title="GAMUM" sections={sections} />
        <CssBaseline />
          <Container maxWidth="lg">
             <UserPostList history={props.history}/>
             <Grid container spacing={0} className={classes.mainGrid}>
               <CreatePostModal history={props.history}/>
             </Grid>
          </Container>
        </React.Fragment>
    )
}

export default UserPosts;
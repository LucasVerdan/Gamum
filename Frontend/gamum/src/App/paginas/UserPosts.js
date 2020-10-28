import React, { useState } from 'react';
import UserPostList from '../componentes/UserPostList'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
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
  const [sectionPost, setSection ] = useState('');
  const getCurrentSection = (section) => {
    setSection(section);
  }
  
    return (
        <React.Fragment>
        <Header title="GAMUM" sections={sections} getCurrentSection={(data) => getCurrentSection(data)}/>
        <CssBaseline />
          <Container maxWidth="lg">
             <UserPostList history={props.history} section={sectionPost}/>
          </Container>
        </React.Fragment>
    )
}

export default UserPosts;
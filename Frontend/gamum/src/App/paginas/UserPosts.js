import React from 'react';
import CreatePostModal from '../componentes/CreatePostModal';
import UserPostList from '../componentes/UserPostList'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from '../componentes/Header'



const sections = [
    { title: 'Mobile', url: '#' },
    { title: 'Console', url: '#' },
    { title: 'PC', url: '#' },
    { title: 'Virtual Reality', url: '#' },

  ];

const UserPosts = (props) => {
    return (
        <React.Fragment>
        <CssBaseline />
          <Container maxWidth="lg">
             <Header title="GAMUM" sections={sections} />
             <UserPostList history={props.history}/>
             <CreatePostModal history={props.history}/>
          </Container>
        </React.Fragment>
    )
}

export default UserPosts;
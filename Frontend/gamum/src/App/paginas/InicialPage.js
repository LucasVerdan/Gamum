import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import PostsList from '../componentes/PostsList'
import Header from '../componentes/Header'



const sections = [
    { title: 'Mobile', url: '#' },
    { title: 'Console', url: '#' },
    { title: 'PC', url: '#' },
    { title: 'Virtual Reality', url: '#' },

  ];

const InicialPage = (props) => {

        return (
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
              <Header title="GAMUM" sections={sections} />
              <main>
                  <PostsList/>          
              </main>
            </Container>
          </React.Fragment>
        )
}

export default InicialPage;
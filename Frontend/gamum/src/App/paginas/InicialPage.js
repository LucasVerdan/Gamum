import React from 'react';

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
            <Header title="GAMUM" sections={sections} />
            <CssBaseline />
            <Container maxWidth="lg">
              <main>
                  <PostsList/>          
              </main>
            </Container>
          </React.Fragment>
        )
}

export default InicialPage;
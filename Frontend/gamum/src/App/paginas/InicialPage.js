import React, { useState } from 'react';

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
  const [sectionPost, setSection ] = useState('');
  const getCurrentSection = (section) => {
    setSection(section);
  }
        return (
          <React.Fragment>
            <Header title="GAMUM" sections={sections} getCurrentSection={(data) => getCurrentSection(data)}/>
            <CssBaseline />
            <Container maxWidth="lg">
              <main>
                  <PostsList  section={sectionPost} />          
              </main>
            </Container>
          </React.Fragment>
        )
}

export default InicialPage;
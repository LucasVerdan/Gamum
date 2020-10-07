import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignInPage from './App/paginas/SignInPage';
import UserPosts from './App/paginas/UserPosts'
import InicialPage from './App/paginas/InicialPage'
import PostPage from './App/paginas/PostPage'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact component={SignInPage} />
        <Route path="/login" exact component={SignInPage} />
        <Route path="/posts" exact component={InicialPage}/>
        <Route path="/posts/my-posts" component={UserPosts}/>
        <Route path="/posts/:id" component={PostPage}/>
    </Switch>
</ BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

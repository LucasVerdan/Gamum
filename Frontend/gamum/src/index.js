import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './App/paginas/login';
import PostFormModal from './App/componentes/PostFormModal'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/posts/create-post" component={PostFormModal}/>
    </Switch>
</ BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

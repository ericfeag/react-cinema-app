import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Details from './components/content/details/Details';
import ErrorBoundary from './components/error/ErrorBoundary';
import { appRoutes } from './redux/actions/routes';
import { AppRoutes } from './routes';
import errorPage from './redux/error/error-page';

const App =() => {
  return(
    <Provider store={store}>
      <Router>
      <Header />
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Main} /> 
          <Route exact path='/:id/:name/details' component={Details} /> 
          <Route exact path='*' component={errorPage} />
        </Switch>
      </div>
      </Router>
    </Provider>
  )
}

export default App;
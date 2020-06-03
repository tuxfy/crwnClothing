import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/hompepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndSigOut from './pages/sigin-in-and-sign-up/sigin-in-and-sign-up';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndSigOut} />
      </Switch>
    </div>
  );
}

export default App;

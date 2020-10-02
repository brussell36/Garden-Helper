import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import LandingPage from './LandingPage/LandingPage';
import AccountControl from './Account/AccountControl';
import PasswordForgot from './Account/PasswordForgot';

function PlantControl() {
  return(<React.Fragment>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/account' exact>
          <AccountControl />
        </Route>
        <Route path='/forgot-password'>
          <PasswordForgot />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
  )
}

export default PlantControl;
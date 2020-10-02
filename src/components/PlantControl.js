import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import LandingPage from './LandingPage/LandingPage';
import Signup from './Signup';
import Signin from './Signin';
import Signout from './Signout';

function PlantControl() {
  return(<React.Fragment>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/signup' exact>
          <Signup />
        </Route>
        <Route path ='/signin' exact>
          <Signin />
        </Route>
        <Route path='/signout' exact>
          <Signout />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
  )
}

export default PlantControl;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import LandingPage from './LandingPage/LandingPage';

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
      </Switch>
    </Router>
  </React.Fragment>
  )
}

export default PlantControl;
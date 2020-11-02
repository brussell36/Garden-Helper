import React, { useState } from 'react';
import { withFirebase } from './Firebase';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import LandingPage from './LandingPage/LandingPage';
import AccountControl from './Account/AccountControl';
import PasswordForgot from './Account/PasswordForgot';
import Profile from './Account/Profile';
import NewPlantForm from './NewPlantForm';
import AuthUserContext from './Session';

function App(props) {
  const [authUser, setAuthUser] = useState(null);

  props.firebase.auth.onAuthStateChanged(function(user) {
    if(user) {
      setAuthUser(user);
    } else {
      setAuthUser(null);
    }
  })

  return (
    <AuthUserContext.Provider value={authUser}>
      <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/account' exact>
          <AccountControl />
        </Route>
        <Route path='/forgot-password' exact>
          <PasswordForgot />
        </Route>
        <Route path='/profile' exact>
          <Profile />
        </Route>
        <Route path='/search-plants' exact>
          <NewPlantForm />
        </Route>
      </Switch>
    </Router>
    </AuthUserContext.Provider>
  );
}

export default withFirebase(App);
